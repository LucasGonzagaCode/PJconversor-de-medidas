
let val = document.querySelector('#quantidade')

let opt1 = document.querySelector('#tiposDe') 
opt1.addEventListener('click',converter)

let opt2 = document.querySelector('#tiposPara')
opt2.addEventListener('click',converter)

let button = document.querySelector('#button')
let resul

//
function converter() {

    const valorDe = opt1.value
    const valorPara = opt2.value
    const value = val.value

    const calculos = {
        nm1:0,
        convKM: (value) => {
        this.nm1=value
        return(parseFloat(this.nm1) * 1000)
        },
        convM: (value) => {
        this.nm1=value
        return(parseFloat(this.nm1) * 100)
        },
        convCM: (value) => {
        this.nm1=value
        return(parseFloat(this.nm1) / 100)
        },
        convMM: (value) => {
        this.nm1=value
        return(parseFloat(this.nm1) / 1000)
        }   
    }

    switch(valorDe){
        case "quilometro":
           resul = value*1000
            break;
        case "metro":
            resul = calculos.convM(value)
            break;
        case "centimetro":
            resul = calculos.convKM(value)
            break;
        case "milimetro":
            resul = calculos.convKM(value)
            break;
    }

    switch(valorPara){
        case "quilometro":
            resul = calculos.convKM(value)
            break;
        case "metro":
            resul = value * 100
            break;
        case "centimetro":
            resul = calculos.convKM(value)
            break;
        case "milimetro":
            resul = valorPara / 1000
            break;
    }
    document.getElementById('resultado').innerHTML=resul
}

