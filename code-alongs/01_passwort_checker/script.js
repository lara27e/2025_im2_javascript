console.log('hi script.js')

let password = prompt("Passwort eingeben");
let username = prompt("Username eingeben");

checkStringLength(password, 12);
checkStringLength(username, 7);

/*function checkPassword(pw){
    if (pw.length >= 12) {
    console.log("Das Passwort ist lang genug!");
    }   else {
    console.log("Bitte verwende ein längeres Passwort du Idiot.");
    }
} */

function checkStringLength(testString, testLength){
    if (testString.length >= testLength) {
    console.log("Der Text ist lang genug!");
    }   else {
    console.log("Bitte verwende einen längeren Text.");
    }
}
sum