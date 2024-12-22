// Basic login credentials
const validUsername = "student";
const validPassword = "password123";

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username === validUsername && password === validPassword) {
    // Login successful
    document.getElementById("login").style.display = 'none';
    document.getElementById("quiz-link").style.display = 'block';
    document.getElementById("photosynthesis").style.display = 'block';
    document.getElementById("login-error").style.display = 'none';
  } else {
    // Invalid login
    document.getElementById("login-error").style.display = 'block';
  }
});

let score = 0;

function checkAnswer(answer) {
  if (answer === 'glucose' || answer === 'chloroplast') {
    score++;
  }
  document.getElementById("question1").style.display = 'none';
  document.getElementById("question2").style.display = 'none';
  document.getElementById("result").innerHTML = `<h4>Your Score: ${score} / 2</h4>`;
}
