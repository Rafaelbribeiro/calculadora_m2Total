
function calcular(){
    let compr = document.querySelector('.comprimento').value;
    let larg = document.querySelector('.largura').value;
    
        
    const calc = Number(larg) * Number(compr);
    const showResult = document.querySelector('.resultado');

    console.log(calc)

    showResult.innerHTML = `Total de: ${calc.toFixed(2)} m²`;
};



