// ADD AND REMOVE ITEMS SECTION

// select the current item quantity
let itemQuantity = document.querySelector("#quantity").value;
// input to variable
let inputQuantity = document.querySelector("#quantity");

// buttons to variables
let btnAdd = document.querySelector("#btnAdd");
let btnRemove = document.querySelector("#btnRemove");

let add = function () {
  if (itemQuantity !== null) {
    // add + 1 to itemQuantity variable
    itemQuantity++;
    // change the "value" attribute to input
    inputQuantity.setAttribute("value", itemQuantity);
    console.log(itemQuantity);
  }
};

let remove = function () {
  if (itemQuantity > 1) {
    itemQuantity--;
    inputQuantity.setAttribute("value", itemQuantity);
    console.log(itemQuantity);
  }
};

btnAdd.addEventListener("click", add);
btnRemove.addEventListener("click", remove);
// END ADD AND REMOVE ITEMS SECTION

// calculate total section
let btnCalcTotal = document.querySelector("#calculateTotal");
let totalPrice = document.querySelector("#totalPrice");
let unitValue = document.querySelector("#unitValue").innerHTML;
newUnitValue = unitValue.replace("$", "").replace(".", "");

let formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

let calcTotal = function () {
  if (itemQuantity !== null) {
    totalPrice.innerHTML = formatter.format(parseInt(newUnitValue * itemQuantity));
  }
};

btnCalcTotal.addEventListener("click", calcTotal);
