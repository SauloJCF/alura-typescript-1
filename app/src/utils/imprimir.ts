import { Negociacao } from '../models/negociacao.js';

export function imprimir(...objetos: Array<any>) {
  for (const objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}
