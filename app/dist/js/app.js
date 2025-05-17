import { NegociacaoController } from './controllers/negociacao-controller.js';
const negociacaoController = new NegociacaoController();
const formulario = document.querySelector('.form');
if (formulario) {
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        negociacaoController.adicionar();
    });
}
else {
    throw new Error('Não foi possível iniciar a aplicação, verifique se o formulário existe!');
}
const btnImportar = document.querySelector('#btn-importar');
if (btnImportar) {
    btnImportar.addEventListener('click', (event) => {
        negociacaoController.importarDados();
        event.preventDefault();
    });
}
else {
    throw new Error('Botão importar não encontrado!');
}
//# sourceMappingURL=app.js.map