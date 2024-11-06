document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.createElement('button');
    themeButton.id = 'theme-switcher';
    themeButton.innerText = 'Switch Theme';
    document.body.insertBefore(themeButton, document.body.firstChild);

    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});


