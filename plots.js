var trace = {
  x: ["burrito", "pizza", "chicken"],
  y: [10, 18, 15],
  type: "bar"
};
var layout = {
  title: "Luncheon Survey",
  xaxis: {title: "Food Option"},
  yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea", [trace], layout);

// Create a pie chart.
var trace = {
  labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
  values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "pie"
};
var layout = {
  title: "Drink Orders"
};
Plotly.newPlot("drinks-graph", [trace], layout)

// Create a scatter plot.
var trace = {
  x: [﻿14.2,16.4,11.9,15.2,18.5,22.1,19.4,25.1,23.4,18.1,22.6,17.2],
  y: [215,325,185,332,406,522,412,614,544,421,445,408],
  mode: "markers",
  type: "scatter"
};
var layout = {
  title: "Ice Cream Sales vs Temperature",
  xaxis: {title: "Temperature"},
  yaxis: {title: "Ice Cream Sales $"}
};
Plotly.newPlot("scatter-graph", [trace], layout);
