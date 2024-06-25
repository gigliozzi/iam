Highcharts.chart("columnStyled", {
  chart: {
    type: "column",
    styledMode: false,
  },

  title: {
    text: "Perfomance de automação dos fluxos de admissão/revogação",
    align: "left",
  },

  subtitle: {
    text:
      "Source: " +
      '<a href="https://www.worlddata.info/average-bodyheight.php"' +
      'target="_blank">IAM</a>',
    align: "left",
  },

  xAxis: {
    categories: ["2023", "2024", "2025", "2026"],
  },

  yAxis: [
    {
      // Primary axis
      className: "highcharts-color-0",
      title: {
        text: "% automação",
      },
    },
    {
      // Secondary axis
      className: "highcharts-color-1",
      opposite: true,
      title: {
        text: "",
      },
    },
  ],

  plotOptions: {
    column: {
      borderRadius: 5,
    },
  },

  series: [
    {
      name: "Admissão",
      data: [75, 72], //valores pode ser adicionados
      tooltip: {
        valueSuffix: " %",
      },
    },
    {
      name: "Revogação",
      data: [66, 82],  //valores pode ser adicionados
      yAxis: 1,
      tooltip: {
        valueSuffix: " %"
      }
    },
  ],
});
