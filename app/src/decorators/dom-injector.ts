export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `Modificando o prototype de ${target.constructor.name}, adicionando o getter para a propriedade ${propertyKey} `
    );

    let elemento: HTMLElement;

    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(
          `Buscando elemento do DOM com seletor ${seletor} para injetar em ${propertyKey}`
        );
      }

      return elemento;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
