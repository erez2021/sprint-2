'use strict';

// importent note:  all this time i was writing on divs,
// and the buttons and functions are related to it.
// after I was speeking with tal at 17:00 , he told me that it can't be printed, so I need to fix it.
// I have made some changes but it's still working on divs.
// hope to fix it till suterday...

// 13/2 - mission completed!

var elText = document.getElementById('canvas-text');

function init() {
	gElCanvas = document.getElementById('canvas');
	gCtx = gElCanvas.getContext('2d');
	addMouseListeners()
	renderImages(gImgs);
}

function onDownload() {
	var src = gElCanvas.toDataURL('image/png');
	console.log('src', src);

	var a = document.createElement('a');
	a.href = src;
	a.setAttribute('download', 'canvas');
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function renderImages(images) {
	
	var strHtml = images.map(function (image) {
		return `<div class="card"> <img src="meme-imgs/${image.id}.jpg" onclick="galImgClicked(${image.id})"></div>`;
	});
	var elImages = document.querySelector('.grid-container');
	elImages.innerHTML = strHtml.join('');
}

function galImgClicked(id) {
	var hideGal = document.querySelector('.grid-container');
	hideGal.style.display = 'none';
	var showMemPage = document.querySelector('.meme-container');
	showMemPage.style.display = 'block';
	var hideSearch = document.querySelector('.search-section')
	hideSearch.style.display = 'none';
	updateImage(id);
}

function onTextChange(event) {
	var txt = event.target.value;
	updateLine(txt, 'txt');
	
}


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

	updateLine('left', 'align');
}

function onAlignRight() {
	updateLine('right', 'align');
}

function onCenterText() {
	updateLine('center', 'align');
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
	toggleFont()
}

function toggleMenu() {
	document.body.classList.toggle('open-menu');
}

function onChangeColor(ev) {
	ev.preventDefault();
	var color = document.querySelector('[name=color]').value;
	updateLine(color, 'color');
}

function onAddNewLine() {
	var elPlaceholder = document.querySelector('.input');
	elPlaceholder.value = '';
	
	createNewLine();
}

function shareMeme() {
	alert('button not active - mark zuckerberg is not paying me..')
}

function openModal() {
	var elModal = document.querySelector('.modal')
	elModal.style.display = 'block'
}

function closeModal() {
	var elModal = document.querySelector('.modal')
	elModal.style.display = 'none'
}

function backToGallery() {
	var showGal = document.querySelector('.grid-container');
	showGal.style.display = 'grid';
	var hideMemPage = document.querySelector('.meme-container');
	hideMemPage.style.display = 'none';
	var showSearch = document.querySelector('.search-section')
	showSearch.style.display = 'block';
	renderImages(gImgs)
}

function filterImgByKeyword(keyword) {
	var images = gImgs.filter((img) => {
		return img.keywords === keyword
	})
	renderImages(images)
}

function searchImages (ev) {
	ev.preventDefault()
	var elKeyword = document.querySelector('[name=search2]').value	
	var images = gImgs.filter((img) => {
		return img.keywords === elKeyword
	})	
	renderImages(images)
}




