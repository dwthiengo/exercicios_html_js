function verificar(){
    let cpf = document.getElementById("cpf").value;
    let paragrafo = document.getElementById("paragrafo");
    if (cpf.length == 11){
        if (confirm("Confirme seu CPF") == true) {
            alert("CPF Válido");
        } else {
            alert("Operação cancelada");
}
    }
    else{
    alert("CPF incorreto")
    if(cpf.length > 11)
      paragrafo.innerText = "O CPF informado tem mais de 11 numeros";
    else
      paragrafo.innerText = "O CPF informado tem menos de 11 numeros";
    }
}




