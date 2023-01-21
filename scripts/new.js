"use-strict";

const formulario = document.getElementById("form_new");
const campoNome = document.getElementById("text_nome");
const campoNasc = document.getElementById("date_nascimento");
const campoTell = document.getElementById("text_tell");
const campoEmail = document.getElementById("text_email");
const campoEndreco = document.getElementById("text_endereco");
const campoEmpresa = document.getElementById("text_empresa");
const campoOcupacao = document.getElementById("text_ocupacao");

const limpaFormulario = () => {
    campoNome.value = null;
    campoNasc.value = null;
    campoTell.value = null;
    campoEmail.value = null;
    campoEndreco.value = null;
    campoEmpresa.value = null;
    campoOcupacao.value = null;
}

campoTell.addEventListener("keyup", () => {
    let tellValue = campoTell.value;
    tellValue = tellValue.replace(/[^0-9]/g, '');
    campoTell.value = tellValue;
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!(campoTell.value.toString().length == 11)) {
        return window.alert("Quantidade do número do telefone inválida. (diferente de 11)");
    }

    let dadosCadastrados = localStorage.getItem("dadosCadastrados");
    const dado = `${campoNome.value}|campo|${campoNasc.value}|campo|${campoTell.value}|campo|${campoEmail.value}|campo|${campoEndreco.value}|campo|${campoEmpresa.value}|campo|${campoOcupacao.value}`;
    
    if(dadosCadastrados){
        dadosCadastrados+=`|dado|${dado}`;
    } else {
        dadosCadastrados = `${dado}`
    }
    localStorage.setItem("dadosCadastrados", dadosCadastrados);
    window.alert("Dado cadastrado com sucesso.")
    limpaFormulario();
});