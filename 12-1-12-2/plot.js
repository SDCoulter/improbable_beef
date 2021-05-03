// Data is already sorted? But if it wasn't...
var sortedCities = cityGrowths.sort((a, b) => b.Increase_from_2016 - a.Increase_from_2016);
// Take only the top 5 cities.
var top7Cities = sortedCities.slice(0, 7);
// Create separate arrays for names and population.
var cityNames = top7Cities.map(city => city.City);
var cityGrowths = top7Cities.map(city => parseInt(city.Increase_from_2016));
// Create a bar chart of these arrays.
var trace = {
  x: cityNames,
  y: cityGrowths,
  type: "bar"
};
var layout = {
  title: "Fast-Growing Cities 2016-2017",
  xaxis: {title: "City Names"},
  yaxis: {title: "Population Growth"}
};
Plotly.newPlot("bar-plot", [trace], layout);
