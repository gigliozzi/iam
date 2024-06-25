Highcharts.chart("container", {
  chart: {
    type: "timeline",
  },
  accessibility: {
    screenReaderSection: {
      beforeChartFormat:
        "<h5>{chartTitle}</h5>" +
        "<div>{typeDescription}</div>" +
        "<div>{chartSubtitle}</div>" +
        "<div>{chartLongdesc}</div>" +
        "<div>{viewTableButton}</div>",
    },
    point: {
      valueDescriptionFormat:
        "{index}. {point.label}. " + "{point.description}.",
    },
  },
  xAxis: {
    visible: false,
  },
  yAxis: {
    visible: false,
  },
  title: {
    text: "Timeline do Projeto",
  },
  subtitle: {
    text: "Itens recentes do projeto",
  },
  colors: ["#4185F3", "#427CDD", "#406AB2", "#3E5A8E", "#3B4A68", "#363C46"],

  series: [
    {
      data: [
        {
          name: "ABRIL: Primarização do Terceiro/Estagiário",
          description: "16 de abril, entregamos a funcionalidade em produção.",
        },
        {
          name: "MAIO: Matrícula adicional, E-mail boas-vindas, " + 
          "Senha da Credencial, Melhoria no log da revogação",
          description:
            "Alguns itens aguardam aplicação em produção ",
            
        },
        {
          name: "JUNHO: Controle de exceção - Férias/Afastamento",
          description: "18 March 2011, first spacecraft to orbit Mercury.",
        },
        {
          name: "JULHO: Food eaten in space",
          description:
            "10 August 2015, first food grown in space and " +
            "eaten (lettuce).",
        },
        {
          name: "2019: Black hole photograph",
          description:
            "10 April 2019, first direct photograph of a black " +
            "hole and its vicinity.",
        },
        {
          name: "teste",
          description: "16 de abril, entregamos a funcionalidade em produção.",
        },
      ],
    },
  ],
});
