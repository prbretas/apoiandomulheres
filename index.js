//Variaveis LOGIN

const usernameLogin = "admin";       
const passwordLogin = "admin";
let enviarLogin = document.getElementById('btnSubmitLogin')


//FUNÇÃO LOGIN

function enviar() {
    var username = document.getElementById('usernameLogin').value;
    var password = document.getElementById('passwordLogin').value;

    if (username === "admin" && password === "admin") {
        
        location.href = "https://www.pm.sc.gov.br/tudo-sobre/violencia-domestica";
    }
    else {
        alert ("Usuario e/ou senha incorretos");
    }
}

