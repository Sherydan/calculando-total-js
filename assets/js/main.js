let itemQuantity = document.querySelector("#quantity").value;
let inputQuantity = document.querySelector("#quantity");

let btnAdd = document.querySelector("#btnAdd");
let btnRemove = document.querySelector("#btnRemove");

let add = function () {
  if (itemQuantity !== null) {
    itemQuantity++;
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
