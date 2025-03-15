import { Negociacao } from '../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criaNegociacao() {
        const regex = /-/g;
        const data = new Date(this._inputData.value.replace(regex, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseInt(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
