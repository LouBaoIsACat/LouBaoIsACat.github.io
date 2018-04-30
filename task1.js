var text =document.getElementById("p");
var temp=document.getElementById("temp");
var a=document.getElementById("div");
var count=0;                                    //计数器
temp.addEventListener('click',function(){
    count++;
    if(count%2==1){
        a.style.width="100px";
        text.style.color="blue";
    }
    else if(count%2==0){
        a.style.width="0px";
        text.style.color="black";
    }
},false);