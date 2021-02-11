'use strict'

// importent note:  all this time i was writing on divs,
// and the buttons and functions are related to it.
// after I was speeking with tal at 17:00 , he told me that it can't be printed, so I need to fix it.
// I have made some changes but it's still working on divs.
// hope to fix it till suterday...


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
    updateImage(id)
}


function onTextChange(event) {
    var txt = event.target.value
    elText.innerText = event.target.value;
    elText.style.fontSize = 2.5 + 'rem'
    elText.style.color = 'white'
    updateLine(txt, 'txt')
    console.log(gMeme)
}



// function draw(ev) {
//     const {
//         offsetX,
//         offsetY
//     } = ev
//     drawText('HELLO', offsetX, offsetY)
// }


function onIncreaseText(increaseFactor) {
    var style = window.getComputedStyle(elText, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    elText.style.fontSize = (currentSize + increaseFactor) + 'px';
}


function onDecreaseText(decreaseFactor) {
    var style = window.getComputedStyle(elText, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    elText.style.fontSize = (currentSize - decreaseFactor) + 'px';
}

function onAlignLeft() {
    var align = gMeme.lines[gMeme.selectedLineIdx].align
    updateLine(align, 'left')
    elText.style.marginLeft = 0 + 'rem'
}

function onAlignRight() {
    var align = gMeme.lines[gMeme.selectedLineIdx].align
    updateLine(align, 'right')
    elText.style.marginLeft = 18 + 'rem'
}

function onCenterText() {
    var align = gMeme.lines[gMeme.selectedLineIdx].align
    updateLine(align, 'center')
    console.log('align:', align)
    elText.style.marginLeft = 10 + 'rem'
}


function onDeleteText() {
    var elPlaceholder = document.querySelector('.input')
    elPlaceholder.value = ''
    var elDelete = document.querySelector('.canvas-text')
    elDelete.style.display = 'none'

}

function onArrowClick() {
    var elLowerText = document.querySelector('.canvas-text.lower')
    elText = elLowerText
}

function onStrokeText() {
    elText.style.fontWeight = 'bold'
}

function toggleMenu() {
    document.body.classList.toggle('open-menu')
}

function onChangeColor(ev) {
    ev.preventDefault()
    var color = document.querySelector('[name=color]').value
    elText.style.color = color

    updateLine(color, 'color')
}

function addNewLine() {
    var elMiddleInput = document.querySelector('.canvas-text.middle')
    elMiddleInput.style.display = 'block'
    var elMiddleText = document.querySelector('.canvas-text.middle')
    elText = elMiddleText
}