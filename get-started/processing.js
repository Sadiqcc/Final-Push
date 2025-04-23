const steps = document.querySelectorAll('.step');
const progressBar = document.getElementById('progress-bar');
const message = document.getElementById('final-message');

let current = 0;

function updateProgress() {
  if (current < steps.length) {
    steps[current].style.backgroundColor = '#002147';
    steps[current].style.color = '#fff';
    progressBar.style.width = `${((current + 1) / steps.length) * 100}%`;
    current++;
    setTimeout(updateProgress, 1200);
  } else {
    message.style.display = 'block';
  }
}

window.onload = updateProgress;