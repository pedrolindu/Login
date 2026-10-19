const nome = document.getElementById("nome");

const senha = document.getElementById("senha");

const botaocadastrar = document.getElementById("entrar");

botaocadastrar.addEventListener("click", function(){
    const nome1 = nome.value;
    const sanha1 = senha.value;
if(nome1 === "Anakin" && sanha1 === "1234"){
    alert("Voçe fez login em sua conta")
}else if(nome1 === "" && sanha1 === ""){
    alert("Preencha todos os campos")
}else{
    alert("Acesso negado")
}
})