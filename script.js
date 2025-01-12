// Scroll Event for Black Hole Text Animation
document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const textLeft = document.getElementById("text-left");
    const textRight = document.getElementById("text-right");

    // Calculate new positions based on scroll
    const moveIn = Math.min(scrollTop / 5, 1000); // Limit max movement to 100px

    textLeft.style.transform = `translateX(${moveIn - 100}%)`; // Move text-left towards center
    textRight.style.transform = `translateX(${100 - moveIn}%)`; // Move text-right towards center
});

// Back to Top Button Logic
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scrolling back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Array of day-specific messages
const dayMessages = [
    "Welcome to StarScope this Sunday! Take a moment to reflect and recharge under the stars.",
    "Welcome to StarScope this Monday! Start your week aligned with the universe’s energy.",
    "Welcome to StarScope this Tuesday! Explore today’s cosmic vibes and unlock your potential.",
    "Welcome to StarScope this Wednesday! The week’s halfway point—time to balance your energy with the stars.",
    "Welcome to StarScope this Thursday! Dive into your horoscope and harness the universe’s flow.",
    "Welcome to StarScope this Friday! End the week strong by aligning with today’s celestial guidance.",
    "Welcome to StarScope this Saturday! Celebrate your journey with some stargazing inspiration."
];

// Get the current day of the week (0 = Sunday, 6 = Saturday)
const currentDay = new Date().getDay();

// Get the element where you want to display the message
const dayMessageContainer = document.getElementById('day-message-container');

// Create a paragraph element for the daily message
const dayMessageElement = document.createElement('p');

// Display the message for the current day
dayMessageElement.textContent = dayMessages[currentDay];

// Append the daily message to the container
if (dayMessageContainer) {
    dayMessageContainer.appendChild(dayMessageElement);
} else {
    console.error("Element with id 'day-message-container' not found.");
}
