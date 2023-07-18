const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');

currency_one.addEventListener('change',calMoney);
currency_two.addEventListener('change',calMoney);
amount_one.addEventListener('input',calMoney);
amount_two.addEventListener('input',calMoney);
swap.addEventListener('click',()=>{
    const temp = currency_one.value; //ต้นทาง
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calMoney();
})

function calMoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    let url=`https://api.exchangerate-api.com/v4/latest/${one}`;
    fetch(url).then(res=>res.json()).then(data=>{
        const rate = data.rates[two];
        rateText.innerText=`1 ${one} = ${rate} ${two}`
        amount_two.value = (amount_one.value * rate).toFixed(2);
    })
}
calMoney();