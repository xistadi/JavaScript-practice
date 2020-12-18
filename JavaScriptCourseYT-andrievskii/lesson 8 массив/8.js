/*var scores = [60, 50, 62, 58, 54, 54, 58, 50, 52, 54]; 

var solution2 = scores[0];

var flavors = ['vanilla', 'late', 'chocolate'];

flavors[1] = 'true'; // замена элемента массива по индексу/ключу

var numFlavors = flavors.length;
// индексы массива идут с 0, а подсчет с единицы!!!
alert(numFlavors);*/

function makePhrases(){
    var words1 = ["24/7", "Каждый день", "Сегодня", "Постоянно", "Непрерывно"];
    var words2 = ["мы", "команда", "компания", "сотрудники", "персонал"];
    var words3 = ["работаем не покладая рук", "отдыхаем на работе", "делаем чудеса"];
    //Math.floor округляет вниз
    //Math.random() Возвращает псевдослучайное число в интервале [0,1) – то есть между 0 (включительно) и 1 (не включая). 
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
    alert(phrase);
}

makePhrases();