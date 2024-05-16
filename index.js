import Kutya from "./Kutya.js";

// példányosítom a kutyát 

const ujKutya = new Kutya("Hordó", "Husky", "Adj kaját!", $(".tarolo"));
const ujKutya2 = new Kutya("Vakarcs", "Chivava", "Huzz innen", $(".tarolo"));

ujKutya.nev = "Átnevezem";

//ujKutya.egyEgeszenUjTulajdonsag = "Osztályon kívülről is tudok értéket adni neki."
//delete ujKutya.fajta; ilyet inkább ne
//console.log(ujKutya.nev)

// azért tudom elérni mert van hozzá getter
console.log(ujKutya2.nev)
// megváltoztatni nem lehet mert nincs hozzá setter

ujKutya.mondat = "Köszi már nem vagyok kajás"

console.log(ujKutya);
console.log(ujKutya2);
ujKutya.beszel();
ujKutya2.beszel();