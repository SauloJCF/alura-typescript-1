export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this, null, 2);
    }
    ehIgual(objeto) {
        return (JSON.stringify(this.negociacoes) === JSON.stringify(objeto.negociacoes));
    }
}
//# sourceMappingURL=negociacoes.js.map