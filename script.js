var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}



// js for product gallery

var PrductImg = document.getElementById("PrductImg");
var SmallImg = document.getElementsByClassName("small-img")
SmallImg[0].onclick = function(){
    PrductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    PrductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    PrductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    PrductImg.src = SmallImg[3].src;
}

// js for toggle form 
var loginform = document.getElementById("loginform");
      var regform = document.getElementById("regform");
      var indicator = document.getElementById("indicator");

      function register() {
        regform.style.transform = "translateX(0px)";
        loginform.style.transform = "translateX(0px)";
        indicator.style.transform = "translateX(100px)";
      }
      function login() {
        regform.style.transform = "translateX(300px)";
        loginform.style.transform = "translateX(300px)";
        indicator.style.transform = "translateX(0px)";
      }