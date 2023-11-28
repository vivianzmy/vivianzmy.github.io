let colors = ["#000000", "#001f3f", "#002b4d", "#004080", "#5078a9", "#7fa7bf", "#a3c2d3", "#c9d8e5", "#e0ebf3", "#ffffff"];
let body = document.querySelector("body");
let currentIndex = 0;

// Array of changing texts for the "CHANGE COLOR" button
let changingTexts = [
  "@___ sent you a message",
  "scroll on tiktok",
  "____'s black friday SALE starts now!",
  "@___ sent you a reel",
  "@___ mentioned you in a post",
  "@___ sent you a reel",
  "@___ posted a new video",
  "watch youtube",
  "browse on netflix",
  "check IG",
  // Add more changing texts as needed
];

function newColor() {
  console.log("Changing color...");
  body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;

  // Change the text of the "CHANGE COLOR" button
  let buttonText = changingTexts.shift(); // Get the first text and remove it from the array
  changingTexts.push(buttonText); // Move the text to the end of the array for the next cycle
  document.getElementById("colorButton").textContent = buttonText;
}

function resetToBlack() {
  console.log("Resetting to black...");
  body.style.backgroundColor = "#000000";
  // Reset the text of the "CHANGE COLOR" button
  document.getElementById("colorButton").textContent = "CHANGE COLOR";
}

document.getElementById("colorButton").addEventListener("click", newColor);
document.getElementById("resetButton").addEventListener("click", resetToBlack);
