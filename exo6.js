let tbody = document.getElementById('tbody');
let auto_table = false;

function multiTable(n) {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let p = document.createElement("p");
    p.innerText = n;
    p.setAttribute('class', 'header');
    th.appendChild(p);
    tr.appendChild(th);
    for (let j = 1; j < 10; j++) {
        {
            let td = document.createElement("td");
            let p = document.createElement("p");
            p.innerText = n * j;
            p.setAttribute('class', 'body');
            td.appendChild(p);
            tr.appendChild(td);
        }
    }
    tbody.appendChild(tr);
    tr.setAttribute('id', 'trow');
}

function verifierN() {
    let nombre = prompt('Ecrivez un nombre entier.');
    if (!isNaN(nombre)) {
        multiTable(nombre);
    }
    else {
        while (isNaN(nombre) || nombre%1!=0)
            nombre = prompt("Ce n'est pas un nombre entier. Réesayer!");
        multiTable(nombre);
    }
}

function autoMultiTable1_10() {
    if (!auto_table) {
        for (let i = 1; i <= 10; i++) {
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            let p = document.createElement("p");
            p.innerText = i;
            p.setAttribute('class', 'header')
            th.appendChild(p);
            tr.appendChild(th);
            for (let j = 1; j <= 10; j++) {
                let td = document.createElement("td");
                let p = document.createElement("p");
                p.innerText = i * j;
                p.setAttribute('class', 'body');
                td.appendChild(p);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
            tr.setAttribute('id', 'trow');
            auto_table = true;
        }
    }
}

function resetToNull() {
    while (document.getElementById('trow') != null) {
        document.getElementById('trow').remove();
    }
    auto_table = false;
}