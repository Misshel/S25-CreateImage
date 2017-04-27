
// ---------modificando para ayudantia
function creandoDiv(getURL) {
  var contenedor= document.getElementById("contenedor");
  var div = document.createElement("div");
  var divMenu = document.createElement("div");
  var label1= document.createElement("label");
              label1.innerText= "Whith: ";
  var label2= document.createElement("label");
              label2.innerText= "Height: ";

  var input= document.createElement("input");
divMenu.appendChild(label1);
divMenu.appendChild(input);
divMenu.appendChild(label2);
divMenu.appendChild(input);

  var img= document.createElement("img");
  img.setAttribute("src", getURL);
  div.classList.add("contenedor-imagen");
  div.appendChild(img);
  contenedor.appendChild(div);
  contenedor.appendChild(divMenu);
