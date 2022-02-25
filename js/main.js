
const dataSetMails = [
    'gianni.gianni@gmail.com',
    'franco.micidial@gmail.com',
    'pasquale.santo@gmail.com',
    'ginetto.micidial@gmail.com',
    'padre.maronno@gmail.com'];
console.log(dataSetMails);

const mailUser = document.getElementById('input-mail-user').value;
console.log(mailUser);

//#voglio definire un i = 0, quindi entra nel ciclo valido per tutte le volte che i < 1, aumenta l'i non è più minore di 1 esco dal cilco

/* for (let i = 0; i < 1; i++) {
    if (dataSetMails[i] == (mailUser)) {
        console.log(`bravoh`);
    } else {
        console.log(`mona`);
    }
} */


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

    //# attenzione! non riassegnare check ! QUINDI NO IF (CHECK = TRUE) IN QUESTO CASO NON STO CONTROLLANDO MA RIASSEGNANDO AL MASSIMO CHECK == TRUE
    if (check) { // check == true;
        /* let outcome = document.getElementById('check-outcome'); */
        outcome.innerHTML = `Welcome`;
    } else {
    /*  let outcome = document.getElementById('check-outcome'); */
        outcome.innerHTML = `GetOut`;
        /* console.log(outcome); */
    }
}

document.getElementById('my-btn-check').addEventListener(`click`, checkMyMail);

function winOrDie() {
    const userNumber = Math.floor(Math.random() * 6) + 1;
    console.log(userNumber);
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    console.log(pcNumber);
    /* const diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber); */

    //potrei creare una terza variabile per complicare le cose in cui inserisco il valore del dado da mettere a confronto con i due attori, ma alla fine è la stessa cosa

    if (userNumber < pcNumber) {
        document.getElementById('result').innerHTML = `Hai perso!`
        console.log(`You Lose`);
    } else if (userNumber > pcNumber) {
        document.getElementById('result').innerHTML = `Hai vinto!`
        console.log(`You Win bastardo fortunato`);
    } else {
        document.getElementById('result').innerHTML = `Pari. rigioca!`
        console.log(`Patta`);
    }
}

document.getElementById('roll').addEventListener(`click`, winOrDie);