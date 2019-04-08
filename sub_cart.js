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

//This function grabs the elements with the class of 'addButton' & stores it in the variable of 'addButtons'. An event listener is then added to 'addButtons' inside a for loop.
function setupCart() {
      var addButtons = document.getElementsByClassName("addButton");
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}

//The 'addItem' function adds items to the cart by applying 5 local variables, a for loop, & 2 if statements.
function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.id;
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      //This section of code loops through the child nodes of 'cartBox' & if the id of the child nodes match with the id of 'foodID', then the value of the first child node of 'cartBox' will increase by 1.
      for (var i = 0; i < cartBox.childNodes.length; i++) {
            if (cartBox.childNodes[i].id === foodID) {
                  cartBox.childNodes[i].getElementsByTagName("span")[0].innerHTML = parseInt(cartBox.childNodes[i].getElementsByTagName("span")[0].innerHTML) + 1;
                  duplicateOrder = true;
                  break;
            }

      }

      //This block of code checks to see if 'duplicateOrder' is false. If so, the text content of 'orderCount' will change to 1, 'orderCount' will be appended to 'foodDescription', & 'foodDescription' would be appended to 'cartBox'.
      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = 1;
            foodDescription.appendChild(orderCount);
            cartBox.appendChild(foodDescription);
      }
}