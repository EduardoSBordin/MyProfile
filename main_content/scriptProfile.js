const btnDarkMode = document.querySelector('#btnDarkMode');

btnDarkMode.addEventListener('click', () => {

    document.querySelector('#infMain').classList.toggle('activeBody');
    document.querySelector('#navBar').classList.toggle('activeBody');
    document.querySelector('#h1').classList.toggle('activeBody');
    document.querySelector('#h1_2').classList.toggle('activeBody');
    document.querySelector('#h1_3').classList.toggle('activeBody');
    document.querySelector('#iconDarkMode').classList.toggle('activeBody');
});