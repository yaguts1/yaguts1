const facts = [
    'Algumas plantas podem viver por milhares de anos.',
    'Existem mais de 390 mil espécies de plantas conhecidas.',
    'As plantas convertem luz solar em energia através da fotossíntese.',
    'O bambu é uma das plantas que cresce mais rápido no mundo.',
    'As plantas são essenciais para manter a qualidade do ar que respiramos.'
];

const factElement = document.getElementById('fact');
const button = document.getElementById('newFactBtn');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
});
