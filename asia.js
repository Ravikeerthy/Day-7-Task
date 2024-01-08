
// Get all the countries from Asia continent /region using Filter function


let req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all")

req.send();

req.onload = function(){
    let res = JSON.parse(req.response);
    console.log(res);

    let continentAsia = Object.values(res);

    let res1 = continentAsia.filter((country)=> {
        return country.continents.includes("Asia");
    });
    console.log(res1);
    
}