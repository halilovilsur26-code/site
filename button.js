// ВСЕ кнопки
document.querySelectorAll('.watchBtn').forEach(btn => {
    const id = btn.dataset.id;
    
    btn.textContent = localStorage.getItem(id) === 'true' ? '❤️' : '🤍';

    btn.onclick = () => {
        const willBeWhite = btn.textContent === '❤️';
        btn.textContent = willBeWhite ? '🤍' : '❤️';
        localStorage.setItem(id, willBeWhite ? 'true' : 'false');
    };
});
