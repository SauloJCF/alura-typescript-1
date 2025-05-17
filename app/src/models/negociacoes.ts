import { Comparavel } from '../interfaces/comparavel.js';
import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this, null, 2);
  }

  ehIgual(objeto: Negociacoes): Boolean {
    return (
      JSON.stringify(this.negociacoes) === JSON.stringify(objeto.negociacoes)
    );
  }
}
