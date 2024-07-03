document.addEventListener('DOMContentLoaded', (event) => {
    const nextPageBtn = document.getElementById('nextPageBtn');
    const previousPageBtn = document.getElementById('previousPageBtn');

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            document.querySelector('.container').classList.add('fade-out');
            setTimeout(() => {
                window.location.href = 'MainMenu/mainMenu.html';
            }, 1000); 
        });
    }
});    
