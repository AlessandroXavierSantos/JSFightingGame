//*Variavel que já é construida como uma imagem
const sprite = new Image();
//*Puxando as imagens para a variavel
sprite.src = './sprites.png';

//*Variaveis que puxam o "canvas" do HTML e define qual a dimensão dele
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

//*Variavel objeto armazenando todos os dados do flappy. Mais pratico de usar doque ficar
//*colocando um a um na função loop()
const flappy = {
    spriteX: 0, //*Posição dentro do arquivo em si
    spriteY: 0, //*Posição dentro do arquivo em si
    largura:33, //*Tamanho do recorte da imagem
    altura:24, //*Tamanho do recorte imagem
    x: 10, //*Posição da imagem dentro do canvas (horizontal/deitado)
    y: 50, //*Posição da imagem dentro do canvas (vertical/pra cima)
    velocity: 0,
    gravity: 0.25,
    atualiza(){
        flappy.velocity += flappy.gravity,
        flappy.y += flappy.velocity
    },
    desenha(){ //*?Função para criar o nosso flappy
        contexto.drawImage(
            sprite,
            flappy.spriteX, flappy.spriteY,
            flappy.largura, flappy.altura,
            flappy.x, flappy.y,
            flappy.largura, flappy.altura
        );
    }
};

const planoDeFundo = {
    spriteX:390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height)
        contexto.drawImage(
            sprite,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura
        );
        contexto.drawImage(
            sprite,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura
        );
    },
};

const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha(){
        contexto.drawImage(
            sprite,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura
        );
        contexto.drawImage(
            sprite,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura
        );
    }
};

const telaInicio = {
    spriteX: 134,
    spriteY: 0,
    largura:174,
    altura: 152,
    x: (canvas.width / 2) - 174 / 2,
    y: 50,
    desenha(){
        contexto.drawImage(
            sprite,
            telaInicio.spriteX, telaInicio.spriteY,
            telaInicio.largura, telaInicio.altura,
            telaInicio.x, telaInicio.y,
            telaInicio.largura, telaInicio.altura
        );
    }
}


//*?Função para ficar reecriando o flappy, famoso FPS
function loop(){
    flappy.atualiza();
    planoDeFundo.desenha();
    chao.desenha();
    flappy.desenha();
    telaInicio.desenha();
    requestAnimationFrame(loop);
}
//*Chamando a função loop()
loop();