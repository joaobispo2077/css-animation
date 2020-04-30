class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('section-dicas');

        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');


    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        console.log(posicao);
        if (posicao >= 20) {
            // console.log('chegou');

            this.cardEsq.style.transform = `translate(${(-posicao + 25) / 10}%)`;
            this.cardDir.style.transform = `translate(${(posicao - 25) / 10}%)`;
            // this.cardEsq.style.transform = `rotateY(${-(posicao + 20)/2}deg)`;
            // this.cardDir.style.transform = `rotateY(${(posicao + 20)/2}deg)`;
            // document.querySelector('.card-esq').classList.add('.card-preto');
        }

    }
}

export { Cards };