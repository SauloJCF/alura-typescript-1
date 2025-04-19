import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacao-view.js';
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacaoView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        if (negociacao.data.getDay() === 0 || negociacao.data.getDay() === 6) {
            this._mensagemView.update('Negociações sõ podem ser adicionadas em dias úteis!');
            return;
        }
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());
        this.atualizaView();
        this.limparFormulario();
    }
    criaNegociacao() {
        const regex = /-/g;
        const data = new Date(this._inputData.value.replace(regex, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseInt(this._inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    atualizaView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
