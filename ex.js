// Parte Carro
class Carro{
    equipe
    potencia
    velMax
    aceleracao

    CalcularTempo(distanciaParametro){
        let resultado = distanciaParametro / (this.velMax / this.aceleracao)
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

// Parte Corrida

class Corrida{
    nome
    tipo
    distancia
    vencedor

    DefinirVencedor(){
        let ganhador = Infinity
        carros.forEach((x,index) => {
            if(x.CalcularTempo(this.distancia) < ganhador){
                ganhador = x.CalcularTempo(this.distancia)
                this.vencedor = x.equipe
            }
        })
    }

    MostrarVencedor(){
        alert(this.vencedor)
    }
}

let inter = new Corrida;
inter.nome = "Interlagos"
inter.tipo = "Fórmula 1"
inter.distancia = 4300
inter.DefinirVencedor()