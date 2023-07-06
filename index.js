var password = "12345";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Senha Errada');
        return false;
    }
    if (document.getElementById('pass1').value == password) {
        alert('Senha Correta, Não Compartilhe!');
    }

}