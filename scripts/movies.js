// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
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
  let id;
  var arr1=JSON.parse(localStorage.getItem("movie"))||[]
var search_div=document.getElementById("container")
var movie_div=document.getElementById("movies")
async function main()
{
    let data=await searchMovie()
    if(data==undefined)
    {
        return false
    }
 
    searchMovie(day)
}

function debounce(func,delay)
{
    if(id)
    {
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },delay)
}
// function appendMoviessearch(data)
// {search_div.innerHTML=null;
//     // console.log(data.Search,"seachbar data")
//     if(data==undefined)
//     {
//         return false;
//     }
// var date=data.Search
//   date.forEach(function(el){

//     //   console.log(el,"elifish")
//       let p=document.createElement("p")
//       p.innerText=el.Title;
//       p.addEventListener("click",function(){
//     var day=el.Title 
//     console.log(day,"day")
//     searchMovie1(day)
        
//       })
//       search_div.append(p)
//   })
// }



    async function searchMovie(){
        let movieName=document.getElementById("search").value;
        let res=await fetch(`https://www.omdbapi.com/?apikey=d806bd70&t=${movieName}`);
        let data=await res.json();
    
        searchMovies(movieName)
       
        // console.log(data,"data one")
    
        
    }
    // async function searchMovie1(datr){
    //     let movieName=datr
    //     let res=await fetch(`https://www.omdbapi.com/?apikey=d806bd70&t=${movieName}`);
    //     let data=await res.json();
    //     console.log(data,"searchMovie1testing1")
    //    searchMovies1(movieName)
       
       
    
        
    // }
    let data1;
    async function searchMovies(m)
    {console.log(m,"m is")
        try{
            let res1=await fetch(`https://www.omdbapi.com/?apikey=d806bd70&s=${m}`);
            data1=await res1.json();

            console.log(data1.Search,"searchMovies1")
            showMovie(data1)
        
        
          
        }
        
        
        catch(e)
        {
            console.log(e)
        }
     
   
    }
    




    function showMovie(d)
    {
      movie_div.innerHTML=null;
        if(d.Response==="false")
        {
            console.log("no")
            let item=document.createElement("div");
            item.className="movies";
            let img=document.createElement("img");
            img.src="xyz";
            let logo=document.createElement("p")
            logo.innerText="no result found"
            item.append(img);
            movie_div.append(item);
        }
        else
        {  
            // console.log(d,"showitreplease")
           
            var z=d.Search
        z.map(function(el){
            console.log(d,"showitinside")
                let item=document.createElement("div")
            item.className="movies";
            let img=document.createElement("img")
            img.src=el.Poster;
            let name=document.createElement("p")
            name.innerText=el.Title;
            let year=document.createElement("p")  
            year.innerText=el.Year;
          
          
          var btn=document.createElement("button")
          btn.innerText="ADD"
          btn.setAttribute("class","book_now")
         
          btn.addEventListener("click",function(){
            checkout(el)
          })
            item.append(img,name,year,btn)
            movie_div.append(item)

            })
          
        }
    }


  function checkout(el)
  {
    console.log(el,"eli")
    arr1.push(el)
    localStorage.setItem("movie",JSON.stringify(el))
    window.location.href="checkout.html"
  }