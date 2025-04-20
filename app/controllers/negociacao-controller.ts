import { DiasDaSemana } from '../enums/dias-da-semana.js';
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

  public adicionar(): void {
    const negociacao = Negociacao.criaDe(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      this._mensagemView.update(
        'Negociações sõ podem ser adicionadas em dias úteis!'
      );
      return;
    }

    this._negociacoes.adiciona(negociacao);
    console.log(this._negociacoes.lista());
    this.atualizaView();
    this.limparFormulario();
  }

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  private atualizaView() {
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }

  private limparFormulario(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';

    this._inputData.focus();
  }
}
