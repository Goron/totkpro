var password = "Bc93SmcA";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Senha Errada');
        return false;
    }
    if (document.getElementById('pass1').value == password) {
        alert('Senha Correta, Nao Compartilhe!');
    }

}