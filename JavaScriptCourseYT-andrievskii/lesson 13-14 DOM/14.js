function init(){

    var myClass = document.getElementsByClassName('some');
    console.log(myClass);

    var par = document.getElementById('code1');
    par.innerHTML = 'kekw';

    par.setAttribute('class', 'redtext');

    var scoop = document.getElementById('img');
    var altText = scoop.getAttribute('alt');
    console.log(altText);
}   
window.onload = init; // отрабаывает функция только после полного отрабатывания DOM(прогурзки страницы)\
