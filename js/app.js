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
function alterarStatus2() {
    const link = document.getElementById('btn2');
    if(link.textContent == 'Devolver') {
        link.textContent = 'Alugar';
        buttonSwap('btn2');
    } else {
        link.textContent = 'Devolver';
        buttonSwap('btn2');
    }
}
function alterarStatus3() {
    const link = document.getElementById('btn3');
    if(link.textContent == 'Devolver') {
        link.textContent = 'Alugar';
        buttonSwap('btn3');
    } else {
        link.textContent = 'Devolver';
        buttonSwap('btn3');
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