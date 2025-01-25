let countdownInterval;
let targetDate;

function startCountdown() {
    const targetDateInput = document.getElementById("targetDate").value;
    if (!targetDateInput) {
        alert("Please enter a valid date and time.");
        return;
    }

    targetDate = new Date(targetDateInput);
    if (targetDate <= new Date()) {
        alert("Please enter a future date and time.");
        return;
    }

    // Disable start button and enable stop/reset buttons
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("resetButton").disabled = false;

    // Start the countdown
    countdownInterval = setInterval(function() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "<h2>Time's Up!</h2>";
            resetButtons();
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days < 10 ? "0" + days : days;
            document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
    resetButtons();
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("targetDate").value = '';
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    resetButtons();
}

function resetButtons() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("resetButton").disabled = true;
}