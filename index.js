function Occurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

function userInput() {
    let Str = prompt("Enter a string: ");
    let Ch = prompt("Enter the character to count: ");
    
    if (Ch.length == 1) {
        let result = Occurrences(Str,Ch);
        alert(`The character '${Ch}' occurs ${result} time(s) in the string.`);
    } else {
        alert("Please enter only one character to count.");
    }
}