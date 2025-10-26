function alterarStatus(id) {
    let gameElement = document.getElementById(`game-${id}`);
    let imageDiv = gameElement.querySelector('.dashboard__item__img');
    let button = gameElement.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameElement.querySelector('.dashboard__item__name').textContent;


    if (button.classList.contains('dashboard__item__button--return')) {
        button.classList.remove('dashboard__item__button--return');
        imageDiv.classList.remove('dashboard__item__img--rented');
        button.textContent = 'Alugar';
        alert(`O game ${nomeDoJogo} foi devolvido.`);
    } else {
        button.classList.add('dashboard__item__button--return');
        imageDiv.classList.add('dashboard__item__img--rented');
        button.textContent = 'Devolver';
        alert(`O game ${nomeDoJogo} foi alugado.`);
    }
}