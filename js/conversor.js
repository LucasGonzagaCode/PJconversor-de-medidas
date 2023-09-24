//Início da função "Converter"
const Converter = () => {
//Declaração de variáveis
const qtd = parseFloat(document.querySelector('#quantidade').value);

const de = document.querySelector('#valDe').value
const para = document.querySelector('#valPara').value

let resul;
let conversor = de  +','+ para
//
//Estrutura de decisão
switch(conversor){
    //quilometro
    case 'quilometro,quilometro':
        resul = qtd
    break;
    case 'quilometro,metro':
        resul = qtd * 1000
    break;
    case 'quilometro,centimetro':
        resul = qtd * 100000
    break;
    case 'quilometro,milimetro':
        resul = qtd * 1000000
    break;

    //metro
    case 'metro,quilometro':
        resul = qtd / 1000
    break;
    case 'metro,metro':
        resul = qtd
    break;
    case 'metro,centimetro':
        resul = qtd * 100
    break;
    case 'metro,milimetro':
        resul = qtd * 1000
    break;

    //centimetro
    case 'centimetro,quilometro':
        resul = qtd / 100000
    break;
    case 'centimetro,metro':
        resul = qtd / 100
    break;
    case 'centimetro,centimetro':
        resul = qtd
    break;
    case 'centimetro,milimetro':
        resul = qtd * 10
    break;

    //milimetro
    case 'milimetro,quilometro':
        resul = qtd / 1000000
    break;
    case 'milimetro,metro':
        resul = qtd / 1000
    break;
    case 'milimetro,centimetro':
        resul = qtd / 10
    break;
    case 'milimetro,milimetro':
        resul = qtd
    break;
}
//
//Saída de dados
    document.querySelector('#resultado').innerHTML=resul
//
//
}
//Fim da função "Converter"

//Início da função "Clear"
const Clear = () => {
    document.querySelector('#resultado').innerHTML=''
}
//Fim da função "Clear"

