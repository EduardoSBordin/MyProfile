const btnDarkMode = document.querySelector('#btnDarkMode');

btnDarkMode.addEventListener('click', () => {

    document.querySelector('#navBar').classList.toggle('activeBody');
    document.querySelector('#h1').classList.toggle('activeBody');

    document.querySelector('#iconDarkMode').classList.toggle('activeBody');
});