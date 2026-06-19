const form = document.getElementById("feedback-form");
const feedbackDisplay = document.getElementById("feedback-display");
const charCount = document.getElementById("char-count");
const validationMessage = document.getElementById("validation-message");
const tooltip = document.getElementById("tooltip");

form.addEventListener("click", function(event) {
  event.stopPropagation();
});

document.body.addEventListener("click", function() {
  tooltip.textContent = "";
});

form.addEventListener("input", function(event) {
  if (event.target.id === "comments") {
    charCount.textContent = "Characters: " + event.target.value.length;
  }
});

form.addEventListener("mouseover", function(event) {
  if (event.target.matches("input, textarea")) {
    tooltip.textContent = event.target.dataset.tooltip;
  }
});

form.addEventListener("mouseout", function(event) {
  if (event.target.matches("input, textarea")) {
    tooltip.textContent = "";
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comments = document.getElementById("comments").value.trim();

  if (name === "" || email === "" || comments === "") {
    validationMessage.textContent = "Please fill out all fields before submitting.";
    return;
  }

  validationMessage.textContent = "";

  const entry = document.createElement("div");
  entry.className = "feedback-entry";

  entry.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Comments:</strong> ${comments}</p>
  `;

  feedbackDisplay.appendChild(entry);

  form.reset();
  charCount.textContent = "Characters: 0";
});
