var access = document.getElementById("code1"); // получаем содержимое

var code = access.innerHTML; // считываем содержимое в переменную

access.innerHTML = "здесь был параграф №1"; // изменение содержимого элемента
//code = 'здесь был параграф №1';
//code = code + " вуаля"; // конкатенируем еще одно слово


document.body.style.background = 'blue';

setTimeout(() => document.body.style.background = '', 3000);

alert(code);