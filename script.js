// Button Event Handling
const magicButton = document.getElementById('magicButton');
const buttonStatus = document.getElementById('buttonStatus');

magicButton.addEventListener('click', () => {
    magicButton.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    buttonStatus.textContent = 'Button clicked! Color changed!';
});

magicButton.addEventListener('mouseover', () => {
    magicButton.style.transform = 'scale(1.1)';
    buttonStatus.textContent = 'Hovering...';
});

magicButton.addEventListener('mouseout', () => {
    magicButton.style.transform = 'scale(1)';
    buttonStatus.textContent = 'Waiting for action...';
});

magicButton.addEventListener('dblclick', () => {
    buttonStatus.textContent = 'Secret Action: Double-click detected! 🎉';
    magicButton.textContent = 'BOOM!';
    setTimeout(() => {
        magicButton.textContent = 'Click Me!';
    }, 1000);
});

// Keypress Detection
const keyInput = document.getElementById('keyInput');
const keyStatus = document.getElementById('keyStatus');

keyInput.addEventListener('keypress', (e) => {
    keyStatus.textContent = `Key pressed: ${e.key}`;
});

// Slideshow Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}

showSlide(slideIndex);

// Tab Functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

function openTab(index) {
    tabButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    tabPanes.forEach((pane, i) => {
        pane.classList.toggle('active', i === index);
    });
}

// Form Validation
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Enter a valid email';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

// Real-time Validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        alert('Form submitted successfully!');
        form.reset();
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
    }
});