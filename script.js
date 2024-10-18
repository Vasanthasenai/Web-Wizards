const mentors = [
    {
        name: "Dr. Edward",
        expertise: "Software Engineering, AI, Data Science",
        availability: "Mon, Wed, Fri - 2 PM to 4 PM",
        image: "Edward.jpeg"
    },
    {
        name: "Prof. John Smith",
        expertise: "Cybersecurity, Networking",
        availability: "Tue, Thu - 10 AM to 12 PM",
        image: "John Smith.jpeg"
    },
    {
        name: "Prof. Williams",
        expertise: "Web Development",
        availability: "Sat, Sun - 11 AM to 1 PM",
        image: "Williams.jpeg" 
    },
    {
        name: "Prof. Madona Christy",
        expertise: "App Development",
        availability: "Mon, Fri - 5 PM to 8 PM",
        image: "Madona Christy.jpeg" 
    }
];

const mentorSelect = document.getElementById("mentor");

mentors.forEach((mentor, index) => {
    const option = document.createElement("option");
    option.value = index; 
    option.textContent = mentor.name; 
    mentorSelect.appendChild(option);
});

const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const selectedMentorIndex = mentorSelect.value;
    const selectedDate = document.getElementById("date").value;
    const selectedTime = document.getElementById("time").value;

    if (!selectedMentorIndex || !selectedDate || !selectedTime) {
        alert("Please fill in all fields before booking.");
        return;
    }

    const selectedMentor = mentors[selectedMentorIndex];

    
    alert(`You have successfully booked a session with ${selectedMentor.name} on ${selectedDate} at ${selectedTime}.`);
    
    
    bookingForm.reset();
});


mentorSelect.addEventListener("change", () => {
    const timeSelect = document.getElementById("time");
    timeSelect.innerHTML = '';
    
    const timeSlots = ["2 PM", "3 PM", "4 PM"]; 

    timeSlots.forEach(time => {
        const option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
});
