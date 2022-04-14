//VARIAVEL PARA PUXAR O ELEMENTO CANVAS DO HTML PARA O JS
const canvas = document.querySelector('canvas');

//VARIAVEL QUE "MANIPULO" A DIMENSÃO DO JOGO
const c = canvas.getContext('2d');

//SETANDO A ALTURA E A LARGURA DO CANVAS
canvas.width = 1024;
canvas.height = 576;

//PESQUISAR MAIS A FUNDO PARA VÊ PARA QUE SERVE ESSA FUNÇÃO "fillRect"
c.fillRect(0, 0, canvas.width, canvas.height);

//CRIANDO UMA CLASSE PARA CONSTRUIR O JOGADOR
class Sprite{
    constructor(position)//POSIÇÃO ONDE O PLAYER VAI ESTAR LOCALIZADO
    {
        this.position = position
    }
    draw()
    {
       c.fillStyle = 'red'//COR DO PLAYER 
       c.fillRect(this.position.x, this.position.y, 50, 150)//SETANDO A POSIÇÃO ONDE O PLAYER ESTÁ LOCALIZADO 
    }
}

//VARIAVEL PARA O JOGADOR
const player = new Sprite({
    x: 0,
    y: 0
})

//CHAMANDO CLASS COM O METODO "draw"
player.draw();
console.log("POSIÇÃO DO JOGADOR/PLAYER",player);