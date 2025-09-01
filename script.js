// =======================
// INTERACTIVE FEATURE 1: Form Validation
// =======================

// Grab form and feedback element
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Custom validation checks
  if (name.length < 3) {
    feedback.textContent = "Name must be at least 3 characters.";
    feedback.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    feedback.style.color = "red";
    return;
  }

  // If all checks pass
  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});


// =======================
// INTERACTIVE FEATURE 2: Modal
// =======================

// Elements
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalText = document.getElementById("modalText");

// Open modal
openModal.addEventListener("click", () => {
  modal.style.display = "block";
  modalText.textContent = "This is dynamic text loaded into the modal!";
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// =======================
// INTERACTIVE FEATURE 3: Slider
// =======================

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");

// Update displayed value in real time
slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
});
