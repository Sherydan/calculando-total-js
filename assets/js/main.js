let selectedColor = document.querySelector("#selectedColor");
let totalPrice = document.querySelector("#totalPrice");
let unitValue = document.querySelector("#unitValue").innerHTML;
let inputQuantity = document.querySelector("#quantity");
let totalQuantity = document.querySelector("#totalQuantity");
let elementsArray = document.querySelectorAll("button");
elementsArray.forEach(el => el.addEventListener("click", function () {
    if (el.id === "blackColor" || el.id === "redColor" || el.id === "blueColor" ) {
        selectedColor.innerHTML = el.attributes[0].value;
    }
    if ((el.id === "btnAdd" || el.id === "btnRemove")  ) {
        inputQuantity.setAttribute("value", (el.attributes[0].value === "-") ? eval(inputQuantity.getAttribute("value") + "+" + "1" ) : (inputQuantity.getAttribute("value") > 1) ? eval(inputQuantity.getAttribute("value") + "-" + "1") : eval(inputQuantity.getAttribute("value") + "-" + "0") )
    }
    if (el.id === "calculateTotal") {
        totalPrice.innerHTML = parseInt(unitValue * inputQuantity.getAttribute("value")).toLocaleString("es-CL", {style: "currency", currency: "CLP"});
        totalQuantity.innerHTML = inputQuantity.getAttribute("value");
    }
}))