let list = document.getElementById('tableau_noms');
const noms = [];
let i = 0;
function ajouterNom() {
    noms[i] = prompt('Enter name of any friend:');
    list.innerText = noms.join(', ');
    i++;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function tirageSort() {
    if (i!=0){
        let j = getRndInteger(0, i);
        let nom_gagnant = noms[j];
        document.getElementById('nom_gagnant').innerText = " C'est:" + nom_gagnant;
    } else
        alert("Il n'y a pas de participants...");
}