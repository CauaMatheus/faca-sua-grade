window.onload = async () => {
  const grade = new Grade();

  const root = document.getElementById("root");

  const table = grade.getTable();

  const description = document.createElement("h1");
  description.innerHTML = "Turmas atualizadas no dia 27/07/2026 às 13:20";
  const list = grade.getList();
  root.appendChild(list);
  root.appendChild(description);
  if(window.innerWidth < window.innerHeight) {
    const help = document.createElement("h2");
    help.innerText = "Dê zoom out para ver melhor";
    root.appendChild(help);
  }
  root.appendChild(table);

  setTimeout(() => {
    window.scrollTo(window.innerWidth, 0);
  }, 100)
}
