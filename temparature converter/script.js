function getInput() {
    let value = document.getElementById("converter").value.trim();

    if (value === "") {
        document.getElementById("resulttalk").textContent = "⚠️ Enter a value first!";
        return null;
    }

    let num = Number(value);

    if (isNaN(num)) {
        document.getElementById("resulttalk").textContent = "⚠️ Enter a valid number!";
        return null;
    }

    return num;
}

function showResult(text) {
    document.getElementById("resulttalk").textContent = text;
}

function showTitle(text) {
    document.getElementById("p1").textContent = text;
}

// Celsius → Kelvin
document.getElementById("btn1").onclick = function() {
    let v = getInput();
    if (v === null) return;

    if (v < -273.15) {
        return showResult("❌ Below absolute zero!");
    }

    let result = (v + 273.15).toFixed(2);

    showTitle("Celsius → Kelvin");
    showResult(`Result: ${result} K`);
};

// Kelvin → Celsius
document.getElementById("btn2").onclick = function() {
    let v = getInput();
    if (v === null) return;

    if (v < 0) {
        return showResult("❌ Kelvin cannot be below 0!");
    }

    let result = (v - 273.15).toFixed(2);

    showTitle("Kelvin → Celsius");
    showResult(`Result: ${result} °C`);
};

// Celsius → Fahrenheit
document.getElementById("btn3").onclick = function() {
    let v = getInput();
    if (v === null) return;

    if (v < -273.15) {
        return showResult("❌ Below absolute zero!");
    }

    let result = ((v * 9/5) + 32).toFixed(2);

    showTitle("Celsius → Fahrenheit");
    showResult(`Result: ${result} °F`);
};

// Fahrenheit → Celsius
document.getElementById("btn4").onclick = function() {
    let v = getInput();
    if (v === null) return;

    if (v < -459.67) {
        return showResult("❌ Below absolute zero!");
    }

    let result = ((v - 32) * 5/9).toFixed(2);

    showTitle("Fahrenheit → Celsius");
    showResult(`Result: ${result} °C`);
};

// Fahrenheit → Kelvin
document.getElementById("btn5").onclick = function() {
    let v = getInput();
    if (v === null) return;

    if (v < -459.67) {
        return showResult("❌ Below absolute zero!");
    }

    let result = ((v - 32) * 5/9 + 273.15).toFixed(2);

    showTitle("Fahrenheit → Kelvin");
    showResult(`Result: ${result} K`);
};

// Kelvin → Fahrenheit
document.getElementById("btn6").onclick = function() {
    let v = getInput();
    if (v === null) return;

    if (v < 0) {
        return showResult("❌ Kelvin cannot be below 0!");
    }

    let result = ((v - 273.15) * 9/5 + 32).toFixed(2);

    showTitle("Kelvin → Fahrenheit");
    showResult(`Result: ${result} °F`);
};