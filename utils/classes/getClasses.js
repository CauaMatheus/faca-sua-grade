// Copy this file to the console and run it on the page below
// https://sigaa.unb.br/sigaa/public/turmas/listar.jsf

/** @param {string} universityCode @returns {Promise<HTMLElement>}*/
async function fetchHTML(universityCode) {
  const htmlElement = document.createElement("html");
  const bodyAsUrlEncoded = new URLSearchParams({
    formTurma: 'formTurma',
    "formTurma:inputNivel": "",
    "formTurma:inputDepto": universityCode,
    "formTurma:inputAno": "2025",
    "formTurma:inputPeriodo": "2",
    "formTurma:j_id_jsp_1370969402_11": "Buscar",
    "javax.faces.ViewState": "j_id1"
  });
  htmlElement.innerHTML = await fetch("https://sigaa.unb.br/sigaa/public/turmas/listar.jsf", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "accept-language": "pt-BR,pt;q=0.5",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Brave\";v=\"133\", \"Chromium\";v=\"133\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "sec-gpc": "1",
      "upgrade-insecure-requests": "1"
    },
    "referrer": "https://sigaa.unb.br/sigaa/public/turmas/listar.jsf",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": bodyAsUrlEncoded.toString(),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then(e => e.text());

  return htmlElement;
}

async function getClasses() {
  /**
   * @type {Record<string, {code: string; name: string; classNum: number; teacher: string; schedules: [number, number][];}[]>}
   */
  const classes = {};

  const translateDayToIndex = {
    "Segunda-feira": 0,
    "Terça-feira": 1,
    "Quarta-feira": 2,
    "Quinta-feira": 3,
    "Sexta-feira": 4,
    "Sábado": 5,
  };

  for (const [universityCode, universityName] of [["673", "FGA"], ["508", "CIC"], ["518", "MAT"], ["524", "IF"]]) {
    console.log("Buscando dados da", universityName);
    const element = await fetchHTML(universityCode);

    let name = "";
    let code = "";
    [...element.querySelector("#turmasAbertas > table > tbody").children].forEach((tr) => {
      if (tr.classList.contains("agrupador")) {
        const el = tr.children[0];
        [code, , ...r] = el.children[el.children.length - 1].children[1].innerText.split(" ");
        name = r.join(" ");
        return;
      }

      const classNum = parseInt(tr.children[0].innerText);
      const local = tr.children[7].innerText.trim().split(" - ")[0];
      /** @type {string} */
      let teacher = tr.children[2].innerText.split(/\(\d\dh\)/g).slice(0, -1)
        .map(e => {
          const teacherName = e.trim();
          return teacherName.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()).join(" ");
        }).join(" e ");

      if (universityCode !== "673") {
        if (!tr.children[7].innerText.includes("FCTE")) {
          return;
        }
      }

      /** @type {[number, number][]} */
      const schedules = tr.children[3].children[1].children[0].innerHTML.trim().split("<br>")
        .filter(e => e.trim())
        .flatMap(time => {
          let [dia, horarioInicio, _, horarioFim] = time.trim().split(" ");
          horarioInicio = parseInt(horarioInicio.split(":")[0]);
          horarioFim = parseInt(horarioFim.split(":")[0]);

          /**@type [Number, number][] */
          const schedules = [];
          for (let horario = horarioInicio; horario < horarioFim; horario += 2) {
            const j = translateDayToIndex[dia];
            const i = (horario-8) >> 1;

            schedules.push([i, j]);
          }
          if(code === "FGA0242") {
            console.log({schedules, time});
          }

          return schedules;
        });

      classes[code] ??= [];
      classes[code].push({
        code,
        name,
        classNum,
        teacher,
        schedules,
      });
    });
  }

  return classes;
}

res = await getClasses();
console.log(JSON.stringify(res, null, 2).replaceAll("\\", "").replaceAll('"[', "[").replaceAll(']"', "]"));
