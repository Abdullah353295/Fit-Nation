const updateAllTimers = () => {
    // This finds all elements with the class 'timer-pop'
    const timerElements = document.querySelectorAll('.timer-pop');

    timerElements.forEach(timer => {
        // Get the specific date from the 'data-date' attribute in HTML
        const targetDate = new Date(timer.getAttribute('data-date')).getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        // If the date has passed
        if (difference <= 0) {
            timer.innerHTML = "EVENT LIVE NOW";
            timer.style.color = "#ff4d4d"; 
            return;
        }

        // Calculations for time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Display the result
        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
};

// Run the function every 1 second (1000 milliseconds)
setInterval(updateAllTimers, 1000);

// Run once immediately so the user doesn't see "00:00" on page load
updateAllTimers();


// Gym Search Logic
const gymSearch = document.getElementById('gymInput');

if (gymSearch) {
    gymSearch.addEventListener('keyup', () => {
        const filter = gymSearch.value.toLowerCase();
        const gymItems = document.querySelectorAll('.gym-item');

        gymItems.forEach(item => {
            // Get the text from the <p> tag (the location)
            const location = item.querySelector('p').textContent.toLowerCase();
            
            if (location.includes(filter)) {
                item.style.display = "block"; // Show match
            } else {
                item.style.display = "none"; // Hide non-match
            }
        });
    });
}

// Modal Elements
const modal = document.getElementById("membershipModal");
const closeBtn = document.querySelector(".close-btn");
const joinButtons = document.querySelectorAll(".cta-nav, .btn-primary, .card-btn, .join-btn-left");

// Open Modal
joinButtons.forEach(btn => {
    btn.onclick = (e) => {
        e.preventDefault(); // Stop links from jumping
        modal.style.display = "block";
    }
});

// Close Modal (clicking the X)
closeBtn.onclick = () => {
    modal.style.display = "none";
}

// Close Modal (clicking anywhere outside the box)
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// About Us Section Logic
function openAbout() {
    document.getElementById("aboutOverlay").style.width = "100%";
}

function closeAbout() {
    document.getElementById("aboutOverlay").style.width = "0%";
}

// Ensure the close button works via Event Listener as a backup
const closeOverlayBtn = document.querySelector('.close-overlay');
if (closeOverlayBtn) {
    closeOverlayBtn.addEventListener('click', closeAbout);
}

document.querySelector('.close-overlay').onclick = closeAbout;