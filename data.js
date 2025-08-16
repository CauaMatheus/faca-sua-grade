const curriculum = ([
  [
    {
      "code": "CIC0004",
      "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0163",
      "name": "INTRODUÇÃO À ENGENHARIA",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0168",
      "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0302",
      "name": "ENGENHARIA E AMBIENTE",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "MAT0025",
      "name": "CÁLCULO 1",
      "requirements": [
        "-"
      ]
    }
  ],
  [
    {
      "code": "FGA0157",
      "name": "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA",
      "requirements": [
        "MAT0025"
      ]
    },
    {
      "code": "IFD0171",
      "name": "FISICA 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "IFD0173",
      "name": "FISICA 1 EXPERIMENTAL",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "MAT0026",
      "name": "CÁLCULO 2",
      "requirements": [
        "MAT0025",
        "MAT0024",
        "OU"
      ]
    },
    {
      "code": "MAT0031",
      "name": "INTRODUCAO A ALGEBRA LINEAR",
      "requirements": [
        "-"
      ]
    }
  ],
  [
    {
      "code": "FGA0071",
      "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1",
      "requirements": [
        "MAT0031"
      ]
    },
    {
      "code": "FGA0073",
      "name": "TEORIA DE ELETRÔNICA DIGITAL 1",
      "requirements": [
        "MAT0031"
      ]
    },
    {
      "code": "FGA0085",
      "name": "MATEMÁTICA DISCRETA 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0133",
      "name": "ENGENHARIA ECONÔMICA",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0158",
      "name": "ORIENTAÇÃO A OBJETOS",
      "requirements": [
        "CIC0004",
        "CIC0007",
        "OU"
      ]
    },
    {
      "code": "FGA0160",
      "name": "MÉTODOS NUMÉRICOS PARA ENGENHARIA",
      "requirements": [
        "MAT0026"
      ]
    },
    {
      "code": "FGA0164",
      "name": "HUMANIDADES E CIDADANIA",
      "requirements": [
        "-"
      ]
    }
  ],
  [
    {
      "code": "FGA0108",
      "name": "MATEMÁTICA DISCRETA 2",
      "requirements": [
        "FGA0085",
        "FGA0159",
        "OU"
      ]
    },
    {
      "code": "FGA0142",
      "name": "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES",
      "requirements": [
        "ENE0277",
        "FGA0071",
        "FGA0073",
        "E",
        "OU"
      ]
    },
    {
      "code": "FGA0146",
      "name": "ESTRUTURAS DE DADOS 1",
      "requirements": [
        "CIC0004"
      ]
    },
    {
      "code": "FGA0303",
      "name": "PROJETO INTEGRADOR DE ENGENHARIA 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0307",
      "name": "GESTÃO DA PRODUÇÃO E QUALIDADE",
      "requirements": [
        "FGA0133"
      ]
    },
    {
      "code": "FGA0312",
      "name": "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE",
      "requirements": [
        "FGA0158"
      ]
    }
  ],
  [
    {
      "code": "FGA0003",
      "name": "COMPILADORES 1",
      "requirements": [
        "FGA0147",
        "FGA0146",
        "OU"
      ]
    },
    {
      "code": "FGA0030",
      "name": "ESTRUTURAS DE DADOS 2",
      "requirements": [
        "FGA0147",
        "FGA0146",
        "OU"
      ]
    },
    {
      "code": "FGA0137",
      "name": "SISTEMAS DE BANCO DE DADOS 1",
      "requirements": [
        "FGA0159",
        "FGA0108",
        "OU"
      ]
    },
    {
      "code": "FGA0170",
      "name": "FUNDAMENTOS DE SISTEMAS OPERACIONAIS",
      "requirements": [
        "FGA0182",
        "FGA0096",
        "OU",
        "FGA0142",
        "OU"
      ]
    },
    {
      "code": "FGA0173",
      "name": "INTERAÇÃO HUMANO COMPUTADOR",
      "requirements": [
        "FGA0138",
        "FGA0312",
        "OU"
      ]
    },
    {
      "code": "FGA0313",
      "name": "REQUISITOS DE SOFTWARE",
      "requirements": [
        "FGA0138",
        "FGA0312",
        "OU"
      ]
    }
  ],
  [
    {
      "code": "FGA0060",
      "name": "SISTEMAS DE BANCO DE DADOS 2",
      "requirements": [
        "FGA0137"
      ]
    },
    {
      "code": "FGA0124",
      "name": "PROJETO DE ALGORITMOS",
      "requirements": [
        "FGA0147",
        "FGA0146",
        "OU"
      ]
    },
    {
      "code": "FGA0208",
      "name": "ARQUITETURA E DESENHO DE SOFTWARE",
      "requirements": [
        "FGA0172",
        "FGA0313",
        "OU"
      ]
    },
    {
      "code": "FGA0211",
      "name": "FUNDAMENTOS DE REDES DE COMPUTADORES",
      "requirements": [
        "FGA0170"
      ]
    },
    {
      "code": "FGA0314",
      "name": "TESTES DE SOFTWARE",
      "requirements": [
        "FGA0138",
        "FGA0313",
        "OU"
      ]
    },
    {
      "code": "FGA0315",
      "name": "QUALIDADE DE SOFTWARE 1",
      "requirements": [
        "-"
      ]
    }
  ],
  [
    {
      "code": "FGA0109",
      "name": "FUNDAMENTOS DE SISTEMAS EMBARCADOS",
      "requirements": [
        "FGA0170"
      ]
    },
    {
      "code": "FGA0210",
      "name": "PARADIGMAS DE PROGRAMAÇÃO",
      "requirements": [
        "FGA0158",
        "FGA0003",
        "E"
      ]
    },
    {
      "code": "FGA0242",
      "name": "TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES",
      "requirements": [
        "FGA0208",
        "FGA0238",
        "FGA0314",
        "OU",
        "E"
      ]
    },
    {
      "code": "FGA0244",
      "name": "PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS",
      "requirements": [
        "FGA0211",
        "FGA0030",
        "E"
      ]
    }
  ],
  [
    {
      "code": "FGA0288",
      "name": "ESTÁGIO SUPERVISIONADO",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0316",
      "name": "ENGENHARIA DE PRODUTO DE SOFTWARE",
      "requirements": [
        "FGA0242"
      ]
    },
    {
      "code": "FGA0317",
      "name": "GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE",
      "requirements": [
        "FGA0238",
        "FGA0314",
        "OU"
      ]
    }
  ],
  [
    {
      "code": "FGA0287",
      "name": "TRABALHO DE CONCLUSÃO DE CURSO 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0304",
      "name": "PROJETO INTEGRADOR DE ENGENHARIA 2",
      "requirements": [
        "FGA0150",
        "FGA0303",
        "OU"
      ]
    }
  ],
  [
    {
      "code": "FGA0290",
      "name": "TRABALHO DE CONCLUSÃO DE CURSO 2",
      "requirements": [
        "FGA0287",
        "FGA0009",
        "OU"
      ]
    },
    {
      "code": "FGA0318",
      "name": "ATIVIDADE DE EXTENSÃO ENGENHARIA DE SOFTWARE",
      "requirements": [
        "-"
      ]
    }
  ]
]);

const nicknames = {
  "FGA0168": "DIAC",
  "FGA0060": "SBD2",
  "FGA0124": "PA",
  "FGA0160": "Metodos",
  "FGA0210": "Paradigmas",
  "FGA0211": "Redes",
  "FGA0315": "Qualidades",
  "FGA0164": "HC",
  "FGA0316": "EPS",
  "FGA0109": "Embarcados",
  "FGA0304": "PI2",
  "FGA0150": "PI1",
  "FGA0242": "TPPE",
  "FGA0317": "GCES",
  "FGA0303": "PI1",
  "FGA0288": "Estágio",
  "FGA0287": "TCC1",
  "FGA0318": "Extensão",
  "CIC0004": "APC",
  "FGA0163": "Intr. Eng.",
  "FGA0302": "Eng. Amb.",
  "MAT0025": "C1",
  "FGA0157": "PEAE",
  "IFD0171": "F1",
  "IFD0173": "F1 Exp.",
  "MAT0026": "C2",
  "MAT0031": "IAL",
  "FGA0071": "PED1",
  "FGA0073": "TED1",
  "FGA0085": "MD1",
  "FGA0133": "Eng. Econômica",
  "FGA0158": "OO",
  "FGA0108": "MD2",
  "FGA0142": "FAC",
  "FGA0146": "EDA1",
  "FGA0307": "GPEQ",
  "FGA0312": "MDS",
  "FGA0003": "Compiladores",
  "FGA0030": "EDA2",
  "FGA0137": "SBD1",
  "FGA0170": "FSO",
  "FGA0173": "IHC",
  "FGA0313": "Requisitos",
  "FGA0208": "Arquitetura",
  "FGA0314": "Testes",
  "FGA0244": "PSPD",
  "FGA0288": "Estágio",
  "FGA0287": "TCC1",
  "FGA0304": "PI2",
  "FGA0290": "TCC2",
  "FGA0318": "Extensão",
};

