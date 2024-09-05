console.dir(document);
console.log(document);

const maincontainer = document.getElementById("main_container");
console.log(maincontainer);

const secondaryContainer = document.querySelector(".secondary_container");
console.log(secondaryContainer);

const newImg = document.createElement("img");
console.log(newImg);

newImg.src =
  "https://ourfitpets.com/wp-content/uploads/2020/01/Drug-Poisoning-and-Overdose-in-Dogs-.jpg";
newImg.alt = "dog";

maincontainer.appendChild(newImg);

document.body.style.backgroundColor = "brown";
