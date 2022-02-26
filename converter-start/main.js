const rates = {};


const input = document.querySelector('#input');
const result = document.querySelector('#result');
const rubles = document.querySelector('#rubles');


getCurrencies();

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result =  await data;

    rates.NOK = result.Valute.NOK;
    rates.HUF = result.Valute.HUF;

}

input.oninput = function(){
    rubles.value = (parseFloat(input.value)*rates.HUF.Value/rates.HUF.Nominal).toFixed(2);
    result.value = (parseFloat(input.value)*rates.HUF.Value/rates.HUF.Nominal/rates.NOK.Value*rates.NOK.Nominal).toFixed(2);
}