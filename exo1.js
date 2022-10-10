let titreTest = document.getElementById('titre_test_exo_1');

document.getElementById("couleur_fond").addEventListener("input", function () {
    titreTest.style.backgroundColor = 'rgb(' + this.value + ',' + this.value + ',' + this.value + ')';
    let tt_rgb_text = 255 - this.value;
    titreTest.style.color = 'rgb(' + tt_rgb_text + ',' + tt_rgb_text + ',' + tt_rgb_text + ')';
});
document.getElementById("padding").addEventListener("input", function () {
    titreTest.style.padding = this.value + 'px';
});
document.getElementById("height").addEventListener("input", function () {
    titreTest.style.height = this.value + 'px';
});
document.getElementById("width").addEventListener("input", function () {
    titreTest.style.width = this.value + 'px';
});
document.getElementById("arrondi").addEventListener("input", function () {
    titreTest.style.borderRadius = this.value + 'px';
});
document.getElementById("rotation").addEventListener("input", function () {
    titreTest.style.rotate = this.value + 'deg';
});