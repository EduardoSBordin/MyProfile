let btnTheme = document.getElementById('theme');
let body = document.getElementById('body');

btnTheme.onclick = () => {

    body.classList.toggle('active');
}