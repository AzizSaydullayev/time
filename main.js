let hours=document.querySelector(".hours")
let minut=document.querySelector(".minut")
let second=document.querySelector(".second")

setInterval(()=>{
let data=new Date()

hours.innerHTML=data.getHours()
minut.innerHTML=data.getMinutes()
second.innerHTML=data.getSeconds()
},1000) 

let body =document.querySelector("body")
body.style.background="#FFCD38"


let row =document.querySelector(".row")
row.style.display="flex"
row.style.justifyContent="center"
row.style.margin="200px"
row.style.background="orange"
row.style.padding="100px"
