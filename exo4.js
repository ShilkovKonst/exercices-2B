let text = document.getElementById('user_phrase');

function initExo4() {
    let user_text = prompt('Exercice 4: Enter any phrase');
    if (user_text != null)
        text.innerText = user_text;
}

function majMinAD() {
    let result_1 = document.getElementById('result_1');

    if (text.innerText.charAt(0).match(/[A-D]/) != null)
        result_1.innerText = "Votre texte commence d'une lettre majuscule: " + text.innerText.charAt(0);
    else if (text.innerText.charAt(0).match(/[a-d]/) != null)
        result_1.innerText = "Votre texte commence d'une lettre minuscule: " + text.innerText.charAt(0);
    else
        result_1.innerText = "Votre texte commence d'une lettre qui nous ne s'intéresse pas";
}

function trouverArobas() {
    function ifArobas() {
        if (text.innerText.match(/@/g) == null || text.innerText.match(/@/g).length > 1)
            return false;
        else return true;
    }
    let result_2 = document.getElementById('result_2');
    if (!ifArobas())
        result_2.innerText = "Il n'y a pas de @ ou il y a plus qu'un symbole";
    else
        result_2.innerText = "Il y a un seul @";
}

function trouverChiffres() {
    function ifChiffres() {
        if (text.innerText.match(/\d/) != null)
            return true;
        else
            return false;
    }
    let result_3 = document.getElementById('result_3');
    if (!ifChiffres())
        result_3.innerText = "Il n'y a pas de chiffres";
    else
        result_3.innerText = "Il y a au moins un chiffre";
}

function remplacerChiffres() {
    let result_4 = document.getElementById('result_4');
    let subtext = text.innerText;
    if (subtext.match(/\d/) != null)
        subtext = subtext.replace(/\d/g, '*');
    else {
        result_4.innerText = "Il n'y a pas de chiffres";
        return;
    }
    result_4.innerText = subtext;
}