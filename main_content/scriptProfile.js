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

document.querySelector('#modalDiv').style.marginTop = '-200px';
let clickId = 1;
document.querySelector('.btnProjects').addEventListener('click', () =>{

    // document.querySelector('#modalDiv').style.display = 'block';
    clickId++;

    if(clickId <= 1){
        //document.querySelector('#modalDiv').style.display = 'block';
        document.querySelector('#modalDiv').style.marginTop = '-200px';
        document.querySelector('#modalDiv').style.transition = '0.5s';
    }else{
        clickId = 0;
        //document.querySelector('#modalDiv').style.display = 'none';
        document.querySelector('#modalDiv').style.marginTop = '200px';
        document.querySelector('#modalDiv').style.marginTop = '0px';
    }
});