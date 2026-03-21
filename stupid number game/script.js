const minnum = 1;
const maxnum = 1000;
const guessnumber = Math.floor(Math.random() * (maxnum - minnum + 1) + minnum);

let attempt = 0;
let higherthan = 0;
let lowerthan = 1000;
console.log(guessnumber);
document.getElementById("input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.getElementById("submit").click();
    }
});

document.getElementById("submit").onclick = function () {
    let answer = Number(document.getElementById("input").value);

    if (isNaN(answer)) {
        document.getElementById("slazing").textContent = "Enter a valid number bro.";
        return;
    }

    attempt++;

    if (answer === guessnumber) {
        document.getElementById("slazing").textContent =
            `🎉 You got it! Took you ${attempt} attempts!`;
    } else if (answer > guessnumber) {
        document.getElementById("slazing").textContent = "⬇️ Try lower!";
    } else {
        document.getElementById("slazing").textContent = "⬆️ Try higher!";
    }
    document.getElementById("input").value = "";
};