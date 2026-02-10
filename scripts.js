class Parquimetro {
    //Propriedade
    #valorInserido;
    constructor() {
        this.#valorInserido = 0;
    }
    inserirValor(valor) {
        this.#valorInserido = valor;
    }
    calcularTempo() {
        if (this.#valorInserido < 1) {
            return {
                mensagem: "Valor insuficiente!"
            };
        }
        if (this.#valorInserido >= 3) {
            return {
                tempo: 120,
                troco: (this.#valorInserido - 3).toFixed(2)
            };
        }
        if (this.#valorInserido >= 1.75) {
            return {
                tempo: 60,
                troco: (this.#valorInserido - 1.75).toFixed(2)
            };
        }
        return {
            tempo: 30,
            troco: (this.#valorInserido - 1).toFixed(2)
        };
    }
}

class Terminalparquimetro {
    constructor(parquimetro) {
        this.parquimetro = parquimetro;
    }
    calcular() {
        const valor = parseFloat(document.getElementById("valor").value);
        this.parquimetro.inserirValor(valor);
        const resultado = this.parquimetro.calcularTempo();
        if (resultado.mensagem) {
            this.mostrarResultado(resultado.mensagem);
        } else {
            this.mostrarResultado(`Tempo: ${resultado.tempo} minutos, Troco: R$ ${resultado.troco}`);
        };
    }
    mostrarResultado(texto) {
        document.getElementById("resultado").textContent = texto;
        document.getElementById("valor").value = "";
    }
}

const parquimetro = new Parquimetro();
const terminal = new Terminalparquimetro(parquimetro);