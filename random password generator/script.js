const lowercase = true;
const uppercase = true;
const symbols = true;
const numbers = true;

function generatepassword() {

    const length = Number(document.getElementById("numberinput").value);

    if (!length || length <= 0) {
        document.getElementById("result").textContent = `Please enter a valid number between 1-36. `;
        return;
    }
    else if(length > 36){
        document.getElementById("result").textContent = `Most websites don't allow password lenght more than 36, so please enter a length between 1 - 36.`;
        return;
    }

    const lowercasechar = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar = "0123456789";
    const symbolschar = "`~!@#$%^&*()_+-=|.,/;";

    let allowed = "";

    if (lowercase) allowed += lowercasechar;
    if (uppercase) allowed += uppercasechar;
    if (numbers) allowed += numberchar;
    if (symbols) allowed += symbolschar;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowed.length);
        password += allowed[randomindex];
    }

    document.getElementById("result").textContent = `Your generated password is : ${password}`
}