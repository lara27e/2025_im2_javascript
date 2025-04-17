/*
* 04.a - Türsteher
* Du arbeitest in einem Club als Türsteher:in. Du willst
* deinen Arbeitsalltag automatisieren und baust dir eine
* Funktion, welche ein Alter (number) als Parameter nimmt
* und dann in der Konsole ausspuckt, welche Getränke mit
* diesem Alter konsumiert werden dürfen.
*
* Unter 16: Du bist zu jung um Alkohol zu kaufen.
* Unter 18: Du bist zu jung für Schnaps.
* 18 oder darüber: Yeah, volljährig - kauf was du willst.
*
* Wenn du Lust hast, kannst du auch versuchen die Funktion
* noch etwas schlauer zu machen. Und zwar wäre es ja am
* besten, wenn anstatt das Alter direkt ein Geburtsdatum
* als Parameter eingegeben werden könnte. Nimm dir hierzu
* diese Anleitung zur Hilfe (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=de)
* oder arbeite mit KI.
* */

// 04_bedingungen a_turesteher //

let age = prompt("Wie alt bist du?");
age = Number(age)


function checkage(age) {
    if (age < 16) {
        console.log("Du bist zu junge für Alkohol!");
    } else if (age >= 16 && age < 18) {
        console.log("Du bist zu junge für Schnapps!");
    } else {
        console.log("Yeah, volljährig - kauf was du willst.");
    }
}

/* oder so 

function checkage(age) {
    if (age >= 18) {
        console.log("Yeah, volljährig - kauf was du willst.");
    } else if (age >= 16 {
        console.log("Du bist zu junge für Schnapps!");
    } else {
        console.log;("Du bist zu junge für Alkohol!");
    }
} 
    */