const themeSwitcher = document.querySelector('.theme-switcher');
const themeSwitchInput = themeSwitcher.querySelector('input[type="checkbox"]');

themeSwitchInput.addEventListener('change', () => {
    if (themeSwitchInput.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
