import { NegociacaoController } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';

const negociacaoController = new NegociacaoController();

const formulario = document.querySelector('.form');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  negociacaoController.adicionar();
});
