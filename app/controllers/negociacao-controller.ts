import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacao-view.js';

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView: NegociacaoView = new NegociacaoView(
    '#negociacoesView'
  );
  private _mensagemView: MensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adicionar(): void {
    const negociacao = this.criaNegociacao();
    negociacao.data.setDate(21);

    this._negociacoes.adiciona(negociacao);
    console.log(this._negociacoes.lista());
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const regex = /-/g;
    const data = new Date(this._inputData.value.replace(regex, ','));
    const quantidade = parseInt(this._inputQuantidade.value);
    const valor = parseInt(this._inputValor.value);
    return new Negociacao(data, quantidade, valor);
  }

  limparFormulario(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';

    this._inputData.focus();
  }
}
