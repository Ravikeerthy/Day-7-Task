
// Get all the countries with a population of less than 2 lakhs using Filter function


let req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all")

req.send();

req.onload = function(){
    let res = JSON.parse(req.response);
    console.log(res);

    let populationRes = Object.values(res);

    let res1 = populationRes.filter((populationLow)=> {
        return populationLow.population<200000;
    });
    console.log(res1);
    
}