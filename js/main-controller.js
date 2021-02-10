'use strict'

function init() {
    gElCanvas = document.getElementById('canvas')
    gCtx = gElCanvas.getContext('2d') 
    drawImg2()
    
}


function renderImage() {

}


function drawImg2() {
    const img = new Image()
    img.src = 'meme-imgs/14.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}


function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function draw(ev) {
    const { offsetX, offsetY } = ev 
            drawText('HELLO', offsetX, offsetY)        
    }

