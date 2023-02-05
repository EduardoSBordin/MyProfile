const btnDarkMode = document.querySelector('#btnDarkMode');

btnDarkMode.addEventListener('click', () => {

    document.querySelector('.infBlack1').classList.toggle('activeBody');
    document.querySelector('.infBlack2').classList.toggle('activeBody');
    document.querySelector('.infBlack3').classList.toggle('activeBody');
    document.querySelector('.infBlack4').classList.toggle('activeBody');
    document.querySelector('.infBlack5').classList.toggle('activeBody');
    document.querySelector('#navBar').classList.toggle('activeBody');
    document.querySelector('#h1').classList.toggle('activeBody');
    document.querySelector('#h1_2').classList.toggle('activeBody');
    document.querySelector('#h1_3').classList.toggle('activeBody');
    document.querySelector('#h1_4').classList.toggle('activeBody');
    document.querySelector('#h1_5').classList.toggle('activeBody');
    document.querySelector('#iconDarkMode').classList.toggle('activeBody');
});