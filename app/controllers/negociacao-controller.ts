import { Negociacao } from '../models/negociacao.js';

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  constructor() {
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
  }

  adicionar(): void {
    const negociacao = this.criaNegociacao();

    console.log(negociacao);

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
