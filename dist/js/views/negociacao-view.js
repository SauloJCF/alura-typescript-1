export class NegociacaoView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(modelo) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${modelo
            .lista()
            .map((negociacao) => {
            return `
                    <tr>
                        <td>?</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
        })
            .join('')}
            </tbody>
        </table>
        `;
    }
    update(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
}
