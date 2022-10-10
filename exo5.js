let list = document.getElementById('tableau_noms');
const noms = [];
function ajouterNom() {
    noms.push(prompt('Enter name of any friend:'));
    list.innerText = noms.join(', ');
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function tirageSort() {
    if (noms.length != 0) {
        let j = getRndInteger(0, noms.length);
        let nom_gagnant = noms[j];
        document.getElementById('nom_gagnant').innerText = " C'est:" + nom_gagnant;
    } else
        alert("Il n'y a pas de participants...");
}