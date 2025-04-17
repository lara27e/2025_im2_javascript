/*
* 01.b - Taktfahrplan
* Bis im Jahr 2070 möchte die Deutsche Bahn auf einen Taktfahrplan,
* also einem System wie in der Schweiz, umstellen, wo alle Züge stündlich
* Fahren. Darauf freust du dich sehr! Jetzt möchtest du aber wissen,
* wie alt du dann überhaupt schon bist. Schreibe dir eine Berechnung dazu.
*
* Merke: Pro Kalenderjahr kannst du zwei verschiedene Alter haben (z.B. 26 und 27).
* Gebe in einem String beide Möglichkeiten in der Konsole aus.
* */

const taktfahrplan_done_year = 2070;
let geburtsjahr = prompt("Wann bist du geboren?");

checkbirthyear(geburtsjahr);

function checkbirthyear(taktfahrplan_done_year, geburtsjahr) {
    return taktfahrplan_done_year - geburtsjahr;
}

function checkbirthyear2(taktfahrplan_done_year, geburtsjahr) {
    return taktfahrplan_done_year - geburtsjahr - 1;
}

let result = checkbirthyear(taktfahrplan_done_year, geburtsjahr);
let result2 = checkbirthyear2(taktfahrplan_done_year, geburtsjahr);

console.log("Du bist im Jahr " + taktfahrplan_done_year + " " + result + " oder " + result2 + " Jahre alt.");