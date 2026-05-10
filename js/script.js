// Gerar corações flutuantes
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const numHearts = 15;

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heartsContainer.appendChild(heart);
    }
}

// Interação da carta
document.addEventListener('DOMContentLoaded', function() {
    createHearts();

    const card = document.getElementById('card');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('.message h2');
    card.addEventListener('click', function() {
        card.classList.toggle('open');
        h1.classList.toggle('shift-up');
        h2.classList.toggle('shift-up-h2');
    });
});