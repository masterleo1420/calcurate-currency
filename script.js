const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const ratetext = document.getElementById('rate');
const swap = document.getElementById('btn');

currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);

amount_one.addEventListener(`input`,calculateMoney);
amount_two.addEventListener(`input`,calculateMoney);

function calculateMoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    let url =`https://v6.exchangerate-api.com/v6/7c79dec03fa16580bad7e5c9/latest/${one}`
    fetch(url).then(res => res.json()).then(data =>{
        const rate = data.conversion_rates[two];
        ratetext.innerText = `1 = ${one} = ${rate} ${two}`;
        amount_two.value=(amount_one.value*rate).toFixed(2);
        console.log(calculateMoney)
    });
}
    swap.addEventListener('click',
        ()=>{
        // USD => THB || THB => USD
        // TEMP => USD || THB => TEMP (USD)
        const temp = currency_one.value; //ต้นทาง
        currency_one.value = currency_two.value;
        currency_two.value = temp;
        calculateMoney();
        
        console.log(swap)
    });

calculateMoney();