export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const regex = /-/g;
        const data = new Date(dataString.replace(regex, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const novaData = new Date(this._data.getTime());
        return novaData;
    }
    paraTexto() {
        return `
      Data: ${this._data}
      Volume: ${this.quantidade}
      Valor: ${this.valor}
    `;
    }
    ehIgual(negociacao) {
        return (negociacao.data.getDate() === this._data.getDate() &&
            negociacao.data.getMonth() === this._data.getMonth() &&
            negociacao.data.getFullYear() === this._data.getFullYear());
    }
}
