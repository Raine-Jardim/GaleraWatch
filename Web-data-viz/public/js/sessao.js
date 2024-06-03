// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("span_nomeUsuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "login.html";
}

// // carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
// }

// function entrar() {

//     let idUsuario = sessionStorage.ID_USUARIO;

//     fetch(`/usuarios/autenticar/${idUsuario}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({})
//     }).then(function (resposta) {
//         console.log("ESTOU NO THEN DO entrar()!")

//         if (resposta.ok) {
//             console.log(resposta);

//             resposta.json().then(json => {
//                 console.log(json);
//                 console.log(JSON.stringify(json));
//                 sessionStorage.EMAIL_USUARIO = json.email;
//                 sessionStorage.NOME_USUARIO = json.nome;
//                 sessionStorage.ID_USUARIO = json.id;

//                 setTimeout(function () {
//                     window.location = "cadastroFuncao.html";
//                 }, 1000); // apenas para exibir o loading

//             });

//         } else {

//             console.log("Houve um erro ao tentar realizar o login!");

//             resposta.text().then(texto => {
//                 console.error(texto);
//                 finalizarAguardar(texto);
//             });
//         }

//     }).catch(function (erro) {
//         console.log(erro);
//     })

//     return false;
// }