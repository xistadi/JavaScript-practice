window.onload = init;

function init() {
    var image = document.getElementById("zero");
    image.onclick = showAnswer;
}

function showAnswer() {
    var image = document.getElementById("zero");
    image.src = "img/zero.jpg";
    var answer = document.getElementById('answer');
    answer.innerHTML = 'Картина – Мона Лиза Леонардо да Винчи';
}