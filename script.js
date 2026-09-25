// window.alert("ATENÇÃO!! esse site utiliza fórmula para simular um empréstimo com juros reais apenas para fins acadêmicos e não subistitui qualquer ferramenta regularizada ou um contador profissional")
let f = document.getElementById("formulário")

f.addEventListener("submit", function (a){
    a.preventDefault

    let v1 = Number(document.getElementById("empréstimo"))
    let v2 = Number(document.getElementById("parcelas"))
    let taxa = Number(document.getElementById("tax"))

    let result = (((1+taxa/100)**v2*(taxa/100))/((1+taxa/100)**v2-1))*v1

    console.log(result)

})