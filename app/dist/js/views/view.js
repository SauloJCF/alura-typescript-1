export class View {
    constructor(seletor, escapar) {
        const elemento = document.querySelector(seletor);
        if (!elemento) {
            throw Error(`Seletor ${seletor} não existe no DOM e não foi possível instanciar a view.`);
        }
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        const t1 = performance.now();
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`O tempo de execução do update foi de ${(t2 - t1) / 1000}ms`);
    }
}
