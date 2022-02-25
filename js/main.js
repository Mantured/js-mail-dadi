/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Note: il controllo vorrei che fosse effettuato manualmente con un ciclo for e non usando funzionalità built-in degli array in js :)
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Consigli generali
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare attraverso le nostre istruzioni
si, ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
usiamo i diagrammini e i discorsi filosofici di oggi come base per costruire un nostro sistema di implementazione autonomo */


//#creo una variabile che mi prende solo l'id, dopo andrò a prenderla per value con mailUser.value

const dataSetMails = [
    'gianni.gianni@gmail.com',
    'franco.micidial@gmail.com',
    'pasquale.santo@gmail.com',
    'ginetto.micidial@gmail.com',
    'padre.maronno@gmail.com'];
console.log(dataSetMails);

const mailUser = document.getElementById('input-mail-user').value;
console.log(mailUser);


/* var x = new Boolean(false);
if (x) {
    this code is executed
} */

/* var x = Boolean(expression);     // use this...
var x = !!(expression);          // ...or this
var x = new Boolean(expression); // don't use this! */

function checkMyMail() {

    let check =(false); //valore booleano variabile definita let

    // sostanzialmente sta entrando nel ciclo perchè i = 0 ed esce praticamente subito perchè i<1, nel frattempo ha fatto un controllo 
    // posso anche usare .length così sto sereno che non si rompi nulla

    for (let i = 0; i < dataSetMails.length; i++) {                       
        if (dataSetMails[i] == mailUser) check = true; 
    }
    console.log(check); //!FUNZIONA!

    //assegno la variabile che poi vado a ripescarmi per l'inner posso crearla all'interno della condizione o anche fuori, meglio furi una volta sola

    let outcome = document.getElementById('check-outcome');

    //# attenzione! non riassegnare check ! QUINDI NO IF (CHECK = TRUE) IN QUESTO CASO NON STO CONTROLLANDO MA RIASSEGNANDO
    if (check) {
        /* let outcome = document.getElementById('check-outcome'); */
        outcome.innerHTML = `Welcome`;
    } else {
    /*  let outcome = document.getElementById('check-outcome'); */
        outcome.innerHTML = `GetOut`;
        /* console.log(outcome); */
    }
}


document.querySelector('button').addEventListener(`click`, checkMyMail);
