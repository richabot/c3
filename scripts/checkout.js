// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var total=JSON.parse(localStorage.getItem("amount"))
var mov=document.getElementById("movie")
var display=JSON.parse(localStorage.getItem("movie"))

  mov.innerHTML=null;
  var div=document.createElement("div")
  var h1=document.createElement("h1")
  h1.innerText=display.Title;
  

  let img=document.createElement("img")
          img.src=display.Poster;
      
      div.append(h1,img)

mov.append(div)
  

document.querySelector("form").addEventListener("submit",myfunction)
function myfunction(){
event.preventDefault()

var name=document.querySelector("#user_name").value;
var seats=document.querySelector("#number_of_seats").value;

var z=100*seats
console.log(z,"bill")
console.log(total)
if(z<=total)
{

  alert("Booking successful!")
  var ftotal=total-z;
  total=ftotal;
  console.log(ftotal,"fitla")
  localStorage.setItem("amount",JSON.stringify(Number(total)))
window.location.reload()
}
else{
  alert("Insufficient Balance!")
}
}  
// var arr=JSON.parse(localStorage.getItem("amount"))||[]
// var wallet=document.getElementById("wallet")
// wallet.innerText=arr;
var arr=JSON.parse(localStorage.getItem("amount"))||[]

var wallet=document.getElementById("wallet")
if(arr==0)
{
    wallet.innerText=0
}
else
{
wallet.innerText=arr;
}


