import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacaoView } from '../views/negociacao-view.js';
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacaoView('div#negociacoesView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(21);
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());
        this.limparFormulario();
        this._negociacoesView.update(this._negociacoes);
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
