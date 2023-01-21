"use-strict";
const tableBody = document.getElementById("table-body");

const carregaDados = () => {
    tableBody.innerHTML = "";
    const dadosCadastrados = localStorage.getItem("dadosCadastrados");
    let dados = false;

    if(dadosCadastrados){

        dados = dadosCadastrados.split("|dado|");
        dados = dados.map((dado) => dado.split("|campo|"));
        
        dados.forEach((dado) => {
            const tableLine = document.createElement("tr");

            const tdNome = document.createElement("td");

            const divNome = document.createElement("div");
            divNome.innerText = dado[0];

            const divOcupacao = document.createElement("div");
            divOcupacao.innerText = dado[6];
            divOcupacao.className = "ocupacao";

            const tdNascimento = document.createElement("td");
            const dataNascimento = dado[1].toString().split("-");
            tdNascimento.innerText = `${dataNascimento[2]}/${dataNascimento[1]}/${dataNascimento[0]}`;

            const tdTelefone = document.createElement("td");
            const telefone = dado[2].toString().replace(/(.{2})(.{5})()/g, '($1)$2-$3');
            tdTelefone.innerText = telefone;

            const tdEmail = document.createElement("td");
            tdEmail.innerText = dado[3];

            const tdEndereco = document.createElement("td");
            tdEndereco.innerText = dado[4];

            const tdEmpresa = document.createElement("td");
            tdEmpresa.innerText = dado[5];

            const tdOcupacao = document.createElement("td");
            tdOcupacao.innerText = dado[6];
            
            tdNome.appendChild(divNome);
            tdNome.appendChild(divOcupacao);

            tableLine.appendChild(tdNome);
            tableLine.appendChild(tdNascimento);
            tableLine.appendChild(tdTelefone);
            tableLine.appendChild(tdEmail);
            tableLine.appendChild(tdEndereco);
            tableLine.appendChild(tdOcupacao);

            tableBody.appendChild(tableLine);
        });
    } else {
        const tableLine = document.createElement("tr");
        const lineTd = document.createElement("td");
        lineTd.setAttribute("colspan", "6");
        lineTd.innerText = "Nenhum dado cadastrado.";
        
        tableLine.appendChild(lineTd);
        tableBody.appendChild(tableLine);
    }
}

const resetTable = () => {
    localStorage.clear();
    carregaDados();
}

carregaDados();