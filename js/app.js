function alterarStatus1() {
    const link = document.getElementById('btn1');
    if(link.textContent == 'Devolver') {
        link.textContent = 'Alugar';
        buttonSwap('btn1');
    } else {
        link.textContent = 'Devolver';
        buttonSwap('btn1');
    }
}
function buttonSwap(btn) {
    let botao = document.getElementById(btn);
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
    } else {
        botao.classList.remove('dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');
         botao.classList.add('dashboard__item__button');

    }
}