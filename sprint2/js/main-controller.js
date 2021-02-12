'use strict';

// importent note:  all this time i was writing on divs,
// and the buttons and functions are related to it.
// after I was speeking with tal at 17:00 , he told me that it can't be printed, so I need to fix it.
// I have made some changes but it's still working on divs.
// hope to fix it till suterday...

var elText = document.getElementById('canvas-text');

function init() {
	gElCanvas = document.getElementById('canvas');
	gCtx = gElCanvas.getContext('2d');
	renderImages();
}

function download() {
	var src = gElCanvas.toDataURL('image/png'); //canvas so src
	console.log('src', src);

	var a = document.createElement('a');
	a.href = src;
	a.setAttribute('download', 'canvas');
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function renderImages() {
	var images = gImgs;
	var strHtml = images.map(function (image) {
		return `<div class="card"> <img src="/meme-imgs/${image.id}.jpg" onclick="galImgClicked(${image.id})"></div>`;
	});
	var elImages = document.querySelector('.grid-container');
	elImages.innerHTML = strHtml.join('');
}

function galImgClicked(id) {
	var hideGal = document.querySelector('.grid-container');
	hideGal.style.display = 'none';
	var showMemPage = document.querySelector('.meme-container');
	showMemPage.style.display = 'block';
	updateImage(id);
}

function onTextChange(event) {
	var txt = event.target.value;
	updateLine(txt, 'txt');
	console.log(gMeme);
}

// function draw(ev) {
//     const {
//         offsetX,
//         offsetY
//     } = ev
//     drawText('HELLO', offsetX, offsetY)
// }

function onIncreaseText() {
	var size = gMeme.lines[gMeme.selectedLineIdx].size;
	size += 5;
	if (size === 100) return;
	updateLine(size, 'size');
}

function onDecreaseText() {
	var size = gMeme.lines[gMeme.selectedLineIdx].size;
	size += -5;
	if (size === 5) return;
	updateLine(size, 'size');
}

function onAlignLeft() {
	var align = gMeme.lines[gMeme.selectedLineIdx].align;
	align = 'left';
	updateLine(align, 'align');
}

function onAlignRight() {
	var align = gMeme.lines[gMeme.selectedLineIdx].align;
	align = 'right';
	updateLine(align, 'align');
}

function onCenterText() {
	var align = gMeme.lines[gMeme.selectedLineIdx].align;
	align = 'center';
	updateLine(align, 'align');
}

function onDeleteText() {
	var elPlaceholder = document.querySelector('.input');
	elPlaceholder.value = '';
	deleteLine();
}

function onArrowClick() {
	toggleLineIndex();
}

function onStrokeText() {
	var font = gMeme.lines[gMeme.selectedLineIdx].font;
	font = 'bold';
	updateLine(font, 'font');
}

function toggleMenu() {
	document.body.classList.toggle('open-menu');
}

function onChangeColor(ev) {
	ev.preventDefault();
	var color = document.querySelector('[name=color]').value;
	// elText.style.color = color

	updateLine(color, 'color');
}

function addNewLine() {
	createNewLine();
}
