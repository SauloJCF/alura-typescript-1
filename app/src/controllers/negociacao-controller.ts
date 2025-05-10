import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacao-view.js';

// Este comentário é um teste
export class NegociacaoController {
  @domInjector('#data')
  private _inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private _inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView: NegociacaoView = new NegociacaoView(
    '#negociacoesView'
  );
  private _mensagemView: MensagemView = new MensagemView('#mensagemView');
  private _negociacoesService = new NegociacoesService();

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  @inspect
  @logarTempoDeExecucao()
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

  public importarDados(): void {
    this._negociacoesService
      .obterNegociacoesDoDia()
      .then((negociacoesDeHoje) => {
        for (const negociacao of negociacoesDeHoje) {
          this._negociacoes.adiciona(negociacao);
        }
        this._negociacoesView.update(this._negociacoes);
      });
  }
}
