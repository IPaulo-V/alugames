let quantidadeAlugados = 0;

function alterarStatus(id) {
    let gameElement = document.getElementById(`game-${id}`);
    let imageDiv = gameElement.querySelector('.dashboard__item__img');
    let button = gameElement.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameElement.querySelector('.dashboard__item__name').textContent;

    if (button.classList.contains('dashboard__item__button--return')) {
       let confirmaDevolucao= confirm(`Deseja devolver o game ${nomeDoJogo}?`);
        if (!confirmaDevolucao) {
            return;
        }
        button.classList.remove('dashboard__item__button--return');
        imageDiv.classList.remove('dashboard__item__img--rented');
        button.textContent = 'Alugar';
        quantidadeAlugados--;
        alert(`O game ${nomeDoJogo} foi devolvido.`);
    } else {
        let confirmaAluguel= confirm(`Deseja alugar o game ${nomeDoJogo}?`);
        if (!confirmaAluguel) {
            return;
        }
        quantidadeAlugados++;
        button.classList.add('dashboard__item__button--return');
        imageDiv.classList.add('dashboard__item__img--rented');
        button.textContent = 'Devolver';
    }
    alert(`Total de games alugados: ${quantidadeAlugados}`);
}