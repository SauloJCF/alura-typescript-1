import { View } from './view.js';
export class NegociacaoView extends View {
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
                        <td>
                            ${new Intl.DateTimeFormat().format(negociacao.data)}
                        </td>
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
}
