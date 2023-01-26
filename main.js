// tady je místo pro náš program
/**
document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */


function upozorni() {
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  alert("Gratulace, právě jsi spustila tuto funkci!");
  let ctverecek = document.querySelector(".ctverecek");
  ctverecek.innerHTML = "muj čtvereček";
}

function zmenaBarvy(){
  let ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.backgroundColor = "pink";
}


function zobrazVysledek(){
    let vysledek = document.querySelector("#vysledek").innerHTML = secti(4, 5);    
}

function secti(cislo1,cislo2){
  let soucet = cislo1+cislo2;
  return soucet;
}
