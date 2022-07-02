let inputQuantity = document.querySelector("#quantity");
document.querySelectorAll("button").forEach(el => el.addEventListener("click", function () {
    if (el.id === "blackColor" || el.id === "redColor" || el.id === "blueColor" ) {
        document.querySelector("#selectedColor").innerHTML = el.attributes[0].value;
    }
    if ((el.id === "btnAdd" || el.id === "btnRemove")  ) {
        inputQuantity.setAttribute("value", (el.attributes[0].value === "-") ? eval(inputQuantity.getAttribute("value") + "+" + "1" ) : (inputQuantity.getAttribute("value") > 1) ? eval(inputQuantity.getAttribute("value") + "-" + "1") : eval(inputQuantity.getAttribute("value") + "-" + "0") )
    }
    if (el.id === "calculateTotal") {
        document.querySelector("#totalPrice").innerHTML = parseInt(document.querySelector("#unitValue").innerHTML * inputQuantity.getAttribute("value")).toLocaleString("es-CL", {style: "currency", currency: "CLP"});
        document.querySelector("#totalQuantity").innerHTML = inputQuantity.getAttribute("value");
    }
}))