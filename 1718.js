var firstNumber=document.getElementById("first-number");
var secondNumber=document.getElementById("second-number");
var addFunc=document.getElementById("add-btn");
var subFunc=document.getElementById("minus-btn");
var mulFunc=document.getElementById("times-btn");
var divFunc=document.getElementById("divide-btn");
var outcome=document.getElementById("result-one");
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

/****************************************************************************************************/
var decNumber=document.getElementById("dec-number");
var bitNumber=document.getElementById("bin-bit");
var trans=document.getElementById("trans-btn");
var resultTwo=document.getElementById("result-two");
function myfunction(){
    var i=0;
    var a=[];
    var x=Number(decNumber.value);
    if(isNaN(x))console.log("不是一个数字!");
    else
    if(x<0)console.log("该数为负数!");
    else
    if(typeof x==='number' &&x%1!=0)console.log("该数不是整数!");
    else{
        if(x==0)a[i]=0;
        else
            while(x!=0){
                a[i]=x%2;
                x=parseInt(x/2);
                i++;
            }
    }
    if(a.length<=Number(bitNumber.value)){
        for(var p= a.length;p<Number(bitNumber.value);p++){
            a.push(0);
        }
    }
    if(a.length>Number(bitNumber.value))console.log("所规定的位数比实际的位数少!");
    a.reverse();
    resultTwo.innerHTML='';
    for(var j=0;j< a.length;j++){
        a[j].toString();
        resultTwo.innerHTML=resultTwo.innerHTML+a[j];
    }
}
trans.addEventListener("click",myfunction ,false);

/********************************************************************************************/

var z=0;
var threeGame=document.getElementById("three-game");
for(z=1;z<=100;z++)
{
    if(z%3==0)console.log('PA');
    console.log(z);
}

/******************************************************************************************/

var m=0,n=0;
for(m=1;m<=9;m++){
    for(n=1;n<=9;n++){
        console.log(m+"*"+n+"="+m*n);
    }

}