
const btnResult = document.querySelector('.btn-calc');


btnResult.addEventListener('click',function(){
    let compr = document.querySelector('.comprimento').value;
    let larg = document.querySelector('.largura').value;
    
        
    const calc = Number(larg) * Number(compr);
    const showResult = document.querySelector('.resultado');

    console.log(calc)

    showResult.innerHTML = `${calc} m²`;
});
