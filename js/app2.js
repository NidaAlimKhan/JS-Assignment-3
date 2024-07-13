const words = ["Fantastic", "Brilliant", "Fabulous", "Amazing", "Wonderful"];

function name() {
    let name = prompt("Please enter your name:");
    if (name) {
        let words1 = Math.floor(Math.random()*words.length);
        let randomWords = words[words1];

        console.log(randomWords, ' ,', name);
    } else {
        console.log("No name entered. Please try again");
    }
}