/** @type {Record<string, {code: string; name: string; requirements: string[]}>} */
const lessonByCode = {};
curriculum.forEach(e => {
  e.forEach(lesson => {
    lessonByCode[lesson.code] = lesson;
  })
})

/** @type {Record<string, {code: string; name: string; classNum: number; teacher: string; schedules: [number, number][];}[]>} */
const classes = (
  {
    "FCTE0003": [{"code": "FCTE0003", "name": "ESTRUTURAS DE DADOS PARA COMPETIÇÕES", "classNum": 1, "teacher": "Edson Alves Da Costa Junior", "schedules": [[5, 1], [5, 3]]}],
    "FGA0003": [{"code": "FGA0003", "name": "COMPILADORES 1", "classNum": 1, "teacher": "Sergio Antonio Andrade De Freitas", "schedules": [[3, 0], [3, 2]]}, {"code": "FGA0003", "name": "COMPILADORES 1", "classNum": 2, "teacher": "Fabio Macedo Mendes", "schedules": [[4, 2], [4, 4]]}, {"code": "FGA0003", "name": "COMPILADORES 1", "classNum": 3, "teacher": "Fabio Macedo Mendes", "schedules": [[5, 2], [5, 4]]}],
    "FGA0008": [{"code": "FGA0008", "name": "SISTEMAS AEROESPACIAIS", "classNum": 1, "teacher": "Ronne Toledo", "schedules": [[1, 0], [1, 2]]}],
    "FGA0017": [{"code": "FGA0017", "name": "PROJETOS DE CIRCUITOS INTEGRADOS 1", "classNum": 1, "teacher": "Wellington Avelino Do Amaral", "schedules": [[3, 1], [3, 3]]}],
    "FGA0023": [{"code": "FGA0023", "name": "DINÂMICA DOS MECANISMOS", "classNum": 1, "teacher": "Rita De Cassia Silva", "schedules": [[0, 1], [0, 3]]}],
    "FGA0025": [{"code": "FGA0025", "name": "SISTEMAS DE ENERGIA SOLAR E EÓLICA", "classNum": 1, "teacher": "Alex Reis", "schedules": [[3, 0], [3, 2]]}],
    "FGA0030": [{"code": "FGA0030", "name": "ESTRUTURAS DE DADOS 2", "classNum": 1, "teacher": "Edson Alves Da Costa Junior e John Lenon Cardoso Gardenghi", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0030", "name": "ESTRUTURAS DE DADOS 2", "classNum": 2, "teacher": "Mauricio Serrano", "schedules": [[0, 0], [0, 4]]}],
    "FGA0034": [{"code": "FGA0034", "name": "TÓPICOS ESPECIAIS EM MATEMÁTICA APLICADA", "classNum": 1, "teacher": "Vinicius De Carvalho Rispoli", "schedules": [[5, 1], [5, 3]]}],
    "FGA0037": [{"code": "FGA0037", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AEROESPACIAL", "classNum": 1, "teacher": "William Reis Silva", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0037", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AEROESPACIAL", "classNum": 2, "teacher": "Fernando Merege", "schedules": [[0, 0], [0, 4]]}],
    "FGA0038": [{"code": "FGA0038", "name": "AERODINÂMICA DE SISTEMAS AEROESPACIAIS", "classNum": 1, "teacher": "Olexiy Shynkarenko", "schedules": [[4, 1], [4, 3]]}],
    "FGA0039": [{"code": "FGA0039", "name": "MECÂNICA DE ESTRUTURAS AEROESPACIAIS", "classNum": 1, "teacher": "Artem Andrianov", "schedules": [[0, 1], [0, 3]]}],
    "FGA0040": [{"code": "FGA0040", "name": "SISTEMAS DE CONTROLE AUTOMOTIVO", "classNum": 1, "teacher": "Rafael Rodrigues Da Silva", "schedules": [[1, 0], [1, 2]]}],
    "FGA0043": [{"code": "FGA0043", "name": "DINÂMICA DOS GASES PARA SISTEMAS AEROESPACIAIS", "classNum": 1, "teacher": "Olexiy Shynkarenko", "schedules": [[3, 1], [3, 3]]}],
    "FGA0045": [{"code": "FGA0045", "name": "MECÂNICA DO VÔO", "classNum": 1, "teacher": "Thiago Felippe Kurudez Cordeiro", "schedules": [[1, 2], [1, 4]]}],
    "FGA0047": [{"code": "FGA0047", "name": "PROCESSOS PETROQUÍMICOS", "classNum": 1, "teacher": "Andreia Alves Costa Lindinger", "schedules": [[1, 1], [1, 3]]}],
    "FGA0048": [{"code": "FGA0048", "name": "MECÂNICA DO VOO ESPACIAL", "classNum": 1, "teacher": "William Reis Silva", "schedules": [[1, 2], [1, 4]]}],
    "FGA0050": [{"code": "FGA0050", "name": "DINÂMICA DE ESTRUTURAS AEROESPACIAIS", "classNum": 1, "teacher": "Sergio Henrique Da Silva Carneiro", "schedules": [[1, 1], [1, 3]]}],
    "FGA0053": [{"code": "FGA0053", "name": "TÓPICOS ESPECIAIS EM PROGRAMAÇÃO", "classNum": 1, "teacher": "Mauricio Serrano e Milene Serrano", "schedules": [[3, 0], [4, 0]]}],
    "FGA0055": [{"code": "FGA0055", "name": "TECNOLOGIAS DE FABRICAÇÃO 1", "classNum": 1, "teacher": "Rhander Viana", "schedules": [[3, 1], [3, 3]]}],
    "FGA0056": [{"code": "FGA0056", "name": "TECNOLOGIAS DE FABRICAÇÃO 2", "classNum": 1, "teacher": "Edison Gustavo Cueva Galarraga", "schedules": [[1, 1], [1, 3]]}],
    "FGA0057": [{"code": "FGA0057", "name": "ELETRÔNICA DE POTÊNCIA", "classNum": 1, "teacher": "Marcus Vinicius Batistuta", "schedules": [[1, 1], [1, 3]]}],
    "FGA0060": [{"code": "FGA0060", "name": "SISTEMAS DE BANCO DE DADOS 2", "classNum": 1, "teacher": "Vandor Roberto Vilardi Rissoli", "schedules": [[0, 1], [0, 3]]}, {"code": "FGA0060", "name": "SISTEMAS DE BANCO DE DADOS 2", "classNum": 2, "teacher": "Vandor Roberto Vilardi Rissoli", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0060", "name": "SISTEMAS DE BANCO DE DADOS 2", "classNum": 3, "teacher": "Thiago Luiz De Souza Gomes", "schedules": [[0, 5], [1, 5]]}],
    "FGA0062": [{"code": "FGA0062", "name": "PROJETO DE SISTEMAS DE OBSERVAÇÃO DA TERRA", "classNum": 1, "teacher": "Ronne Toledo", "schedules": [[4, 0], [4, 2]]}],
    "FGA0066": [{"code": "FGA0066", "name": "FUNDAMENTOS DE VARIÁVEL COMPLEXA PARA ENGENHARIA", "classNum": 1, "teacher": "Lindomar Bomfim De Carvalho De Jesus", "schedules": [[1, 1], [1, 3]]}],
    "FGA0067": [{"code": "FGA0067", "name": "TEORIA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 2, "teacher": "Euler De Vilhena Garcia", "schedules": [[0, 1], [0, 3]]}, {"code": "FGA0067", "name": "TEORIA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 3, "teacher": "Luciano Emidio Neves Da Fonseca", "schedules": [[3, 0], [3, 2]]}],
    "FGA0068": [{"code": "FGA0068", "name": "TEORIA DE CIRCUITOS ELETRÔNICOS 2", "classNum": 1, "teacher": "Gilmar Silva Beserra", "schedules": [[0, 0], [0, 2]]}],
    "FGA0069": [{"code": "FGA0069", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 1, "teacher": "Marcus Vinicius Chaffim Costa", "schedules": [[0, 4]]}, {"code": "FGA0069", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 2, "teacher": "Marcus Vinicius Chaffim Costa", "schedules": [[1, 4]]}, {"code": "FGA0069", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 3, "teacher": "Marcus Vinicius Chaffim Costa", "schedules": [[1, 2]]}],
    "FGA0070": [{"code": "FGA0070", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 2", "classNum": 1, "teacher": "Diogo De Oliveira Costa", "schedules": [[4, 1]]}],
    "FGA0071": [{"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 1, "teacher": "Henrique Marra Taira Menegaz", "schedules": [[3, 3]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 2, "teacher": "Henrique Marra Taira Menegaz", "schedules": [[0, 3]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 3, "teacher": "Henrique Marra Taira Menegaz", "schedules": [[1, 3]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 4, "teacher": "Henrique Marra Taira Menegaz", "schedules": [[2, 3]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 6, "teacher": "Marcelino Monteiro De Andrade", "schedules": [[0, 2]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 7, "teacher": "Marcelino Monteiro De Andrade", "schedules": [[1, 2]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 8, "teacher": "Marcelino Monteiro De Andrade", "schedules": [[3, 2]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 9, "teacher": "Marcelino Monteiro De Andrade", "schedules": [[4, 2]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 11, "teacher": "Thiago Luiz De Souza Gomes", "schedules": [[0, 1]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 12, "teacher": "Thiago Luiz De Souza Gomes", "schedules": [[0, 4]]}],
    "FGA0072": [{"code": "FGA0072", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 2", "classNum": 1, "teacher": "Daniel Mauricio Munoz Arboleda", "schedules": [[0, 0]]}, {"code": "FGA0072", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 2", "classNum": 2, "teacher": "Daniel Mauricio Munoz Arboleda", "schedules": [[1, 0]]}],
    "FGA0073": [{"code": "FGA0073", "name": "TEORIA DE ELETRÔNICA DIGITAL 1", "classNum": 1, "teacher": "Renato Vilela Lopes", "schedules": [[0, 2], [0, 4]]}, {"code": "FGA0073", "name": "TEORIA DE ELETRÔNICA DIGITAL 1", "classNum": 2, "teacher": "Renato Vilela Lopes", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0073", "name": "TEORIA DE ELETRÔNICA DIGITAL 1", "classNum": 3, "teacher": "Luis Filomeno De Jesus Fernandes", "schedules": [[4, 1], [4, 3]]}],
    "FGA0074": [{"code": "FGA0074", "name": "TEORIA DE ELETRÔNICA DIGITAL 2", "classNum": 1, "teacher": "Daniel Mauricio Munoz Arboleda", "schedules": [[1, 1], [1, 3]]}],
    "FGA0075": [{"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 1, "teacher": "Emmanuel Pacheco Rocha Lima", "schedules": []}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 2, "teacher": "Emmanuel Pacheco Rocha Lima", "schedules": []}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 3, "teacher": "Rodrigo Arbey Munoz Meneses", "schedules": []}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 4, "teacher": "Emmanuel Pacheco Rocha Lima", "schedules": []}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 8, "teacher": "Sandra Maria Da Luz", "schedules": []}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 9, "teacher": "Sandra Maria Da Luz", "schedules": [[1, 1]]}],
    "FGA0076": [{"code": "FGA0076", "name": "EQUIPAMENTOS TERMOFLUIDOS AUTOMOTIVOS", "classNum": 1, "teacher": "Alessandro Borges De Sousa Oliveira e Fabio Alfaia Da Cunha", "schedules": [[0, 2], [0, 4]]}],
    "FGA0077": [{"code": "FGA0077", "name": "INTRODUÇÃO AO DESGASTE", "classNum": 1, "teacher": "Edison Gustavo Cueva Galarraga", "schedules": [[3, 1], [3, 3]]}],
    "FGA0078": [{"code": "FGA0078", "name": "TEORIA DE MATERIAIS DE CONSTRUÇÃO", "classNum": 1, "teacher": "Emmanuel Pacheco Rocha Lima", "schedules": [[3, 0], [2, 2]]}, {"code": "FGA0078", "name": "TEORIA DE MATERIAIS DE CONSTRUÇÃO", "classNum": 2, "teacher": "Rodrigo Arbey Munoz Meneses", "schedules": [[3, 1]]}],
    "FGA0085": [{"code": "FGA0085", "name": "MATEMÁTICA DISCRETA 1", "classNum": 1, "teacher": "Cristiane Loesch De Souza Costa", "schedules": [[0, 0], [0, 2]]}, {"code": "FGA0085", "name": "MATEMÁTICA DISCRETA 1", "classNum": 2, "teacher": "Cristiane Loesch De Souza Costa", "schedules": [[1, 0], [1, 2]]}],
    "FGA0086": [{"code": "FGA0086", "name": "TEORIA DE ELETRICIDADE APLICADA", "classNum": 1, "teacher": "Jorge Andres Cormane Angarita", "schedules": [[0, 0], [0, 2]]}, {"code": "FGA0086", "name": "TEORIA DE ELETRICIDADE APLICADA", "classNum": 2, "teacher": "Flavio Henrique Justiniano Ribeiro Da Silva", "schedules": [[4, 0], [4, 2]]}],
    "FGA0087": [{"code": "FGA0087", "name": "LABORATÓRIO DE ELETRICIDADE APLICADA", "classNum": 1, "teacher": "Loana Nunes Velasco", "schedules": [[4, 0]]}, {"code": "FGA0087", "name": "LABORATÓRIO DE ELETRICIDADE APLICADA", "classNum": 2, "teacher": "Loana Nunes Velasco", "schedules": [[3, 2]]}, {"code": "FGA0087", "name": "LABORATÓRIO DE ELETRICIDADE APLICADA", "classNum": 3, "teacher": "Rudi Henri Van Els", "schedules": [[3, 1]]}, {"code": "FGA0087", "name": "LABORATÓRIO DE ELETRICIDADE APLICADA", "classNum": 4, "teacher": "Rudi Henri Van Els", "schedules": [[4, 1]]}, {"code": "FGA0087", "name": "LABORATÓRIO DE ELETRICIDADE APLICADA", "classNum": 5, "teacher": "Jorge Andres Cormane Angarita", "schedules": [[1, 0]]}],
    "FGA0088": [{"code": "FGA0088", "name": "TEORIA DE SISTEMAS DE CONVERSÃO DE ENERGIA", "classNum": 1, "teacher": "Flavio Henrique Justiniano Ribeiro Da Silva", "schedules": [[0, 2], [0, 4]]}],
    "FGA0089": [{"code": "FGA0089", "name": "LABORATÓRIO DE SISTEMAS DE CONVERSÃO DE ENERGIA", "classNum": 1, "teacher": "Rudi Henri Van Els", "schedules": [[4, 2]]}],
    "FGA0090": [{"code": "FGA0090", "name": "ONDULATÓRIA E FÍSICA TÉRMICA PARA ENGENHARIA", "classNum": 1, "teacher": "Eberth De Almeida Correa", "schedules": [[3, 1], [3, 3]]}],
    "FGA0091": [{"code": "FGA0091", "name": "MÁQUINAS DE FLUIDO", "classNum": 1, "teacher": "Jhon Nero Vaz Goulart", "schedules": [[0, 0], [0, 2]]}],
    "FGA0092": [{"code": "FGA0092", "name": "PRINCÍPIOS DE COMUNICAÇÃO PARA ENGENHARIA", "classNum": 1, "teacher": "Sebastien Roland Marie Joseph Rondineau", "schedules": [[0, 1], [0, 3]]}],
    "FGA0093": [{"code": "FGA0093", "name": "PRINCÍPIOS DE CONTROLE", "classNum": 1, "teacher": "Roberto De Souza Baptista", "schedules": [[2, 1], [3, 1], [3, 3]]}, {"code": "FGA0093", "name": "PRINCÍPIOS DE CONTROLE", "classNum": 2, "teacher": "Thiago Felippe Kurudez Cordeiro", "schedules": [[3, 2], [2, 3], [3, 4]]}],
    "FGA0095": [{"code": "FGA0095", "name": "CODIFICAÇÃO E COMPRESSÃO DE SINAIS, IMAGENS E VÍDEO", "classNum": 1, "teacher": "Marcus Vinicius Chaffim Costa", "schedules": [[3, 2], [3, 4]]}],
    "FGA0098": [{"code": "FGA0098", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 3", "classNum": 1, "teacher": "Diogo De Oliveira Costa", "schedules": [[4, 0]]}],
    "FGA0099": [{"code": "FGA0099", "name": "TEORIA DE CIRCUITOS ELETRÔNICOS 3", "classNum": 1, "teacher": "Wellington Avelino Do Amaral", "schedules": [[4, 1], [4, 3]]}],
    "FGA0100": [{"code": "FGA0100", "name": "PRÁTICA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS", "classNum": 2, "teacher": "Gerardo Antonio Idrobo Pizo", "schedules": [[2, 1]]}, {"code": "FGA0100", "name": "PRÁTICA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS", "classNum": 3, "teacher": "Gerardo Antonio Idrobo Pizo", "schedules": [[4, 4]]}],
    "FGA0101": [{"code": "FGA0101", "name": "TEORIA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS", "classNum": 1, "teacher": "Marcus Vinicius Batistuta", "schedules": [[4, 1], [4, 3]]}],
    "FGA0102": [{"code": "FGA0102", "name": "SINAIS E SISTEMAS PARA ENGENHARIA", "classNum": 1, "teacher": "Luis Filomeno De Jesus Fernandes", "schedules": [[3, 1], [3, 3], [3, 4]]}, {"code": "FGA0102", "name": "SINAIS E SISTEMAS PARA ENGENHARIA", "classNum": 2, "teacher": "Luciano Emidio Neves Da Fonseca", "schedules": [[0, 0], [0, 2], [0, 4]]}],
    "FGA0104": [{"code": "FGA0104", "name": "QUÍMICA ORGÂNICA APLICADA À ENGENHARIA", "classNum": 1, "teacher": "Roseany De Vasconcelos Vieira Lopes", "schedules": [[1, 0], [1, 2]]}],
    "FGA0105": [{"code": "FGA0105", "name": "TÓPICOS ESPECIAIS 2 EM ENGENHARIA AEROESPACIAL", "classNum": 1, "teacher": "Lui Txai Calvoso Habl", "schedules": [[2, 0], [2, 2]]}],
    "FGA0106": [{"code": "FGA0106", "name": "TÓPICOS ESPECIAIS 3 EM ENGENHARIA AEROESPACIAL", "classNum": 1, "teacher": "Sebastien Roland Marie Joseph Rondineau", "schedules": [[1, 1], [1, 3]]}],
    "FGA0107": [{"code": "FGA0107", "name": "LABORATÓRIO DE ONDULATÓRIA E FÍSICA TÉRMICA PARA A ENGENHARIA", "classNum": 1, "teacher": "Eberth De Almeida Correa", "schedules": [[1, 3]]}],
    "FGA0108": [{"code": "FGA0108", "name": "MATEMÁTICA DISCRETA 2", "classNum": 1, "teacher": "Cristiane Loesch De Souza Costa", "schedules": [[2, 0], [2, 2]]}, {"code": "FGA0108", "name": "MATEMÁTICA DISCRETA 2", "classNum": 2, "teacher": "Lindomar Bomfim De Carvalho De Jesus", "schedules": [[0, 1], [0, 3]]}],
    "FGA0109": [{"code": "FGA0109", "name": "FUNDAMENTOS DE SISTEMAS EMBARCADOS", "classNum": 1, "teacher": "Renato Coral Sampaio", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0109", "name": "FUNDAMENTOS DE SISTEMAS EMBARCADOS", "classNum": 2, "teacher": "Renato Coral Sampaio", "schedules": [[4, 1], [4, 3]]}],
    "FGA0117": [{"code": "FGA0117", "name": "FUNDAMENTOS DE ENERGIA NUCLEAR", "classNum": 1, "teacher": "Tercio Brum", "schedules": [[3, 1], [3, 3]]}],
    "FGA0118": [{"code": "FGA0118", "name": "SISTEMAS DE INFORMAÇÃO GEOGRÁFICA PARA ENGENHARIA", "classNum": 1, "teacher": "Josiane Do Socorro Aguiar De Souza De Oliveira Campos", "schedules": [[1, 0], [1, 2]]}],
    "FGA0119": [{"code": "FGA0119", "name": "TEORIA DE ELETROMAGNETISMO", "classNum": 1, "teacher": "Andre Luiz Almeida Penna", "schedules": [[3, 0], [3, 2]]}, {"code": "FGA0119", "name": "TEORIA DE ELETROMAGNETISMO", "classNum": 2, "teacher": "Andre Luiz Almeida Penna", "schedules": [[0, 2], [0, 4]]}],
    "FGA0120": [{"code": "FGA0120", "name": "PRÁTICA DE ELETROMAGNETISMO", "classNum": 1, "teacher": "Gerardo Antonio Idrobo Pizo", "schedules": [[3, 4]]}, {"code": "FGA0120", "name": "PRÁTICA DE ELETROMAGNETISMO", "classNum": 2, "teacher": "Gerardo Antonio Idrobo Pizo", "schedules": [[4, 1]]}],
    "FGA0121": [{"code": "FGA0121", "name": "TÓPICOS ESPECIAIS 4 EM ENGENHARIA AEROESPACIAL", "classNum": 1, "teacher": "Diogo De Oliveira Costa", "schedules": [[2, 1], [2, 3]]}, {"code": "FGA0121", "name": "TÓPICOS ESPECIAIS 4 EM ENGENHARIA AEROESPACIAL", "classNum": 2, "teacher": "Andre Luis Rodrigues Araujo", "schedules": [[4, 0], [4, 2]]}],
    "FGA0124": [{"code": "FGA0124", "name": "PROJETO DE ALGORITMOS", "classNum": 1, "teacher": "Mauricio Serrano", "schedules": [[1, 0], [1, 4]]}],
    "FGA0132": [{"code": "FGA0132", "name": "INSTRUMENTAÇÃO ELETRÔNICA PARA ENGENHARIA", "classNum": 1, "teacher": "Claudia Patricia Ochoa Diaz", "schedules": [[1, 1], [1, 3]]}],
    "FGA0133": [{"code": "FGA0133", "name": "ENGENHARIA ECONÔMICA", "classNum": 1, "teacher": "Paula Meyer Soares", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0133", "name": "ENGENHARIA ECONÔMICA", "classNum": 2, "teacher": "Glauceny Cirne De Medeiros", "schedules": [[4, 2], [4, 4]]}],
    "FGA0134": [{"code": "FGA0134", "name": "TÓPICOS ESPECIAIS DE ENGENHARIA DE SOFTWARE", "classNum": 1, "teacher": "Carla Silva Rocha Aguiar", "schedules": [[3, 0], [3, 2]]}],
    "FGA0137": [{"code": "FGA0137", "name": "SISTEMAS DE BANCO DE DADOS 1", "classNum": 1, "teacher": "Glauco Vitor Pedrosa", "schedules": [[1, 2], [1, 4]]}, {"code": "FGA0137", "name": "SISTEMAS DE BANCO DE DADOS 1", "classNum": 2, "teacher": "Glauco Vitor Pedrosa", "schedules": [[4, 2], [4, 4]]}],
    "FGA0141": [{"code": "FGA0141", "name": "GESTÃO AMBIENTAL NO SETOR ENERGÉTICO", "classNum": 1, "teacher": "Maria Vitoria Duarte Ferrari", "schedules": [[1, 2], [1, 4]]}],
    "FGA0142": [{"code": "FGA0142", "name": "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES", "classNum": 1, "teacher": "Tiago Alves Da Fonseca", "schedules": [[0, 0], [0, 4]]}, {"code": "FGA0142", "name": "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES", "classNum": 2, "teacher": "Tiago Alves Da Fonseca", "schedules": [[1, 0], [1, 2]]}],
    "FGA0146": [{"code": "FGA0146", "name": "ESTRUTURAS DE DADOS 1", "classNum": 1, "teacher": "Fabricio Ataides Braz e Nilton Correia Da Silva", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0146", "name": "ESTRUTURAS DE DADOS 1", "classNum": 2, "teacher": "John Lenon Cardoso Gardenghi", "schedules": [[1, 1], [1, 3]]}],
    "FGA0148": [{"code": "FGA0148", "name": "ENGENHARIA DE SEGURANÇA DO TRABALHO", "classNum": 1, "teacher": "Maria Alzira De Araujo Nunes", "schedules": [[0, 0]]}, {"code": "FGA0148", "name": "ENGENHARIA DE SEGURANÇA DO TRABALHO", "classNum": 2, "teacher": "Maria Alzira De Araujo Nunes", "schedules": [[1, 0]]}],
    "FGA0152": [{"code": "FGA0152", "name": "ERGONOMIA DO PRODUTO", "classNum": 1, "teacher": "Mateus Rodrigues Miranda", "schedules": [[0, 2], [0, 4]]}],
    "FGA0154": [{"code": "FGA0154", "name": "MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA", "classNum": 1, "teacher": "Glauceny Cirne De Medeiros", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0154", "name": "MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA", "classNum": 2, "teacher": "Suzana Moreira Avila", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0154", "name": "MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA", "classNum": 3, "teacher": "Sergio Henrique Da Silva Carneiro", "schedules": [[0, 1], [0, 3]]}],
    "FGA0155": [{"code": "FGA0155", "name": "INTRODUÇÃO AO DESIGN E CONCEPÇÃO DE VEÍCULOS", "classNum": 1, "teacher": "Eneida Gonzalez Valdes", "schedules": [[3, 2], [3, 4]]}],
    "FGA0156": [{"code": "FGA0156", "name": "COMBUSTÍVEIS E BIOCOMBUSTÍVEIS", "classNum": 1, "teacher": "Juliana Petrocchi Rodrigues", "schedules": [[3, 2], [3, 4]]}],
    "FGA0157": [{"code": "FGA0157", "name": "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA", "classNum": 1, "teacher": "Marilia Miranda Forte Gomes", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0157", "name": "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA", "classNum": 2, "teacher": "Rodrigo Andres Miranda Cerda", "schedules": [[2, 0], [2, 2]]}],
    "FGA0158": [{"code": "FGA0158", "name": "ORIENTAÇÃO A OBJETOS", "classNum": 1, "teacher": "Andre Luiz Peron Martins Lanna", "schedules": [[3, 0], [3, 2]]}, {"code": "FGA0158", "name": "ORIENTAÇÃO A OBJETOS", "classNum": 2, "teacher": "Lucas Ursulino Boaventura", "schedules": [[2, 0], [2, 2]]}, {"code": "FGA0158", "name": "ORIENTAÇÃO A OBJETOS", "classNum": 3, "teacher": "Henrique Gomes De Moura", "schedules": [[2, 1], [2, 3]]}],
    "FGA0160": [{"code": "FGA0160", "name": "MÉTODOS NUMÉRICOS PARA ENGENHARIA", "classNum": 1, "teacher": "Manuel Nascimento Dias Barcelos Junior", "schedules": [[2, 1], [2, 3]]}, {"code": "FGA0160", "name": "MÉTODOS NUMÉRICOS PARA ENGENHARIA", "classNum": 2, "teacher": "Rodrigo Andres Miranda Cerda", "schedules": [[3, 0], [3, 2]]}],
    "FGA0163": [{"code": "FGA0163", "name": "INTRODUÇÃO À ENGENHARIA", "classNum": 1, "teacher": "Rafael Rodrigues Da Silva", "schedules": [[3, 2]]}, {"code": "FGA0163", "name": "INTRODUÇÃO À ENGENHARIA", "classNum": 2, "teacher": "Juliana Dalboni Rocha", "schedules": [[0, 0]]}, {"code": "FGA0163", "name": "INTRODUÇÃO À ENGENHARIA", "classNum": 3, "teacher": "Ricardo Ramos Fragelli", "schedules": [[3, 0]]}],
    "FGA0164": [{"code": "FGA0164", "name": "HUMANIDADES E CIDADANIA", "classNum": 1, "teacher": "Sandra Maria Faleiros Lima", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0164", "name": "HUMANIDADES E CIDADANIA", "classNum": 2, "teacher": "Sandra Maria Faleiros Lima", "schedules": [[2, 2], [2, 4]]}, {"code": "FGA0164", "name": "HUMANIDADES E CIDADANIA", "classNum": 3, "teacher": "Vanessa Maria De Castro", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0164", "name": "HUMANIDADES E CIDADANIA", "classNum": 4, "teacher": "Vanessa Maria De Castro", "schedules": [[4, 1], [4, 3]]}],
    "FGA0166": [{"code": "FGA0166", "name": "ELEMENTOS E MÉTODOS EM ELETRÔNICA", "classNum": 1, "teacher": "Fabiano Araujo Soares", "schedules": [[3, 1], [3, 3]]}],
    "FGA0167": [{"code": "FGA0167", "name": "SISTEMAS AUTOMOTIVOS", "classNum": 1, "teacher": "Saleh Barbosa Khalil", "schedules": [[3, 1], [3, 3]]}],
    "FGA0168": [{"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 1, "teacher": "Eneida Gonzalez Valdes", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 2, "teacher": "Andre Luis Rodrigues Araujo", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 3, "teacher": "Himilsys Hernandez Gonzalez", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 4, "teacher": "Saleh Barbosa Khalil", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 5, "teacher": "Mateus Rodrigues Miranda", "schedules": [[4, 1], [4, 3], [4, 4]]}],
    "FGA0169": [{"code": "FGA0169", "name": "FONTES DE ENERGIA E TECNOLOGIAS DE CONVERSÃO", "classNum": 1, "teacher": "Augusto Cesar De Mendonca Brasil", "schedules": [[0, 2], [0, 4]]}],
    "FGA0170": [{"code": "FGA0170", "name": "FUNDAMENTOS DE SISTEMAS OPERACIONAIS", "classNum": 1, "teacher": "Daniel Sundfeld Lima", "schedules": [[1, 2], [1, 4]]}, {"code": "FGA0170", "name": "FUNDAMENTOS DE SISTEMAS OPERACIONAIS", "classNum": 2, "teacher": "Daniel Sundfeld Lima", "schedules": [[2, 2], [2, 4]]}],
    "FGA0173": [{"code": "FGA0173", "name": "INTERAÇÃO HUMANO COMPUTADOR", "classNum": 1, "teacher": "Sergio Antonio Andrade De Freitas", "schedules": [[1, 0], [1, 2]]}, {"code": "FGA0173", "name": "INTERAÇÃO HUMANO COMPUTADOR", "classNum": 2, "teacher": "Rejane Maria Da Costa Figueiredo", "schedules": [[4, 1], [4, 3]]}],
    "FGA0175": [{"code": "FGA0175", "name": "ENGENHARIA DE PETRÓLEO E GÁS", "classNum": 1, "teacher": "Felipe Chagas Storti", "schedules": [[4, 1], [4, 3]]}],
    "FGA0179": [{"code": "FGA0179", "name": "MECANICA DOS SÓLIDOS 2 PARA ENGENHARIA", "classNum": 1, "teacher": "Maura Angelica Milfont Shzu", "schedules": [[1, 1], [1, 3]]}],
    "FGA0188": [{"code": "FGA0188", "name": "MÉTODOS EXPERIMENTAIS PARA ENGENHARIA", "classNum": 1, "teacher": "Rodrigo Arbey Munoz Meneses", "schedules": [[0, 1], [0, 3]]}],
    "FGA0190": [{"code": "FGA0190", "name": "PROJETO DE ELEMENTOS AUTOMOTIVOS", "classNum": 1, "teacher": "Rita De Cassia Silva e Alessandro Borges De Sousa Oliveira", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "FGA0191": [{"code": "FGA0191", "name": "MATERIAIS COMPOSTOS E PLÁSTICOS", "classNum": 1, "teacher": "Sandra Maria Da Luz e Emmanuel Pacheco Rocha Lima", "schedules": [[3, 1], [3, 3]]}],
    "FGA0194": [{"code": "FGA0194", "name": "ARQUITETURA DE MOTORES DE COMBUSTÃO INTERNA", "classNum": 1, "teacher": "Alessandro Borges De Sousa Oliveira", "schedules": [[1, 1], [1, 3]]}],
    "FGA0195": [{"code": "FGA0195", "name": "GESTÃO DA PRODUÇÃO AUTOMOTIVA", "classNum": 1, "teacher": "Mario De Oliveira Andrade", "schedules": [[5, 1], [5, 3]]}],
    "FGA0201": [{"code": "FGA0201", "name": "PROJETO DE CIRCUITOS INTEGRADOS DIGITAIS", "classNum": 1, "teacher": "Gilmar Silva Beserra", "schedules": [[0, 1], [0, 3]]}],
    "FGA0203": [{"code": "FGA0203", "name": "PLANEJAMENTO E GESTÃO DE ENERGIA", "classNum": 1, "teacher": "Juliana Dalboni Rocha e Paula Meyer Soares", "schedules": [[3, 1], [3, 3]]}],
    "FGA0204": [{"code": "FGA0204", "name": "DINÂMICA DOS FLUÍDOS", "classNum": 1, "teacher": "Rafael Castilho Faria Mendes e Luciano Goncalves Noleto", "schedules": [[1, 0], [1, 4]]}, {"code": "FGA0204", "name": "DINÂMICA DOS FLUÍDOS", "classNum": 2, "teacher": "Rafael Castilho Faria Mendes e Luciano Goncalves Noleto", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "FGA0208": [{"code": "FGA0208", "name": "ARQUITETURA E DESENHO DE SOFTWARE", "classNum": 1, "teacher": "Milene Serrano", "schedules": [[0, 0], [0, 4]]}, {"code": "FGA0208", "name": "ARQUITETURA E DESENHO DE SOFTWARE", "classNum": 2, "teacher": "Milene Serrano", "schedules": [[1, 0], [1, 4]]}],
    "FGA0210": [{"code": "FGA0210", "name": "PARADIGMAS DE PROGRAMAÇÃO", "classNum": 1, "teacher": "Edson Alves Da Costa Junior", "schedules": [[4, 1], [4, 3]]}],
    "FGA0211": [{"code": "FGA0211", "name": "FUNDAMENTOS DE REDES DE COMPUTADORES", "classNum": 1, "teacher": "Clenio Emidio Da Fonseca", "schedules": [[4, 0], [4, 4]]}, {"code": "FGA0211", "name": "FUNDAMENTOS DE REDES DE COMPUTADORES", "classNum": 2, "teacher": "Clenio Emidio Da Fonseca", "schedules": [[0, 5], [1, 5]]}],
    "FGA0214": [{"code": "FGA0214", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AUTOMOTIVA", "classNum": 1, "teacher": "Bruno Luiz Pereira", "schedules": [[1, 0], [1, 2]]}, {"code": "FGA0214", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AUTOMOTIVA", "classNum": 2, "teacher": "Sandra Maria Da Luz", "schedules": [[0, 4], [1, 4]]}, {"code": "FGA0214", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AUTOMOTIVA", "classNum": 3, "teacher": "Rhander Viana", "schedules": [[4, 1], [4, 3]]}],
    "FGA0219": [{"code": "FGA0219", "name": "PROCESSAMENTO DE SINAIS", "classNum": 1, "teacher": "Cristiano Jacques Miosso Rodrigues Mendes", "schedules": [[0, 2], [0, 4]]}],
    "FGA0221": [{"code": "FGA0221", "name": "INTELIGÊNCIA ARTIFICIAL", "classNum": 1, "teacher": "Fabiano Araujo Soares", "schedules": [[4, 1], [4, 3]]}],
    "FGA0222": [{"code": "FGA0222", "name": "INSTRUMENTAÇÃO BIOMÉDICA 1", "classNum": 1, "teacher": "Euler De Vilhena Garcia", "schedules": [[1, 1], [1, 3]]}],
    "FGA0224": [{"code": "FGA0224", "name": "COMUNICAÇÕES DIGITAIS PARA ENGENHARIA", "classNum": 1, "teacher": "Daniel Costa Araujo", "schedules": [[0, 1], [0, 3]]}],
    "FGA0226": [{"code": "FGA0226", "name": "ELETRÔNICA VEICULAR", "classNum": 1, "teacher": "Evandro Leonardo Silva Teixeira", "schedules": [[1, 1], [1, 3]]}],
    "FGA0228": [{"code": "FGA0228", "name": "PROJETO DE SISTEMAS AUTOMOTIVOS", "classNum": 1, "teacher": "Carla Tatiana Mota Anflor", "schedules": [[0, 0], [0, 2]]}],
    "FGA0229": [{"code": "FGA0229", "name": "ANÁLISE ESTRUTURAL MÉTODO DOS ELEMENTOS FINITOS", "classNum": 1, "teacher": "Maura Angelica Milfont Shzu", "schedules": [[0, 1], [0, 3]]}],
    "FGA0230": [{"code": "FGA0230", "name": "DINÂMICA DE VEÍCULOS", "classNum": 1, "teacher": "Suzana Moreira Avila", "schedules": [[0, 1], [0, 3]]}],
    "FGA0235": [{"code": "FGA0235", "name": "TÓPICOS ESPECIAIS 1 EM ENGENHARIA DE ENERGIA", "classNum": 1, "teacher": "Rudi Henri Van Els", "schedules": [[0, 1], [1, 1]]}, {"code": "FGA0235", "name": "TÓPICOS ESPECIAIS 1 EM ENGENHARIA DE ENERGIA", "classNum": 2, "teacher": "Jorge Andres Cormane Angarita", "schedules": [[4, 0], [4, 2]]}],
    "FGA0242": [{"code": "FGA0242", "name": "TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES", "classNum": 1, "teacher": "Andre Luiz Peron Martins Lanna", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0242", "name": "TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES", "classNum": 2, "teacher": "Thiago Luiz De Souza Gomes", "schedules": [[0, 0], [0, 2]]}],
    "FGA0244": [{"code": "FGA0244", "name": "PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS", "classNum": 1, "teacher": "Fernando William Cruz", "schedules": [[3, 0], [3, 2]]}, {"code": "FGA0244", "name": "PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS", "classNum": 2, "teacher": "Fernando William Cruz", "schedules": [[2, 0], [2, 2]]}],
    "FGA0252": [{"code": "FGA0252", "name": "SISTEMAS HIDROELÉTRICOS", "classNum": 1, "teacher": "Rudi Henri Van Els e Luciano Goncalves Noleto", "schedules": [[0, 2], [0, 4]]}],
    "FGA0254": [{"code": "FGA0254", "name": "CIÊNCIAS AEROESPACIAIS", "classNum": 1, "teacher": "Gabriela Cunha Possa", "schedules": [[1, 1], [1, 3]]}],
    "FGA0261": [{"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 1, "teacher": "Roberto De Souza Baptista", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 2, "teacher": "Guillermo Alvarez Bestard", "schedules": [[5, 0], [5, 2]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 5, "teacher": "Henrique Gomes De Moura", "schedules": [[3, 2], [2, 4]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 6, "teacher": "Claudia Patricia Ochoa Diaz", "schedules": [[0, 1], [0, 3]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 7, "teacher": "Daniel Costa Araujo", "schedules": [[1, 1], [1, 3]]}],
    "FGA0262": [{"code": "FGA0262", "name": "TRANSMISSÃO E DISTRIBUIÇÃO DE ENERGIA ELÉTRICA", "classNum": 1, "teacher": "Loana Nunes Velasco", "schedules": [[1, 0], [1, 2]]}],
    "FGA0265": [{"code": "FGA0265", "name": "ECONOMIA DE ENERGIA", "classNum": 1, "teacher": "Paula Meyer Soares", "schedules": [[0, 1], [0, 3]]}],
    "FGA0266": [{"code": "FGA0266", "name": "ACÚSTICA E VIBRAÇÕES VEICULARES", "classNum": 1, "teacher": "Maria Alzira De Araujo Nunes", "schedules": [[1, 2], [1, 4]]}],
    "FGA0267": [{"code": "FGA0267", "name": "PROJETO DE ESTRUTURAS DE VEICULOS", "classNum": 1, "teacher": "Henrique Gomes De Moura", "schedules": [[2, 0], [2, 2]]}],
    "FGA0274": [{"code": "FGA0274", "name": "PRODUTIVIDADE E PROFISSIONALISMO EM ENGENHARIA DE SOFTWARE", "classNum": 1, "teacher": "Wander Cleber Maria Pereira Da Silva", "schedules": [[1, 1], [1, 3]]}],
    "FGA0280": [{"code": "FGA0280", "name": "PROJETO DE CIRCUITOS ELETRÔNICOS INTEGRADOS 2", "classNum": 1, "teacher": "Sandro Augusto Pavlik Haddad", "schedules": [[3, 1], [3, 3]]}],
    "FGA0281": [{"code": "FGA0281", "name": "SISTEMAS DE PROPULSÃO LIQUIDA", "classNum": 1, "teacher": "Artur Elias De Morais Bertoldi", "schedules": [[4, 1], [4, 3]]}],
    "FGA0283": [{"code": "FGA0283", "name": "MECÂNICA DOS MATERIAIS COMPÓSITOS", "classNum": 1, "teacher": "Artem Andrianov", "schedules": [[1, 1], [1, 3]]}],
    "FGA0285": [{"code": "FGA0285", "name": "INTRODUÇÃO À MECÂNICA DA FRATURA", "classNum": 1, "teacher": "Carla Tatiana Mota Anflor", "schedules": [[1, 0], [1, 2]]}],
    "FGA0299": [{"code": "FGA0299", "name": "SISTEMAS BIOINSPIRADOS APLICADOS A ENGENHARIA", "classNum": 1, "teacher": "Daniel Mauricio Munoz Arboleda", "schedules": [[3, 4], [4, 4]]}],
    "FGA0302": [{"code": "FGA0302", "name": "ENGENHARIA E AMBIENTE", "classNum": 1, "teacher": "Maria Vitoria Duarte Ferrari", "schedules": [[0, 2], [0, 4]]}, {"code": "FGA0302", "name": "ENGENHARIA E AMBIENTE", "classNum": 2, "teacher": "Josiane Do Socorro Aguiar De Souza De Oliveira Campos", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0302", "name": "ENGENHARIA E AMBIENTE", "classNum": 3, "teacher": "Juliana Dalboni Rocha", "schedules": [[1, 1], [1, 3]]}],
    "FGA0303": [{"code": "FGA0303", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 1, "teacher": "Diogo Caetano Garcia", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0303", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 2, "teacher": "Juliana Petrocchi Rodrigues", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0303", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 3, "teacher": "Ricardo Ajax Dias Kosloski", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0303", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 4, "teacher": "Lui Txai Calvoso Habl", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0303", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 5, "teacher": "Bruno Luiz Pereira", "schedules": [[4, 0], [4, 2]]}],
    "FGA0304": [{"code": "FGA0304", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 1, "teacher": "Sandro Augusto Pavlik Haddad", "schedules": [[4, 2], [3, 4], [4, 4]]}, {"code": "FGA0304", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 2, "teacher": "Ricardo Matos Chaim", "schedules": [[4, 2], [3, 4], [4, 4]]}, {"code": "FGA0304", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 3, "teacher": "Alex Reis", "schedules": [[4, 2], [3, 4], [4, 4]]}, {"code": "FGA0304", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 4, "teacher": "Rafael Castilho Faria Mendes", "schedules": [[4, 2], [3, 4], [4, 4]]}, {"code": "FGA0304", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 5, "teacher": "Rhander Viana e Evandro Leonardo Silva Teixeira", "schedules": [[4, 2], [3, 4], [4, 4]]}],
    "FGA0307": [{"code": "FGA0307", "name": "GESTÃO DA PRODUÇÃO E QUALIDADE", "classNum": 1, "teacher": "Mario De Oliveira Andrade", "schedules": [[4, 1], [4, 3]]}, {"code": "FGA0307", "name": "GESTÃO DA PRODUÇÃO E QUALIDADE", "classNum": 2, "teacher": "Rejane Maria Da Costa Figueiredo", "schedules": [[3, 1], [3, 3]]}],
    "FGA0308": [{"code": "FGA0308", "name": "ELETRÔNICA EMBARCADA", "classNum": 1, "teacher": "Guillermo Alvarez Bestard", "schedules": [[4, 0], [4, 2], [4, 4]]}],
    "FGA0309": [{"code": "FGA0309", "name": "SISTEMAS OPERACIONAIS EMBARCADOS", "classNum": 1, "teacher": "Diogo Caetano Garcia", "schedules": [[3, 0], [3, 2], [3, 4]]}],
    "FGA0312": [{"code": "FGA0312", "name": "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE", "classNum": 2, "teacher": "Carla Silva Rocha Aguiar", "schedules": [[1, 2], [1, 4]]}, {"code": "FGA0312", "name": "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE", "classNum": 3, "teacher": "Ricardo Ajax Dias Kosloski", "schedules": [[0, 5], [1, 5]]}],
    "FGA0313": [{"code": "FGA0313", "name": "REQUISITOS DE SOFTWARE", "classNum": 1, "teacher": "George Marsicano Correa", "schedules": [[0, 1], [0, 3]]}, {"code": "FGA0313", "name": "REQUISITOS DE SOFTWARE", "classNum": 2, "teacher": "George Marsicano Correa", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0313", "name": "REQUISITOS DE SOFTWARE", "classNum": 3, "teacher": "Andre Barros De Sales", "schedules": [[0, 1], [0, 3]]}],
    "FGA0314": [{"code": "FGA0314", "name": "TESTES DE SOFTWARE", "classNum": 1, "teacher": "Elaine Venson", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0314", "name": "TESTES DE SOFTWARE", "classNum": 2, "teacher": "Elaine Venson", "schedules": [[4, 1], [4, 3]]}],
    "FGA0315": [{"code": "FGA0315", "name": "QUALIDADE DE SOFTWARE 1", "classNum": 1, "teacher": "Cristiane Soares Ramos", "schedules": [[1, 0], [1, 2]]}, {"code": "FGA0315", "name": "QUALIDADE DE SOFTWARE 1", "classNum": 2, "teacher": "Cristiane Soares Ramos", "schedules": [[3, 0], [3, 2]]}],
    "FGA0316": [{"code": "FGA0316", "name": "ENGENHARIA DE PRODUTO DE SOFTWARE", "classNum": 1, "teacher": "Ricardo Matos Chaim", "schedules": [[2, 2], [2, 4]]}],
    "FGA0317": [{"code": "FGA0317", "name": "GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE", "classNum": 1, "teacher": "Carla Silva Rocha Aguiar", "schedules": [[4, 0], [4, 2]]}],
    "FGA0322": [{"code": "FGA0322", "name": "INTRODUÇÃO À GAMIFICAÇÃO", "classNum": 1, "teacher": "Sergio Antonio Andrade De Freitas", "schedules": [[4, 0], [4, 2]]}],
    "FGA0332": [{"code": "FGA0332", "name": "ANÁLISE INSTRUMENTAL DE COMBUSTÍVEIS", "classNum": 1, "teacher": "Maria Del Pilar Hidalgo Falla", "schedules": [[3, 1], [3, 3]]}],
    "FGA0380": [{"code": "FGA0380", "name": "PROCESSOS ESTOCÁSTICOS", "classNum": 1, "teacher": "Cristiano Jacques Miosso Rodrigues Mendes", "schedules": [[3, 2], [3, 4]]}],
    "CIC0004": [{"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 8, "teacher": "Clenio Emidio Da Fonseca", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 9, "teacher": "Fabricio Ataides Braz e Nilton Correia Da Silva", "schedules": [[2, 1], [2, 3], [4, 3]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 10, "teacher": "Fabricio Ataides Braz e Nilton Correia Da Silva", "schedules": [[4, 0], [0, 1], [0, 3]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 11, "teacher": "Lucas Ursulino Boaventura", "schedules": [[2, 1], [2, 3], [2, 4]]}],
    "MAT0025": [{"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 24, "teacher": "Ricardo Ramos Fragelli", "schedules": [[1, 0], [1, 2], [1, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 25, "teacher": "Tercio Brum", "schedules": [[4, 0], [4, 1], [4, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 26, "teacher": "Ronni Geraldo Gomes De Amorim", "schedules": [[0, 0], [0, 1], [0, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 27, "teacher": "Matheus Bernardini De Souza", "schedules": [[2, 0], [3, 1], [3, 3]]}],
    "MAT0026": [{"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 2, "teacher": "Yevsey Yehoshua Sobolevsky", "schedules": [[3, 0], [3, 1], [3, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 14, "teacher": "Luiza Yoko Taneguti", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 15, "teacher": "Tais Calliero Tognetti", "schedules": [[1, 0], [1, 1], [1, 3]]}],
    "MAT0027": [{"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 11, "teacher": "Vinicius De Carvalho Rispoli", "schedules": [[4, 0], [4, 1], [4, 3]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 12, "teacher": "Tatiane Da Silva Evangelista", "schedules": [[1, 0], [1, 1], [1, 3]]}],
    "MAT0031": [{"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 12, "teacher": "Luiza Yoko Taneguti", "schedules": [[1, 0], [1, 2]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 13, "teacher": "Yevsey Yehoshua Sobolevsky", "schedules": [[3, 2], [3, 4]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 14, "teacher": "Tais Calliero Tognetti", "schedules": [[0, 1], [0, 3]]}],
    "IFD0171": [{"code": "IFD0171", "name": "FISICA 1", "classNum": 13, "teacher": "Gabriela Cunha Possa", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 16, "teacher": "Rendisley Aristoteles Dos Santos Paiva", "schedules": [[4, 0], [4, 4]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 18, "teacher": "Rafael Morgado Silva", "schedules": [[0, 0], [0, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 19, "teacher": "Wytler Cordeiro Dos Santos", "schedules": [[4, 1], [4, 3]]}],
    "IFD0173": [{"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 1, "teacher": "Eberth De Almeida Correa", "schedules": [[1, 1]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 2, "teacher": "Rendisley Aristoteles Dos Santos Paiva", "schedules": [[3, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 3, "teacher": "Ronni Geraldo Gomes De Amorim", "schedules": [[1, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 5, "teacher": "Rafael Morgado Silva", "schedules": [[1, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 6, "teacher": "Rendisley Aristoteles Dos Santos Paiva", "schedules": [[3, 4]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 7, "teacher": "Rendisley Aristoteles Dos Santos Paiva", "schedules": [[4, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 8, "teacher": "Rendisley Aristoteles Dos Santos Paiva", "schedules": [[3, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 9, "teacher": "Rafael Morgado Silva", "schedules": [[1, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 30, "teacher": "Rendisley Aristoteles Dos Santos Paiva", "schedules": [[0, 3]]}],
    "IFD0175": [{"code": "IFD0175", "name": "FISICA 2", "classNum": 14, "teacher": "Wytler Cordeiro Dos Santos", "schedules": [[5, 1], [5, 3]]}]
  }
)

/** @type {Record<string, {code: string; name: string; classNum: number; teacher: string; schedules: [number, number][];}>} */
const classById = {};
Object.entries(classes).forEach(([code, allClasses]) => {
  allClasses.forEach(c => {
    classById[code + c.classNum] = c;
  })
});

const translateDayToStr = ["", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const startHoverEvents = ["mouseenter", "focus", "pointerdown"];
const endHoverEvents = ["mouseleave", "blur"]
class Grade {
  /** @type {HTMLTableElement} */
  #table

  /** @type {HTMLTableCellElement[][]} */
  #grade;

  /** @type {Record<string, boolean>} */
  #isDone;

  /** @type {Set<string>} */
  #selectedClasses;

  /** @type {HTMLDivElement} */
  #list;

  /** @type {{ code: string; name: string; classNum: number; teacher: string; schedules: [number, number][];}[][][]} */
  #possibleValues = [
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
  ]

  #saveLocalStorage() {
    window.localStorage.setItem("isDone", JSON.stringify(this.#isDone));
    window.localStorage.setItem("selectedClasses", JSON.stringify(Array.from(this.#selectedClasses)));
  }

  /** @param {string} code @returns {boolean} */
  #haveRequirements(code) {
    const stack = [];
    for (const token of lessonByCode[code].requirements) {
      if (token === "-") {
        stack.push(true);
      } else if (token === "E") {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(a && b);
      } else if (token === "OU") {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(a || b);
      } else {
        stack.push(this.#isDone[token] ?? false);
      }
    }

    return stack.pop();
  }

  /** @param {string} id */
  #chooseClassById(id) {
    const lessonClass = classById[id];
    this.#clearLessonByCode(lessonClass.code);

    for (const [i, j] of lessonClass.schedules) {
      const element = this.#grade[i][j].children[0].children[0];
      if (element.id && element.id !== id) {
        this.#clearChooseById(element.id);
      }

      element.innerText = nicknames[lessonClass.code];
      element.id = id;
    }
    this.#selectedClasses.add(id);
    this.#saveLocalStorage();
    this.#clearWarnings();
  }

  /** @param {string} id */
  #clearChooseById(id) {
    for (const [i, j] of classById[id].schedules) {
      const element = this.#grade[i][j].children[0].children[0];
      element.innerText = "-";
      element.id = "";
    }
    this.#selectedClasses.delete(id);
    this.#saveLocalStorage();
    this.#clearWarnings();
  }

  /** @param {string} code */
  #clearLessonByCode(code) {
    this.#grade.forEach(e => {
      e.forEach((g) => {
        const element = g.children[0].children[0];
        if (element.innerText === nicknames[code]) {
          this.#selectedClasses.delete(element.id);
          element.innerText = "-";
          element.id = "";
        }
      })
    })
    this.#saveLocalStorage();
    this.#clearWarnings();
  }

  /** @param {string} id */
  #warnAddById(id) {
    this.#clearWarnings();
    const lesson = classById[id];
    this.#warnRemoveByCode(lesson.code);

    for (const [i, j] of lesson.schedules) {
      const td = this.#grade[i][j];
      const select = td.children[0].children[0];

      if (select.id && select.id !== lesson.id) {
        this.#warnRemoveById(select.id);
      }
    }

    for (const [i, j] of lesson.schedules) {
      if (this.#grade[i][j].attributeStyleMap.get("background-color")) {
        this.#grade[i][j].attributeStyleMap.set("background-color", "#ff7c40"); // yellow
      } else {
        this.#grade[i][j].attributeStyleMap.set("background-color", "#40ff40"); // green
      }
    }
  }

  /**
   * 
   * @param {string} id 
   */
  #warnRemoveById(id) {
    for (const [i, j] of classById[id].schedules) {
      this.#grade[i][j].attributeStyleMap.set("background-color", "#ff4040"); // red
    }
  }

  /**
   * 
   * @param {string} code 
   */
  #warnRemoveByCode(code) {
    this.#grade.forEach(e => {
      e.forEach((g) => {
        const element = g.children[0].children[0];

        if (element.innerText === nicknames[code]) {
          g.attributeStyleMap.set("background-color", "#ff4040"); // red
        }
      })
    });
  }

  #clearWarnings() {
    this.#grade.forEach(e => {
      e.forEach(g => {
        g.attributeStyleMap.delete("background-color");
      })
    });
  }

  /**  @returns {HTMLTableElement} */
  getTable(rebuild = false) {
    if (this.#table && !rebuild) {
      return this.#table;
    }

    this.#possibleValues = [
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
    ];
    curriculum.forEach(s => {
      s.forEach(m => {
        if (this.#isDone[m.code] || !this.#haveRequirements(m.code)) {
          return;
        }

        classes[m.code]?.forEach(c => {
          if (c.schedules.some(([i, j]) => i > 5 || j > 5)) {
            return;
          }

          c.schedules.forEach(([i, j]) => {
            this.#possibleValues[i][j].push(c);
          })
        });
      })

    });


    this.#table = document.createElement("table");

    const thead = document.createElement("thead");
    this.#table.appendChild(thead);

    const headerRows = document.createElement("tr");
    translateDayToStr.forEach((n) => {
      const th = document.createElement("th");
      th.innerHTML = n;
      headerRows.appendChild(th);
    });
    thead.appendChild(headerRows);

    const tbody = document.createElement("tbody");
    this.#table.appendChild(tbody);

    this.#grade = this.#possibleValues.map((lessonsByHour, i) => {
      const tr = document.createElement("tr");

      const hour = document.createElement("td");
      hour.innerHTML = `${(i * 2 + 8).toString().padStart(2, "0")}:00 <br /> - <br /> ${(i * 2 + 9).toString().padStart(2, "0")}:50`;
      tr.appendChild(hour);

      const gradeRows = lessonsByHour.map((lessons) => {
        const td = document.createElement("td");

        const selectContainer = document.createElement("div");
        selectContainer.classList.add("select-container");

        const selectBox = document.createElement("div");
        selectBox.classList.add("select-box");
        selectBox.innerText = lessons.length ? "-" : "🔒";
        selectContainer.appendChild(selectBox);

        selectBox.addEventListener("click", () => {
          if(!selectBox.classList.toggle("open")) {
            this.#clearWarnings();
          }
        });
        document.addEventListener("click", (event) => {
          if(!selectBox.contains(event.target)) {
            selectBox.classList.remove("open");
            this.#clearWarnings();
          }
        });

        const selectOptionsContainer = document.createElement("div");
        selectOptionsContainer.classList.add("select-options-container");

        const resetOption = document.createElement("div");
        resetOption.classList.add("select-option");
        resetOption.innerText = "-";
        selectOptionsContainer.appendChild(resetOption);

        resetOption.addEventListener("click", () => {
          if (selectBox.id) {
            this.#clearChooseById(selectBox.id);
          }
        });

        startHoverEvents
        .forEach((hoverEvent) => {
          resetOption.addEventListener(hoverEvent, () => {
            if (selectBox.id) {
              this.#warnRemoveById(selectBox.id);
            }
          });
        });

        endHoverEvents
        .forEach((endHoverEvent) => {
          resetOption.addEventListener(endHoverEvent, () => {
            this.#clearWarnings();
          });
        });

        for (const lesson of lessons) {
          const selectOption = document.createElement("div");
          selectOption.classList.add("select-option");
          selectOption.innerHTML = `${nicknames[lesson.code]} - ${lesson.teacher}`;
          selectOptionsContainer.appendChild(selectOption);

          selectOption.addEventListener("click", () => {
            this.#chooseClassById(lesson.code + lesson.classNum);
          });

          startHoverEvents.forEach((hoverEvent) => {
            selectOption.addEventListener(hoverEvent, () => {
              this.#warnAddById(lesson.code + lesson.classNum);
            });
          });

          endHoverEvents.forEach((endHoverEvent) => {
            selectOption.addEventListener(endHoverEvent, () => {
              this.#clearWarnings();
            });
          })
        }

        selectContainer.appendChild(selectOptionsContainer);
        td.appendChild(selectContainer);
        tr.appendChild(td);
        return td;
      });
      tbody.appendChild(tr);

      return gradeRows;
    });

    this.#selectedClasses.forEach(id => {
      this.#chooseClassById(id);
    });
    return this.#table;
  }

  getList(rebuild = false) {
    if (this.#list && !rebuild) {
      return this.#list;
    }

    this.#list = document.createElement("div");
    this.#list.classList.add("container");

    curriculum.forEach((semester, i) => {
      const title = document.createElement("h1");
      title.innerText = `${i + 1}° Semestre:`
      this.#list.appendChild(title);

      const unorderedList = document.createElement("ul");
      semester.forEach((lesson, j) => {
        const isDone = this.#isDone[lesson.code];
        const listItem = document.createElement("li");
        listItem.classList.add("semesterLesson");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = lesson.code;
        checkbox.checked = isDone;

        const label = document.createElement("label");
        label.innerText = lesson.name;
        label.for = lesson.code;
        label.style.textDecoration = isDone ? "line-through" : "none";

        checkbox.addEventListener("change", async (event) => {
          this.#isDone[lesson.code] = event.target.checked;
          if (this.#isDone[lesson.code] || !this.#haveRequirements(lesson.code)) {
            Array.from(this.#selectedClasses).forEach(v => {
              if(this.#isDone[v.slice(0, 7)]) {
                this.#selectedClasses.delete(v);
              }
            });
          }
          this.#saveLocalStorage();

          label.style.textDecoration = event.target.checked ? "line-through" : "none";
          if (event.target.checked) {
            listItem.style.filter = "opacity(0.5)";
          } else {
            listItem.style.filter = this.#haveRequirements(lesson.code) ? "" : "opacity(0.5)";
          }
          this.updateState();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        if (isDone) {
          listItem.style.filter = "opacity(0.5)";
        } else {
          if (!this.#haveRequirements(lesson.code)) {
            checkbox.disabled = true;

            listItem.style.filter = "opacity(0.5)";
          }
        }
        unorderedList.appendChild(listItem);
      });

      this.#list.appendChild(unorderedList);
    });

    return this.#list;
  }

  updateState() {
    this.#list.replaceWith(this.getList(true));
    this.#table.replaceWith(this.getTable(true));
  }

  #healthyCheckRequirements() {
    const tmp = this.#isDone;

    this.#isDone = {};
    curriculum.forEach(s => {
      s.forEach(m => {
        this.#isDone[m.code] = true;
      })
    });

    const errors = [];
    curriculum.forEach(s => {
      s.forEach(m => {
        if (!this.#haveRequirements(m.code)) {
          errors.push({ code: m.code, name: m.name });
        }
      })
    });
    if (errors.length) {
      throw new Error("Impossible requirements for " + JSON.stringify(errors));
    }

    this.#isDone = tmp;
  }

  #healthyCheckLessons() {
    curriculum.forEach((semester) => {
      semester.forEach((lesson) => {
        if (!classes[lesson.code]) {
          console.warn("Lesson does not have any class: " + lesson.name);
        }
      });
    });
  }

  #healthCheckNicknames() {
    curriculum.forEach((semester) => {
      semester.forEach((lesson) => {
        if (!nicknames[lesson.code]) {
          console.warn("Lesson does not have nickname: " + lesson.name);
        }
      });
    });
  }

  constructor() {
    this.#healthyCheckRequirements();
    this.#healthyCheckLessons()
    this.#healthCheckNicknames();

    this.#isDone = window.localStorage.getItem("isDone");
    if (!this.#isDone) {
      this.#isDone = {};
    } else {
      this.#isDone = JSON.parse(this.#isDone);
      Object.entries(this.#isDone).forEach(([k, v]) => {
        if(!v) {
          delete this.#isDone[k];
        }
      })
    }

    this.#selectedClasses = window.localStorage.getItem("selectedClasses");
    if (!this.#selectedClasses) {
      this.#selectedClasses = new Set();
    } else {
      /**@type Set<string> */
      const selectedClassesSaved = new Set(JSON.parse(this.#selectedClasses));
      Array.from(selectedClassesSaved).forEach(v => {
        if(classById[v] === undefined || this.#isDone[v.slice(0, 7)] || !this.#haveRequirements(v.slice(0, 7))) {
          selectedClassesSaved.delete(v);
        }
      })
      this.#selectedClasses = selectedClassesSaved;
    }
    this.#saveLocalStorage();
  }
}

