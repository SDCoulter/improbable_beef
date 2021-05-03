d3.json("samples.json").then(function(data){
  person1 = data.metadata[0];
  Object.entries(person1).forEach((key, value) => {console.log(key + ': ' + value);});
});
