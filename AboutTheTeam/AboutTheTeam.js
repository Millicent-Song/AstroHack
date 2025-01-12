document.addEventListener("DOMContentLoaded", () => {
    // Team Section Animations
    const membersSection = document.querySelector(".members");
    const members = document.querySelectorAll(".member");
    const teamHeading = document.querySelector(".team-heading");

    // Initially hide the members section
    membersSection.style.opacity = "0";
    membersSection.style.transform = "translateY(50px)";
    membersSection.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    // Reveal the members section when the team-heading comes into view
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    membersSection.style.opacity = "1";
                    membersSection.style.transform = "translateY(0)";
                }
            });
        },
        { root: null, threshold: 0.1 }
    );

    sectionObserver.observe(teamHeading);

    // Reveal each member as it comes into view
    const memberObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        },
        { root: null, threshold: 0.1 }
    );

    // Initially hide all members
    members.forEach((member) => {
        member.style.opacity = "0";
        member.style.transform = "translateY(140px)";
        member.style.transition = "opacity 0.9s ease, transform 0.9s ease";

        // Observe each member
        memberObserver.observe(member);
    });

    
    // Form Validation
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    // Validate Name
    nameInput.addEventListener("blur", () => {
        if (/^[a-zA-Z\s]{4,}$/.test(nameInput.value)) {
            nameInput.style.borderColor = "green";
        } else {
            nameInput.style.borderColor = "red";
        }
    });

    // Validate Phone Number
    phoneInput.addEventListener("blur", () => {
        if (/^\d{10}$/.test(phoneInput.value) || /^\d{3} \d{3} \d{4}$/.test(phoneInput.value)) {
            phoneInput.style.borderColor = "green";
        } else {
            phoneInput.style.borderColor = "red";
        }
    });


    // Validate Message
    messageInput.addEventListener("blur", () => {
        const messageLength = messageInput.value.length;
        if (messageLength >= 10 && messageLength <= 30) {
            messageInput.style.borderColor = "green";
        } else {
            messageInput.style.borderColor = "red";
        }
    });

    // Prevent Form Submission if Invalid
    document.getElementById("contact-form").addEventListener("submit", (event) => {
        const isNameValid = /^[a-zA-Z\s]{4,}$/.test(nameInput.value);
        const isPhoneValid =
            /^\d{10}$/.test(phoneInput.value) || /^\d{3} \d{3} \d{4}$/.test(phoneInput.value);
        const isMessageValid = messageInput.value.length >= 10 && messageInput.value.length <= 30;

        if (!isNameValid || !isPhoneValid || !isMessageValid) {
            event.preventDefault();
            alert("Please ensure all fields are filled out correctly.");
        }
    });
});
