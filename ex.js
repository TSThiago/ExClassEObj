// Parte Carro
class Carro{
    Equipe
    Potencia
    VelMax
    Aceleracao

    CalcularTempo(distanciaParametro){
        let resultado = distanciaParametro / (this.VelMax / this.Aceleracao)
        return resultado
    }
}

let carros = []

let fer = new Carro;
fer.Equipe = "Ferrari"
fer.Potencia = parseInt(500)
fer.VelMax = parseFloat(360)
fer.Aceleracao = parseFloat(3)

let mer = new Carro;
mer.Equipe = "Mercedes"
mer.Potencia = parseInt(480)
mer.VelMax = parseFloat(350)
mer.Aceleracao = parseFloat(4)

let mc = new Carro;
mc.Equipe = "McLaren"
mc.Potencia = parseFloat(530)
mc.VelMax = parseFloat(370)
mc.Aceleracao = parseFloat(2.5)

let red = new Carro;
red.Equipe = "Red Bull"
red.Potencia = parseFloat(580)
red.VelMax = parseFloat(385)
red.Aceleracao = parseFloat(1.6)

carros.push(fer,mer,mc,red)

// Parte Corrida

class Corrida{
    Nome
    Tipo
    Distancia
    Vencedor

    DefinirVencedor(){
        let menorTempo = Infinity
        carros.forEach((x,index) => {
            if(x.CalcularTempo(this.Distancia) < menorTempo){
                menorTempo = x.CalcularTempo(this.Distancia)
                this.Vencedor = x.Equipe
            }
        })
    }

    MostrarVencedor(){
        alert("Vencedor: " +this.Vencedor)
    }
}

let inter = new Corrida;
inter.Nome = "Interlagos"
inter.Tipo = "Fórmula 1"
inter.Distancia = 4300
inter.DefinirVencedor()
inter.MostrarVencedor()