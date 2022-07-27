const buttonOn = document.getElementById('main__button__on');
const buttonOff = document.getElementById('main__button__off');
const lamp = document.getElementById('main__lamp');
const fix = document.getElementById('main__button_fix');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if ( !isLampBroken()){
    lamp.src='./img/ligada.jpg';
    }
}

function lampOff() {
    if ( !isLampBroken()){
    lamp.src='./img/desligada.jpg';
    }
}

function broke() {
    lamp.src='./img/quebrada.jpg';
}

function lampFix() {
    if(isLampBroken()){
    lamp.src='./img/desligada.jpg';
    }
}

buttonOn.addEventListener( 'click', lampOn );
buttonOff.addEventListener( 'click', lampOff );
lamp.addEventListener( 'dblclick', broke );
lamp.addEventListener( 'mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff)
fix.addEventListener('click', lampFix)