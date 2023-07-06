var password = "Sv9FsdE3";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Senha Errada');
        return false;
    }
    if (document.getElementById('pass1').value == password) {
        alert('Senha Correta, Nao Compartilhe!');
    }

}