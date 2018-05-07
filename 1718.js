var firstNumber=document.getElementById("first-number");
var secondNumber=document.getElementById("second-number");
var addFunc=document.getElementById("add-btn");
var subFunc=document.getElementById("minus-btn");
var mulFunc=document.getElementById("times-btn");
var divFunc=document.getElementById("divide-btn");
var outcome=document.getElementById("result");
addFunc.addEventListener("click",function(){
    if(isNaN(firstNumber.value)||isNaN(secondNumber.value))console.log("number is NaN!");
    outcome.innerHTML=Number(firstNumber.value)+Number(secondNumber.value);
},false);
subFunc.addEventListener("click",function(){
    if(isNaN(firstNumber.value)||isNaN(secondNumber.value))console.log("number is NaN!");
    outcome.innerHTML=Number(firstNumber.value)-Number(secondNumber.value);
},false);
mulFunc.addEventListener("click",function(){
    if(isNaN(firstNumber.value)||isNaN(secondNumber.value))console.log("number is NaN!");
    outcome.innerHTML=Number(firstNumber.value)*Number(secondNumber.value);
},false);
divFunc.addEventListener("click",function(){
    if(isNaN(firstNumber.value)||isNaN(secondNumber.value))console.log("number is NaN!");
    else
        if(Number(secondNumber.value)==0)console.log("除数为0！");
        else
            outcome.innerHTML=Number(firstNumber.value)/Number(secondNumber.value);
},false);
