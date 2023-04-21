function validar(){
    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value

    /* if else */

    if(usuario =="" && password ==""){
        alert("PREENCHA TODOS OS CAMPOS")
    }
    else{
        alert("ACESSO PERMITIDO")
        window.open('menu.html')
    }
}

function calc(){
    let num1 = Number(prompt('Digite o primeiro número'))
    let num2 = Number(prompt('Digite o segundo número'))
    let op = Number(prompt(`Escolha uma opção: ${num1} e ${num2}. \n[1]Somar \n[2]Subtrair \n[3]Multiplicar \n[4]Dividir`))

    let msg= document.getElementById('msg')
    msg.innerHTML= `<h2>Resultado...</h2>`

    switch(op){
        case 1:
            msg.innerHTML+= `<p>${num1} +${num2} = <strong>${num1+num2}</strong></p>`
            break

        case 2:
            msg.innerHTML+= `<p>${num1} -${num2} = <strong>${num1-num2}</strong></p>`
            break

        case 3:
            msg.innerHTML+= `<p>${num1} *${num2} = <strong>${num1*num2}</strong></p>`
            break

        case 4:
            msg.innerHTML+= `<p>${num1} /${num2} = <strong>${num1/num2}</strong></p>`
            break

        default:
            msg.innerHTML+= `Opção Inválida`
    }
}