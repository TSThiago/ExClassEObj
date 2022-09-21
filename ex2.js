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
}

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

