const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const form = document.getElementById('orcamento-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const servico = document.getElementById('servico').value;
  const bairro = document.getElementById('bairro').value;
  const problema = document.getElementById('problema').value.trim();

  const telefone = '5541999999999';

  const mensagem =
`Olá! Gostaria de solicitar um orçamento.

Nome: ${nome}
Serviço: ${servico}
Local: ${bairro}
Problema: ${problema}`;

  window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, '_blank');
});

document.querySelectorAll('a[href="#orcamento"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => document.getElementById('nome')?.focus(), 500);
  });
});
