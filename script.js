document.addEventListener("DOMContentLoaded", function () {

    const mentorAvailability = {
        "Dr. Edward": [
            { value: "mon-2-4", text: "Mon 2 PM - 4 PM" },
            { value: "wed-2-4", text: "Wed 2 PM - 4 PM" },
            { value: "fri-2-4", text: "Fri 2 PM - 4 PM" },
        ],
        "Prof. John Smith": [
            { value: "tue-10-12", text: "Tue 10 AM - 12 PM" },
            { value: "thu-10-12", text: "Thu 10 AM - 12 PM" },
        ],
        "Prof. Williams": [
            { value: "sat-11-1", text: "Sat 11 AM - 1 PM" },
            { value: "sun-11-1", text: "Sun 11 AM - 1 PM" },
        ],
        "Prof. Madona Christy": [
            { value: "mon-5-8", text: "Mon 5 PM - 8 PM" },
            { value: "fri-5-8", text: "Fri 5 PM - 8 PM" },
        ]
    };


    const mentorSelect = document.getElementById("mentor");
    const timeSelect = document.getElementById("time");

    mentorSelect.addEventListener("change", function () {
        const selectedMentor = mentorSelect.value;
        timeSelect.innerHTML = ''; 

        if (selectedMentor && mentorAvailability[selectedMentor]) {
           
            mentorAvailability[selectedMentor].forEach(slot => {
                const option = document.createElement("option");
                option.value = slot.value;
                option.textContent = slot.text;
                timeSelect.appendChild(option);
            });
        } else {
            const option = document.createElement("option");
            option.text = "--Select Time--";
            timeSelect.appendChild(option);
        }
    });

    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const mentor = mentorSelect.value;
        const date = document.getElementById("date").value;
        const time = timeSelect.value;

        if (!mentor || !date || !time) {
            alert("Please complete all fields.");
            return;
        }

        alert(`Your session with ${mentor} on ${date} at ${time} has been successfully booked.`);
        bookingForm.reset();
    });

    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Thank you, ${name}, for your message. We will contact you soon!`);
        contactForm.reset();
    });

    const mentors = document.querySelectorAll(".mentor-card h3");
    mentors.forEach((mentor) => {
        const option = document.createElement("option");
        option.value = mentor.innerText;
        option.text = mentor.innerText;
        mentorSelect.appendChild(option);
    });
});