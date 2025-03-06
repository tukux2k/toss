const botToken = "7609668402:AAGWOLDkkQIAEzXqL75TjtD6vAQqaLgehM4";
const chatId = "6715819149";

function tossCoin() {
    let coin = document.getElementById("coin");
    let resultText = document.getElementById("result");

    let randomNumber = Math.random();  // Generate a random number
    let isHead = randomNumber < 0.5;   // 50% chance for heads or tails

    // Set animation based on the result
    let rotations = 5 + Math.floor(Math.random() * 5); // Random number of spins
    let finalRotation = isHead ? 0 : 1800; // 1800° for tails

    coin.style.transform = `rotateY(${finalRotation + (rotations * 360)}deg)`;

    setTimeout(() => {
        let result = isHead ? "Head" : "Tail";
        resultText.innerText = "Result: " + result;

        sendToTelegram(result); // Send notification to Telegram
    }, 1000); // Wait for animation to complete
}

function sendToTelegram(result) {
    let message = `Coin Toss Result: ${result}`;
    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

    fetch(url)
        .then(response => console.log("Message sent to Telegram"))
        .catch(error => console.error("Error sending message", error));
}
