export default class Kutya {

    // privát adattagok // az osztályon kívülről nem elérhetőek


    #nev = ""
    #fajta = ""
    #mondat = ""
    #szuloELEM = "";
    constructor(nev, fajta, mondat, szuloELEM) {
        /* constructor feladata, hogy beállítja az adattagokat */
        // this mindig az osztály aktuális példányára fog mutatni
        this.#nev = nev; // publikus adattag
        this.#fajta = fajta;
        this.#mondat = mondat;
        this.#szuloELEM = szuloELEM;
        this.#megjelenit();
    }

/* igy már el tudom érni kívüről */
get nev() {
    return this.#nev;
}

set mondat(szoveg) {
    this.#mondat = szoveg;
}

    /* tagfüggvény, az adattagokon végez műveleteket */
    beszel() { //publikus metódus - osztályon kívülről elérhető
        console.log(this.#mondat)
    }


    #htmlOsszeallit() {
        let txt = `<div class = "kutya">
            <h2>${this.#nev}</h2>
            <h2>${this.#fajta}</h2>
        </div>`

        return txt;
    }

    #megjelenit() {
        this.#szuloELEM.append(this.htmlOsszeallit)
    }

}

//export default Kutya