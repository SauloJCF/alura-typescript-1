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

  public update(model: T) {
    const t1 = performance.now();
    let template = this.template(model);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
    const t2 = performance.now();
    console.log(`O tempo de execução do update foi de ${(t2 - t1) / 1000}ms`);
  }

  protected abstract template(model: T): string;
}
