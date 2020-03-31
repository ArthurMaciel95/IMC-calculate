function imc() {

    const form = document.querySelector('form')


    function verificar(evento){
        evento.preventDefault();
        let peso = document.querySelector('#peso').value
        let altura = document.querySelector('#altura').value
        const res = document.querySelector('#res')
        let calculo;

        altura = parseFloat(altura)
        peso = Number(peso)

        calculo = peso / (altura * altura)


        if (peso == '' || peso == null && altura == '' || altura == null) {
            res.innerHTML = `Há campos em Branco`
            res.style.backgroundColor = "#FF4F4F"
        }else if ( calculo <= 18.5){
            res.innerHTML = `Seu IMC é: ${Math.round(calculo)}, (Abaixo do peso)`
            res.style.backgroundColor = "#85C846 "
        }else if ( calculo >= 18.5 && calculo <= 24.9){
            res.innerHTML = `Seu IMC é: ${Math.round(calculo)}, (Peso normal)`
            res.style.backgroundColor = "#85C846 "
        }else if ( calculo >= 25  && calculo <= 29.9){
            res.innerHTML = `Seu IMC é: ${Math.round(calculo)}, (Sobre peso)`
            res.style.backgroundColor = "#85C846 "
        }else if ( calculo >= 30 && calculo <= 34.9 ){
            res.innerHTML = `Seu IMC é: ${Math.round(calculo)}, (Obesidade Grau 1)`
            res.style.backgroundColor = "#85C846 "
        }else if ( calculo >= 35 && calculo <= 39.9){
            res.innerHTML = `Seu IMC é: ${Math.round(calculo)}, (Obesidade Grau 2)`
            res.style.backgroundColor = "#85C846 "
        }else if ( calculo <= 40){
            res.innerHTML = `Seu IMC é: ${Math.round(calculo)} , (Obesidade Grau 3)`
        }else if ( calculo > 40){
            res.innerHTML = `Seu IMC é: ${Math.round(calculo)} , (Risco de Morte Súbita!!)`
            res.style.backgroundColor = "#FF4F4F"
        }
    }
    form.addEventListener('submit', verificar);
}
imc()
