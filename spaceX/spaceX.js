const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(data => console.log(data.map(data => [data.location.latitude, data.location.longitude])));
