//const button = document.getElementById(btn);
//if(button) button.click();
let data1;
let text2 = "demon";
function clickbtn() {
  //document.querySelector('#btn').click();
     text2= document.getElementById("name").value;
  //   document.getElementById("print").innerHTML = x;
  console.log("Clicked");
  
  let text1 = 'https://api.consumet.org/anime/gogoanime/'
 let text4 =''
 let text5 = ''
//let text2 = document.getElementById("name").value;
//text2 = "demon";
 let text3 = '?page=1'
 let result = text1.concat(text2,text3);
 console.log(result)
//fetch("https://api.consumet.org/anime/gogoanime/top-airing")
fetch(result)
    
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);
    data1 = data;
    displayCocktail(data1);
  })
  .catch((error) => console.error("FETCH ERROR:", error));
  
}
 

function displayCocktail(data) {
  //var x = document.getElementById("name").value;
  //var got = false;
  //console.log(x);
  //for(var i=0;i<10;i=i+1){
  //const name = data.results[0].title;
  //console.log(name);
  //if (name === x) {
  var img = document.createElement("img");

  img.src = data.results[0].image;

  var src = document.getElementById("print");

  src.appendChild(img);
  // var img=data.results[i].image;
  // document.getElementById("print").innerHTML = img;
  //got = true;
  //}
  //if (!got) console.log("Not Got");
}

//const cocktailDiv = document.getElementById("anime");
//const cocktailName = cocktail.title;
////const heading = document.createElement("h1");
//   heading.id = "one";
//   heading.innerHTML = cocktailName;
//   cocktailDiv.appendChild(heading);
