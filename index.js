const form = document.getElementById("form")
let camp_a = document.getElementById("campo_a")
let camp_b = document.getElementById("campo_b")

form.addEventListener("submit", function(e){
    e.preventDefault()

    let resposta = document.getElementById("resultado_certo")
    let erro = document.getElementById("error")

    if(camp_b.value > camp_a.value){
        resposta.innerHTML = `O resultado do campo B e: ${camp_b.value}`
        resposta.style.display = "block";
    }else{
        erro.innerHTML= `resposta invalida, para que esteja correto o campo b precisa ser maior que o campo a`
        erro.style.display = "block"
    }
})