
// Print the total population of countries using reduce function


let req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all")

req.send();

req.onload = function(){
    let res = JSON.parse(req.response);
    console.log(res);

    let populationArray = Object.values(res);

    let totalPopulation = populationArray.reduce((acc, ele)=> {
        return acc + (ele.population || 0)});

    console.log("TotalPopulation of the coountries is", totalPopulation);
   
    
}