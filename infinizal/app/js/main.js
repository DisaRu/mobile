

const OpenBtn = document.querySelector(".burger__menu-button");
const burgerMenu = document.querySelector(".burger__menu");
const linkas = document.querySelector(".burger__nav");
const overlay = document.querySelector(".burger__menu-overlay");


OpenBtn.onclick = function(){
  burgerMenu.classList.toggle("burger__menu-active");
   
}
linkas.onclick = function(){
    burgerMenu.classList.toggle("burger__menu-active")


}
overlay.onclick = function(){
    burgerMenu.classList.toggle("burger__menu-active")


}


// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://img4me.p.rapidapi.com/',
//   params: {
//     text: 'Test Me',
//     type: 'png',
//     bcolor: 'FFFFFF',
//     fcolor: '000000',
//     size: '12',
//     font: 'trebuchet'
//   },
//   headers: {
//     'X-RapidAPI-Key': '516149de50msh65437ddf444a7b6p1cd0c2jsnf2a26470f3a6',
//     'X-RapidAPI-Host': 'img4me.p.rapidapi.com'
//   }
  
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

