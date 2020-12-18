// var x = prompt('Vvedi x');
// switch(x){
//  case '1' : alert('Vveli 1');
//      break;
//  case '2' : alert('Vveli 2');
//      break;
//  case '3' : alert('Vveli 3');
//      break;
//  case '4' : alert('Vveli 4');
//      break;
//  default: alert('Netu sovpadenii');
// }


var x = prompt("Введите первое число",100);  // введите первое число
var y = prompt("Введите второе число",100);  // введите второе
var z = prompt("Действие: + - * /");

var x = parseInt(x);
var y = parseInt(y);


var result;

switch(z) {
      case '+':result= x+y;
    break;
      case '-':result= x-y;
    break;
      case '*':result= x*y;
    break;
      case '/':
        if (y == 0){
            result = 'Na nol delim?';
        }
        else{
            result= x/y;
        }
    break;
    default: result= 'Вы ввели не существующую команду!';
};
alert(result);