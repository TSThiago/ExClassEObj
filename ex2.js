let arrayLivros = []

class Livro{
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade
}

class Biblioteca{
    Nome
    Endereco
    Telefone

    BuscarLivro(livroParametro){
        // let livro = arrayLivros.filter(x => x == livroParametro)
        // console.log(livro)
        arrayLivros.forEach((x,index) => {
            if(x.Titulo == livroParametro && x.Disponibilidade == true){
                    console.log ("Titulo: " +x.Titulo+ "\nAutor: " +x.Autor+ "\nEditora: " +x.Editora+ 
                    "\nAno de Publicação: " +x.AnoDePublicacao+ "\nDisponibilidade: Disponível" ) 
            }else if(x.Titulo == livroParametro && x.Disponibilidade == false){
                console.log ("Titulo: " +x.Titulo+ "\nAutor: " +x.Autor+ "\nEditora: " +x.Editora+ 
                "\nAno de Publicação: " +x.AnoDePublicacao+ "\nDisponibilidade: X" )  
            }
        })
    }

    EmprestarLivro(livroParametro){
        let emprestimo = false
        arrayLivros.forEach(x => {
            if(x.Titulo == livroParametro && x.Disponibilidade == true){
                    x.Disponibilidade = false
                    console.log("Empréstimo efetuado.")
                    emprestimo = true 
            }
        })
        return emprestimo
    }

    DevolverLivro(livroParametro){
        arrayLivros.forEach(x => {
            if(x.Titulo == livroParametro && x.Disponibilidade == false){
                    x.Disponibilidade = true
                    console.log("Devolução efetuada.")
            }
        })
    }
}
let biblioteca = new Biblioteca;
biblioteca.Nome = "Biblioteca A"
biblioteca.Endereco = "SP"
biblioteca.Telefone = "1111-1111"


let livroUm = new Livro;
livroUm.Titulo = "Livro A"
livroUm.Autor = "Luiz"
livroUm.Editora = "Editora A"
livroUm.AnoDePublicacao = 2008
livroUm.Disponibilidade = true

let livroDois = new Livro;
livroDois.Titulo = "Livro B"
livroDois.Autor = "Anderson"
livroDois.Editora = "Editora B"
livroDois.AnoDePublicacao = 2012
livroDois.Disponibilidade = false

let livroTres = new Livro;
livroTres.Titulo = "Livro C"
livroTres.Autor = "Shoiti"
livroTres.Editora = "Editora C"
livroTres.AnoDePublicacao = 2005
livroTres.Disponibilidade = false

arrayLivros.push(livroUm,livroDois,livroTres)

biblioteca.BuscarLivro("Livro B")
// biblioteca.EmprestarLivro("Livro A")
biblioteca.DevolverLivro("Livro B")