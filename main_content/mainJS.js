let btnTheme = document.getElementById('theme');

let body = document.getElementById('body');
let p = document.getElementById('p');
let h1 = document.getElementById('h1');
let h4 = document.getElementById('h4');
let btnHeader1 = document.getElementById('btnHeader1');
let btnHeader2 = document.getElementById('btnHeader2');
let btnHeader3 = document.getElementById('btnHeader3');

let git = document.getElementById('git');
//let footer = document.getElementById('footer');

btnTheme.onclick = () => {

    body.classList.toggle('active');
    p.classList.toggle('active');
    h1.classList.toggle('active');
    h4.classList.toggle('active');
    btnHeader1.classList.toggle('active');
    btnHeader2.classList.toggle('active');
    btnHeader3.classList.toggle('active');
    //footer.classList.toggle('active');
}



