export class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T) {
    const template = this.template(model);

    this.elemento.innerHTML = template;
  }

  template(model: T): string {
    throw new Error("Método 'Template' deve ser implementado em classe filha!");
  }
}
