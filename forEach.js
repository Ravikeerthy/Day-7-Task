
// Print the following details name, capital, flag, using forEach function


let req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all")

req.send();

req.onload = function(){
    let res = JSON.parse(req.response);
    console.log(res);

    let continentAsia = Object.values(res);

    continentAsia.forEach(element => {

        let name = element.name.common;
        let capital = element.capital;
        let flag = element.flag;

        console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
        
    });

  

   
    
}