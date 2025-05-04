const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random Image");
document.body.append(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.append(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<section><h2>Dom Basics</h2><p>This was added through Javascript</p></section>";
document.body.appendChild(newSection);