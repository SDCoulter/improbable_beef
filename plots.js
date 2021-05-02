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

// Create a new bar chart.
var trace = {
  x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "bar"
};
var layout = {
  title: "Drink Orders",
  xaxis: {title: "Types of Drinks"},
  yaxis: {title: "Percentage Ordered"}
};
Plotly.newPlot("drinks-graph", [trace], layout)
