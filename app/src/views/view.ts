import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';

export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar: boolean;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor) as HTMLElement;
    if (!elemento) {
      throw Error(
        `Seletor ${seletor} não existe no DOM e não foi possível instanciar a view.`
      );
    }
    this.elemento = document.querySelector(seletor) as HTMLElement;

    if (escapar) {
      this.escapar = escapar;
    }
  }

  @logarTempoDeExecucao(true)
  @inspect
  public update(model: T) {
    let template = this.template(model);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
