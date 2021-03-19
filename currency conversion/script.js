//async(function *(){
const currencyOne =document.getElementById('currency-1');
const currencyTwo =document.getElementById('currency-2');
const amountOne =document.getElementById('amount-one');
const amountTwo =document.getElementById('amount-two');
const swap =document.getElementById('swap');
const rate =document.getElementById('rate');
function calculate(){
    const currOne =currencyOne.value;
    const currTwo =currencyTwo.value;
    fetch('https://data.fixer.io/api/latest?base={currOne}')
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
        const rateE=data.rate[currTwo];
        rate.innerText='1 ${currOne} = ${rateE} ${currTwo}';
        amountTwo.value =(amountOne.value * rateE).toFixed(2);
    })
}
currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
amountTwo.addEventListener('input',calculate);
swap.addEventListener('click',function(){
    const temp=currencyOne.value;
    currencyOne.value=currencyTwo.value;
    currencyTwo.value=temp;
    calculate();
})
calculate();
