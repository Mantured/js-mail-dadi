//*MAIL CHECK

const dataSetMails = [
    'gianni.gianni@gmail.com',
    'franco.micidial@gmail.com',
    'pasquale.santo@gmail.com',
    'ginetto.micidial@gmail.com',
    'padre.maronno@gmail.com'];
console.log(dataSetMails);

let mailUser = document.getElementById('input-mail-user');
console.log(mailUser);

function checkMyMail() {

    let check = (false);
    
    for (let i = 0; i < dataSetMails.length; i++) {                       
        if (dataSetMails[i] == mailUser.value) check = true; 
    }
    console.log(check); 

    let outcome = document.getElementById('check-outcome');

    if (check) { // check == true;
        outcome.innerHTML = `Welcome`;
    } else {
        outcome.innerHTML = `GetOut`;
    }

    mailUser.value = "";

}



//* GIOCO DEI DADI

document.getElementById('my-btn-check').addEventListener(`click`, checkMyMail);


function winOrDie() {
    const userNumber = Math.floor(Math.random() * 6) + 1;
    console.log(userNumber);
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    console.log(pcNumber);

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