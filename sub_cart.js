"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Khalel Abaquin
   Date:   4.3.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

//This line of code loads the function 'setupCart' every time the browser loads.
window.addEventListener("load", setupCart);

//?
function setupCart() {
      var addButtons = document.getElementsByClassName("addButton");
      for (var i = 0; i < addButtons.length; i++) {
            addButtons.addEventListener("click", addItem); //???
      }
}

//?
function addItem() {
      // var foodItem = document.getElementById("").nextElementSibling;
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode();
}