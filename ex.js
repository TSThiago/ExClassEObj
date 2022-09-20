class Carro{
    equipe
    potencia
    velMax
    aceleracao

    CalcularTempo(distancia){
        let resultado = distancia / (this.velMax / this.aceleracao)
        return resultado
    }
}

let carros = []

let fer = new Carro;
fer.equipe = "Ferrari"
fer.potencia = parseInt(500)
fer.velMax = parseFloat(360)
fer.aceleracao = parseFloat(3)

let mer = new Carro;
mer.equipe = "Mercedes"
mer.potencia = parseInt(480)
mer.velMax = parseFloat(350)
mer.aceleracao = parseFloat(4)

let mc = new Carro;
mc.equipe = "McLaren"
mc.potencia = parseFloat(530)
mc.velMax = parseFloat(370)
mc.aceleracao = parseFloat(2.5)

let red = new Carro;
red.equipe = "Red Bull"
red.potencia = parseFloat(580)
red.velMax = parseFloat(385)
red.aceleracao = parseFloat(1.6)

carros.push(fer,mer,mc,red)