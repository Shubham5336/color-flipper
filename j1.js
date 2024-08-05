const num=document.querySelector("#start");
const stop=document.querySelector("#stop")
const nume=document.querySelector("body")
const changeColor=function(){
    const hex = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6;i++)
        {
            color += hex[Math.floor(Math.random()*16)];
        }
        return color;
    }
    let  valid;
    num.addEventListener('click',function(){
        if (valid==null) { 
            valid = setInterval(function(){
                nume.style.backgroundColor=changeColor();
            },1000)
        }
    })
    stop.addEventListener("click",function(){
        clearInterval(valid)
        valid=null;
    })
