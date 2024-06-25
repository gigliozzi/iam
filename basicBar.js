Highcharts.chart("container3", {
  chart: {
    type: "column",
  },
  title: {
    text: "Comparação de performance entre os fluxos",
    align: "left",
  },
  subtitle: {
    text:
      'Source: <a target="_blank" ' +
      'href="https://gestao-acesso-ha.estacio.corp/requisicao">IAM</a>',
    align: "left",
  },
  xAxis: {
    categories: ["2023", "2024", "Brazil", "EU", "India", "Russia"],
    crosshair: true,
    accessibility: {
      description: "Years",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Solicitações",
    },
  },
  tooltip: {
    valueSuffix: " (1000 MT)",
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Admissão",
      data: [3202, 3000],
    },
    {
      name: "Revogação",
      data: [3893, 3000],
    },
  ],
});
