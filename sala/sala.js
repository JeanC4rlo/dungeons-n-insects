class Canvas {
    constructor(id, largura, altura) {
        this.canvas = document.querySelector(id) || this.criarCanvas(id);
        this.canvas.width = largura;
        this.canvas.height = altura;
        this.context = this.canvas.getContext("2d")
    }

    criarCanvas(id) {
        const canvas = document.createElement("canvas");
        canvas.id = id;

        document.body.appendChild(canvas);

        return canvas;
    }

    limpar() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// Leitura: novo jogador em..., na posição (x, y), de dimensões (b x h), cor ... e velocidade ...
class Jogador {
    constructor(canvas, x, y, largura, altura, cor, velocidade) {
        this.canvas = canvas;
        this.ctx = this.canvas.context;

        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;

        this.cor = cor;
        this.velocidade = velocidade;
    }

    desenhar() {
        this.ctx.fillStyle = this.cor;
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }

    mover(direcao) {
        if(direcao == "cima") this.y -= this.velocidade;
        if(direcao == "baixo") this.y += this.velocidade;
        if(direcao == "esquerda") this.x -= this.velocidade;
        if(direcao == "direita") this.x += this.velocidade;
    }
}

class Jogo {
    constructor() {
        this.area = new Canvas("area-jogo", 200, 200);
        this.jogador = new Jogador(this.area, 10, 10, 10, 10, "red", 5);
        this.rodando = true;
    }

    atualizar = () => {
        if(!this.rodando) return;

        this.area.limpar();
        this.jogador.desenhar();

        requestAnimationFrame(this.atualizar)
    }

    iniciar = () => {
        this.atualizar();

        window.addEventListener("keydown", (e) => {
            let teclaPressionada = e.key;

            switch(teclaPressionada) {
                case "ArrowUp":
                    this.jogador.mover("cima");
                    break;
                case "ArrowDown":
                    this.jogador.mover("baixo");
                    break;
                case "ArrowLeft":
                    this.jogador.mover("esquerda");
                    break;
                case "ArrowRight":
                    this.jogador.mover("direita");
                    break;
            }
        })
    }
}

let jogo = new Jogo();
jogo.iniciar();
