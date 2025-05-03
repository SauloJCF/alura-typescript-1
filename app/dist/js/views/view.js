export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (!elemento) {
            throw Error(`Seletor ${seletor} não existe no DOM e não foi possível instanciar a view.`);
        }
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
