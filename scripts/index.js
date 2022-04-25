// Store the wallet amount to your local storage with key "amount"

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
function addtocart(){
  
 var amount=document.getElementById("amount").value
 var total=Number(amount)+Number(arr)
 localStorage.setItem("amount",JSON.stringify(Number(total)))
 window.location.reload();
}
function bookmovie(){
    window.location.href="movies.html"
}