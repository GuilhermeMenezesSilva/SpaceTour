const botaoEnviar = document.getElementById("enviar")
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const CPF = document.getElementById("cpf")
const data = document.getElementById("data")
const motivacao =document.getElementById("motivacao")
botaoEnviar.addEventListener("click", verificar)

function verificar(){
    if (nome,sobrenome,CPF,data,motivacao.value == ''){
        alert('Campos obrigátorios não preenchidos')
    }
    else{
        alert('Cadastro realizado com sucesso')
    }
}
