'use strict';

const STORAGE_KEY = 'memesDB'
var gElCanvas;
var gCtx;
var gLines;
var gStartPos;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


var gKeywords = {
	funny: 12,
	pet: 2,
	baby: 4,
};

var gImgs = [{
		id: 1,
		url: 'meme-imgs/1.jpg',
		keywords: 'funny',
	},
	{
		id: 2,
		url: 'meme-imgs/2.jpg',
		keywords: 'pet',
	},
	{
		id: 3,
		url: 'meme-imgs/3.jpg',
		keywords: 'baby',
	},
	{
		id: 4,
		url: 'meme-imgs/4.jpg',
		keywords: 'pet',
	},
	{
		id: 5,
		url: 'meme-imgs/5.jpg',
		keywords: 'baby',
	},
	{
		id: 6,
		url: 'meme-imgs/6.jpg',
		keywords: 'funny',
	},
	{
		id: 7,
		url: 'meme-imgs/7.jpg',
		keywords: 'baby',
	},
	{
		id: 8,
		url: 'meme-imgs/8.jpg',
		keywords: 'funny',
	},
	{
		id: 9,
		url: 'meme-imgs/9.jpg',
		keywords: 'baby',
	},
	{
		id: 10,
		url: 'meme-imgs/10.jpg',
		keywords: 'funny',
	},
	{
		id: 11,
		url: 'meme-imgs/11.jpg',
		keywords: 'funny',
	},
	{
		id: 12,
		url: 'meme-imgs/12.jpg',
		keywords: 'funny',
	},
	{
		id: 13,
		url: 'meme-imgs/13.jpg',
		keywords: 'funny',
	},
	{
		id: 14,
		url: 'meme-imgs/14.jpg',
		keywords: 'funny',
	},
	{
		id: 15,
		url: 'meme-imgs/15.jpg',
		keywords: 'funny',
	},
	{
		id: 16,
		url: 'meme-imgs/16.jpg',
		keywords: 'funny',
	},
	{
		id: 17,
		url: 'meme-imgs/17.jpg',
		keywords: 'funny',
	},
	{
		id: 18,
		url: 'meme-imgs/18.jpg',
		keywords: 'funny',
	},
];

var gMeme = {
	selectedImgId: 5,
	selectedLineIdx: 0,
	lines: [{
		pos: {
			x: 100,
			y: 100
		},
		txt: 'Good Day!',
		size: 30,
		y: 100,
		align: 'center',
		color: 'red',
		font: 'normal',
		isDragging: false
	}, ],
};

function getLine() {
gLines = gMeme.lines[gMeme.selectedLineIdx]
return gLines
}




function deleteLine() {
	gMeme.lines.splice(gMeme.selectedLineIdx, 1);
	// gMeme.selectedLineIdx = 0;
	renderCanvas(gMeme);
}

function toggleLineIndex() {
	var elArrow = document.getElementById('arrow')
	if (gMeme.selectedLineIdx === 0) {
		gMeme.selectedLineIdx = 1
		elArrow.classList.add('arrow-down')
	} else {
		gMeme.selectedLineIdx = 0;	
		elArrow.classList.remove('arrow-down')
		elArrow.classList.add('arrow')
	}
	var elPlaceholder = document.querySelector('.input');
	elPlaceholder.value = '';
}

function toggleFont() {
	var toggleFont = gMeme.lines[gMeme.selectedLineIdx].font

	if (toggleFont === 'normal') {
		toggleFont = 'bold'
	} else {
		toggleFont = 'normal'
	}
	updateLine(toggleFont, 'font')
}

function updateImage(id) {
	gMeme.selectedImgId = id;
	renderCanvas(gMeme);
}


function updateLine(value, field) {
	var line = gMeme.lines[gMeme.selectedLineIdx];
	line[field] = value;

	renderCanvas(gMeme);
}

function renderCanvas(memeObject) {
	const img = new Image();
	img.src = getImgById(memeObject.selectedImgId).url;
	img.onload = () => {
		gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
		memeObject.lines.forEach(function (line) {
			drawText(line.txt, line.size, line.align, line.color, line.font, line.y);
		});
	};
}

function drawText(text, size, align, color, font, y) {

	gCtx.lineWidth = 2;
	gCtx.strokeStyle = color;
	gCtx.fillStyle = 'white';
	gCtx.font = `${font} ${size}px Arial`;
	gCtx.textAlign = 'center';
	var x;

	if (align === 'left') {
		x = 100;
	} else if (align === 'center') {
		x = 250;
	} else if (align === 'right') {
		x = 350;
	}
	gCtx.fillText(text, x, y);
	gCtx.strokeText(text, x, y);
}

function drawImage(id) {
	const img = new Image();
	img.src = getImgById(id).url;
	img.onload = () => {
		gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
	};
}

function createNewLine() {
	gMeme.lines.push({
		pos: {
			x: gElCanvas.width / 2,
			y: gElCanvas.height / 2
		},
		txt: 'Hello!',
		size: 30,
		y: gMeme.lines.length >= 1 && gMeme.lines[0].y !== 400 ? 400 : 100,
		align: 'center',
		color: 'red',
		font: 'normal',
		isDragging: false
	});
	gMeme.selectedLineIdx = gMeme.lines.length - 1;
	renderCanvas(gMeme);
}

function getImgById(id) {
	var img = gImgs.find(img => img.id === id);
	gMeme.selectedImgId = img.id;
	return img;
}

function saveMemeToStorage(ev) {
	ev.preventDefault()
	saveToStorage(STORAGE_KEY, gMeme);
	alert('saved to local storage')
}

function loadMemeFromStorage() {
	alert('Loading from local storage - not active')
	loadFromStorage(STORAGE_KEY)

}


function addListeners() {
	addMouseListeners()
	addTouchListeners()
	renderCanvas(gMeme)
}

function addMouseListeners() {
	gElCanvas.addEventListener('mousemove', onMove)

	gElCanvas.addEventListener('mousedown', onDown)

	gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)

    gElCanvas.addEventListener('touchstart', onDown)

    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
	const pos = getEvPos(ev)
	if (!isLineClicked(pos)) return
	console.log('yes')

	getLine().isDragging = true
	renderCanvas(gMeme)
	gStartPos = pos
	document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
	getLine()
	if (gLines.isDragging) {
		
		const pos = getEvPos(ev)
		const dx = pos.x - gStartPos.x
		const dy = pos.y - gStartPos.y

		gLines.pos.x += dx
		gLines.pos.y += dy
		gStartPos = pos
		renderCanvas(gMeme)

	}
}

function onUp() {
	getLine().isDragging = false
	// document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function isLineClicked(clickedPos) {
	const {
		pos
	} = getLine()
	const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
	return distance <= getLine().size

}



