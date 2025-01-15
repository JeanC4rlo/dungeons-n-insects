let mapa = [
    [0.00, 1.00],
    [1.00, 1.00],
]

let canvas = document.querySelector("#canvas");

let salas = [];

function gerarMapa() {
    for(let i = 0; i < mapa.length; i++) {
        for(let j = 0; j < mapa[i].length; j++) {
            if(Math.random() <= mapa[i][j]) {
                let sala = document.createElement('p');
                sala.innerHTML = "Sala";
                sala.classList.add("sala");
                canvas.appendChild(sala);

                salas.push({i: i, j: j});
            }
            else {
                let rocha = document.createElement('p');
                rocha.innerHTML = "Rocha";
                rocha.classList.add("rocha");
                canvas.appendChild(rocha);
            }
        }
    }
}

gerarMapa();