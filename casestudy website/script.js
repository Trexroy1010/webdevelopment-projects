let names;
let selectedbutton;
let searchedname;

// Name input
document.getElementById("submit").onclick = function(){
    names = document.getElementById("search").value;

    if (names.trim() === "") {
        document.getElementById("opening_header").textContent = "Please enter your name!";
    } else {
        document.getElementById("opening_header").textContent = `Hello ${names}`;
    }
};

// Buttons
document.getElementById("director").onclick = function(){
    selectedbutton = "Director";
    document.getElementById("selected").textContent = "You selected Director";
};


// Search
document.getElementById("searching_button").onclick = function(){

    searchedname = document.getElementById("searching").value;

    if (!selectedbutton) {
        document.getElementById("selected").textContent = "Please select a category first!";
    }
    else if (searchedname.trim() === "") {
        document.getElementById("selected").textContent = "Please enter a name!";
    }
    else {
        document.getElementById("selected").textContent =
        `So you want to do a case study on the ${selectedbutton} named ${searchedname}?`;
    }
};