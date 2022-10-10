let titre_test = document.getElementById('titre_test_exo_2');

function changeStyle() {
    titre_test.style.color = 'white';
    titre_test.style.backgroundColor = 'red';
    titre_test.style.border = 'dotted 2px black';
    titre_test.style.textIndent = 5 + 'px';
}
function changeClass() {
    titre_test.setAttribute('class', 'active');
}
function removeStyleAndClass() {
    titre_test.removeAttribute('style');
    titre_test.removeAttribute('class');
}