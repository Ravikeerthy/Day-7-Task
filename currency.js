
// Print the country that uses US dollars as currency.


let req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all")

req.send();

req.onload = function(){
    let res = JSON.parse(req.response);
    // console.log(res);

    let usDollarcurrency = Object.values(res);

    let currency = usDollarcurrency.filter((currencyDollar)=> {
        return currencyDollar.currencies && currencyDollar.currencies.hasOwnProperty('USD');
        
    });
    console.log("The Country that uses US dollars as currency:", currency);   
}