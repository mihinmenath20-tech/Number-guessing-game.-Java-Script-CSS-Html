const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {

    const guess = document.getElementById("guess").value;

    if (guess == randomNumber) {
        document.getElementById("result").innerText = "Wow congrats you are correct! 🎉";
    } else {
        document.getElementById("result").innerText = "Try Again.You can do it💪";
    }
}