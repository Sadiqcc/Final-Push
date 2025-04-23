const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('show');
});

// Get all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener to each question
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Toggle the corresponding answer visibility
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});


