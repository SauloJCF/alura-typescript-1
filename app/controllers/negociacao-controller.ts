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
  }

  criaNegociacao(): Negociacao {
    const regex = /-/g;
    const data = new Date(this._inputData.value.replace(regex, ','));
    const quantidade = parseInt(this._inputQuantidade.value);
    const valor = parseInt(this._inputValor.value);
    return new Negociacao(data, quantidade, valor);
  }
}
