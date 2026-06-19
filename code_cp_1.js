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
