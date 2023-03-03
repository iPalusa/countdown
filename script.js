function startTimer() {
    // Get the countdown date and time from user input
    const datetime = document.getElementById("datetime").value;

    // Set the countdown date and time
    const countdownDate = new Date(datetime).getTime();

    // Update the countdown every second
    const timer = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time difference
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the timer element
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, stop the timer and display a message
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}