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

