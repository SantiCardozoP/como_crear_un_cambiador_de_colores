function botonCambiar(){
    let botonCambioDeColor=document.getElementById('button_click');
    botonCambioDeColor.addEventListener('click', cambioDeColor);
}
function cambioDeColor(){
   let body = document.getElementsByTagName('body')[0];
    body.style.background='#33BBFF';    
}

window.addEventListener('load', botonCambiar);