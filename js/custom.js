var i = 0;
var text = 'Текст один</br>Текст два';
var speed = 50;

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout('', speed);
  }
}
typing();