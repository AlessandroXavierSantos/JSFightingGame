//VARIAVEL PARA PUXAR O ELEMENTO CANVAS DO HTML PARA O JS
const canvas = document.querySelector('canvas');

//VARIAVEL QUE "MANIPULO" A DIMENSÃO DO JOGO
const c = canvas.getContext('2d');

//SETANDO A ALTURA E A LARGURA DO CANVAS
canvas.width = 1024;
canvas.height = 576;

//PESQUISAR MAIS A FUNDO PARA VÊ PARA QUE SERVE ESSA FUNÇÃO "fillRect"
c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2
//CRIANDO UMA CLASSE PARA CONSTRUIR O JOGADOR
class Sprite{
    constructor({position, velocity}){//POSIÇÃO ONDE O PLAYER VAI ESTAR LOCALIZADO
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    draw(){
       c.fillStyle = 'red'//COR DO PLAYER 
       c.fillRect(this.position.x, this.position.y, 50, this.height)//SETANDO A POSIÇÃO ONDE O PLAYER ESTÁ LOCALIZADO 
    }

    uptade(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        //TOMADA DE DECISÃO ONDE QUANDO A SOMA DA POSIÇÃO DO PERSONAGEM + O TAMANHO  + A VELOCIDADE
        //FOR MAIOR OU IGUAL AO TAMANHO TOTAL DO CANVAS ELE PARA DE CAIR, OU SEJA, ELE PARA NO BOTTOM DO CANVAS
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        } else this.velocity.y += gravity   
    }
}

//VARIAVEL PARA O JOGADOR
const player = new Sprite({
    position: {
    x: 0,
    y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
}) 

//VARIAVEL PARA O INIMIGO
const enemy = new Sprite({
    position: {
    x: 400,
    y: 100
    },
    velocity: {
        x: 0,
        y:0
    }
})

console.log(player)
/*CHAMAMOS O METODO draw DENTRO DA FUNÇÃO animate(), ONDE O METODO draw ESTÁ DENTRO DO METODO UPTADE*/
//FUNÇÃO PARA A ANIMAÇÃO
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.uptade()
    enemy.uptade()
}
//CHAMANDO A FUNÇÃO animate()
animate()

window.addEventListener('keydow', (event)=> {
    switch(event.key){
        case 'd':
            player.velocity.x = 1
        break; 
    }
    console.log(event.key);
})
