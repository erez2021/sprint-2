'use strict'

var elText = document.getElementById('canvas-text')

function init() {
    gElCanvas = document.getElementById('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderImages()
}




function renderImages() {
    var images = gImgs
    var strHtml = images.map(function (image) {
        return `<div class="card"> <img src="/meme-imgs/${image.id}.jpg" onclick="galImgClicked(${image.id})"></div>`
    })
    var elImages = document.querySelector('.grid-container')
    elImages.innerHTML = strHtml.join('')


}

function galImgClicked(id) {
    var hideGal = document.querySelector('.grid-container')
    hideGal.style.display = 'none'
    var showMemPage = document.querySelector('.meme-container')
    showMemPage.style.display = 'block'
    drawImg2id(id)
}


function drawImg2id(id) {
    const img = new Image()
    img.src = getImgById(id).url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function onTextChange(event) {
    
    elText.innerText = event.target.value;
    elText.style.fontSize = 2 +'rem' 
    elText.style.color= 'white' 
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
    const {
        offsetX,
        offsetY
    } = ev
    drawText('HELLO', offsetX, offsetY)
}

// var diff = '2px'
function onIncreaseText() {
    console.log('yes')
    elText.style.fontSize += 2+'px'
}

function onAlignLeft() {
    elText.style.marginLeft = 0+'rem'
}

function onAlignRight() {
    elText.style.marginLeft = 18+'rem'
}

function onCenterText() {
    elText.style.marginLeft = 10+'rem'
}

function onDeleteText() {
 var elPlaceholder = document.querySelector('.input')
 elPlaceholder.value = ''
    var elDelete = document.querySelector('.canvas-text')
    elDelete.style.display = 'none'
    if (elPlaceholder.value === '') elDelete.style.display = 'block' 
}
