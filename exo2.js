let titre_test = document.getElementById('titre_test_exo_2');

function changeStyle() {
    titre_test.style.color = 'white';
    titre_test.style.backgroundColor = 'red';
    titre_test.style.border = 'dotted 2px black';
    titre_test.style.textIndent = 5 + 'px';
}
function changeClass() {
    if (titre_test.getAttribute('class') != null && !titre_test.classList.contains('active'))
        titre_test.classList.add('active');
    else 
        titre_test.setAttribute('class', 'active');
}
function removeStyleAndClass() {
    if (titre_test.getAttribute('class') != null && titre_test.classList.contains('active'))
        titre_test.classList.remove('active');
    else
        titre_test.removeAttribute('style');
}