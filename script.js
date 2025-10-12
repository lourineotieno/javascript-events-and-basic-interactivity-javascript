// 🌙 Part 1: Event Handling - Light/Dark Mode Toggle
const toggleBtn = document.getElementById('toggleModeBtn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = 
    document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// 🎯 Part 2a: Interactive Counter Game
let count = 0;
const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

increaseBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});

// 💬 Part 2b: Collapsible FAQ Section
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// 📝 Part 3: Form Validation
const form = document.getElementById('registerForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Regular expressions for validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (name === '') {
    message.textContent = 'Name cannot be empty';
    message.style.color = 'red';
  } else if (!email.match(emailPattern)) {
    message.textContent = 'Please enter a valid email address';
    message.style.color = 'red';
  } else if (!password.match(passwordPattern)) {
    message.textContent = 'Password must contain at least 6 characters, including uppercase, lowercase, and a number';
    message.style.color = 'red';
  } else {
    message.textContent = 'Registration successful ✅';
    message.style.color = 'green';
    form.reset();
  }
});
