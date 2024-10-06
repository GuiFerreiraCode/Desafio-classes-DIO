class hero {
    constructor (nome, idade, tipo, atacar){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.atacar = atacar;
    }
    retornar (){
        console.log(`O ${this.nome} é um ${this.tipo} que ataca usando ${this.atacar}`)
    }
}
let hero1 = new hero ("Robervaldo", 25, "mago", "magia");
let hero2 = new hero ("Jurandir", 28, "guerreiro", "espada");
let hero3 = new hero ("Lee", 21, "monge", "artes marciais");
let hero4 = new hero ("TakaKara NoMuro", 23, "ninja", "shuriken");

hero1.retornar()
hero2.retornar()
hero3.retornar()
hero4.retornar()