function perguntar(){
    nome = prompt("Insira seu nome: ");
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.innerText = "Tenha um bom dia, sr (a)" +nome;
}