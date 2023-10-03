const btnDarkMode = document.querySelector('#btnDarkMode');
let getB = document.querySelector('#main');

let clickId = 0;
btnDarkMode.addEventListener('click', () => {
    
    // document.querySelector('.infBlack1').classList.toggle('activeBody');
    // document.querySelector('.infBlack2').classList.toggle('activeBody');
    // document.querySelector('.infBlack3').classList.toggle('activeBody');
    // document.querySelector('.infBlack4').classList.toggle('activeBody');
    // document.querySelector('.infBlack5').classList.toggle('activeBody');
    // document.querySelector('#navBar').classList.toggle('activeBody');
    document.querySelector('#h1').classList.toggle('activeBody');
    document.querySelector('#h1_2').classList.toggle('activeBody');
    document.querySelector('#h1_3').classList.toggle('activeBody');
    document.querySelector('#h1_4').classList.toggle('activeBody');
    document.querySelector('#h1_5').classList.toggle('activeBody');
    // document.querySelector('#iconDarkMode').classList.toggle('activeBody');

    //getB.classList.toggle('activeBody');

    getTheme();
    
});

function getTheme(){
    
    clickId++;
    if(clickId <= 1){
        // getB.style.background = '#25003A';
        // getB.style.backgroundAttachment = `fixed`;
        getB.style.transition = '0.3s';
        getB.style.background = 'rgba(0, 0, 0, 0.872)';
        //console.log(getB.value);
    }else{
        clickId = 0;
        //white
        // getB.style.backgroundAttachment = `fixed`;
        getB.style.transition = '0.3s';
        getB.style.background = 'rgba(255, 255, 255, 0.904)';
        //console.log(getB.value);
    }

    localStorage.setItem('background', getB.style.background);
    console.log(getB.style.background);
}


document.querySelector('#main').style.background = localStorage.getItem('background');

//document.querySelector('#modalDiv').style.marginTop = '-200px';
// document.querySelector('.btnProjects').addEventListener('click', () =>{

//     // document.querySelector('#modalDiv').style.display = 'block';
//     clickId++;

//     if(clickId <= 1){
//         document.querySelector('#modalDiv').style.display = 'block';
//         //document.querySelector('#modalDiv').style.marginTop = '-200px';
//         //document.querySelector('#modalDiv').style.transition = '0.5s';
//     }else{
//         clickId = 0;
//         document.querySelector('#modalDiv').style.display = 'none';
//         //document.querySelector('#modalDiv').style.marginTop = '0px';
//     }
// });