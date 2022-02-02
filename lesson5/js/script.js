const inputFavChap = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function () {
  if (inputFavChap.value == "") {
    alert("Please type in a Chapter");
    inputFavChap.focus();
  } else {

    let liScripture = document.createElement("li");
    let btnRemove = document.createElement("button");

    liScripture.textContent = inputFavChap.value;
    btnRemove.textContent = "❌";

    btnRemove.ariaLabel = "Remove " + inputFavChap.value;

    liScripture.append(btnRemove);
    list.appendChild(liScripture);

    btnRemove.addEventListener("click", function () {
      list.removeChild(liScripture);
    });

    //Clear and reset focus to the input
    inputFavChap.focus();
    inputFavChap.value = "";
  }
});
