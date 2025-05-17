import { Comparavel } from '../interfaces/comparavel.js';
import { Imprimivel } from '../utils/imprimivel.js';

export class Negociacao implements Imprimivel, Comparavel<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const regex = /-/g;
    const data = new Date(dataString.replace(regex, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(data, quantidade, valor);
  }

  get volume(): Number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const novaData = new Date(this._data.getTime());
    return novaData;
  }

  public paraTexto(): string {
    return `
      Data: ${this._data}
      Volume: ${this.quantidade}
      Valor: ${this.valor}
    `;
  }

  public ehIgual(negociacao: Negociacao): Boolean {
    return (
      negociacao.data.getDate() === this._data.getDate() &&
      negociacao.data.getMonth() === this._data.getMonth() &&
      negociacao.data.getFullYear() === this._data.getFullYear()
    );
  }
}
