function alterarStatus(id) {
    const gameElement = document.getElementById(`game-${id}`);
    const imageDiv = gameElement.querySelector('.dashboard__item__img');
    const button = gameElement.querySelector('.dashboard__item__button');

    if (button.classList.contains('dashboard__item__button--return')) {
        button.classList.remove('dashboard__item__button--return');
        imageDiv.classList.remove('dashboard__item__img--rented');
        button.textContent = 'Alugar';
    } else {
        button.classList.add('dashboard__item__button--return');
        imageDiv.classList.add('dashboard__item__img--rented');
        button.textContent = 'Devolver';
    }
}