import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';

export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor) as HTMLElement;
    if (!elemento) {
      throw Error(
        `Seletor ${seletor} não existe no DOM e não foi possível instanciar a view.`
      );
    }
    this.elemento = document.querySelector(seletor) as HTMLElement;
  }

  @logarTempoDeExecucao(true)
  @inspect
  public update(model: T) {
    let template = this.template(model);

    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
