// Create image element
const poster = document.createElement("img");
poster.className = "moviePic";           // use className, not class
poster.src = "https://via.placeholder.com/150"; // sample image
poster.style.height = "400px";           // set height via style
poster.style.width = "300px";            // set width via style
poster.style.opacity = "0.8";            // set opacity

// Create description element
const description = document.createElement("p");
description.className = "movieDetail";   // use className
description.innerText = "This is a sample movie description."; // demo text

// Style the paragraph
description.style.position = "relative";
description.style.top = "20px";
description.style.width = "300px";
description.style.textAlign = "center";
description.style.fontSize = "18px";

// Append to body or a specific container
document.body.appendChild(poster);
document.body.appendChild(description);
