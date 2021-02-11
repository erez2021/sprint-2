'use strict'

var gElCanvas;
var gCtx;

var gKeywords = {
    'funny': 12,
    'pet': 2,
    'baby': 4
}

var gImgs = [{
        id: 1,
        url: '/meme-imgs/1.jpg',
        keywords: ['funny']
    },
    {
        id: 2,
        url: '/meme-imgs/2.jpg',
        keywords: ['pet']
    },
    {
        id: 3,
        url: '/meme-imgs/3.jpg',
        keywords: ['baby']
    },
    {
        id: 4,
        url: '/meme-imgs/4.jpg',
        keywords: ['pet']
    },
    {
        id: 5,
        url: '/meme-imgs/5.jpg',
        keywords: ['baby']
    },
    {
        id: 6,
        url: '/meme-imgs/6.jpg',
        keywords: ['funny']
    },
    {
        id: 7,
        url: '/meme-imgs/7.jpg',
        keywords: ['baby']
    },
    {
        id: 8,
        url: '/meme-imgs/8.jpg',
        keywords: ['funny']
    },
    {
        id: 9,
        url: '/meme-imgs/9.jpg',
        keywords: ['baby']
    },
    {
        id: 10,
        url: '/meme-imgs/10.jpg',
        keywords: ['funny']
    },
    {
        id: 11,
        url: '/meme-imgs/11.jpg',
        keywords: ['funny']
    },
    {
        id: 12,
        url: '/meme-imgs/12.jpg',
        keywords: ['funny']
    },
    {
        id: 13,
        url: '/meme-imgs/13.jpg',
        keywords: ['funny']
    },
    {
        id: 14,
        url: '/meme-imgs/14.jpg',
        keywords: ['funny']
    },
    {
        id: 15,
        url: '/meme-imgs/15.jpg',
        keywords: ['funny']
    },
    {
        id: 16,
        url: '/meme-imgs/16.jpg',
        keywords: ['funny']
    },
    {
        id: 17,
        url: '/meme-imgs/17.jpg',
        keywords: ['funny']
    },
    {
        id: 18,
        url: '/meme-imgs/18.jpg',
        keywords: ['funny']
    },
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: 'I never eat Falafel',
            size: 20,
            align: 'right',
            color: 'red'
        },

    ]
}

function updateImage(id) {
    gMeme.selectedImgId = id;
    renderCanvas(gMeme)

}

// field -> object key
function updateLine(value, field) {
    var line = gMeme.lines[gMeme.selectedLineIdx]
    line[field] = value

    renderCanvas(gMeme)

}


function renderCanvas(memeObject) {
    console.log('memeObject', memeObject);
    const img = new Image()
    img.src = getImgById(memeObject.selectedImgId).url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        memeObject.lines.forEach(function (line) {
            drawText(line.txt, line.size, line.align, line.color)
        })
    }
}

function drawText(text, size, align, color) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = color
    gCtx.fillStyle = 'white'
    gCtx.font = `${size}px Arial`
    gCtx.textAlign = 'center';
    var x;
    var y = 100;
    if (align === 'left') {
        x = 10
    } else if (align === 'center') {
        x = 200
    } else if (align === 'right') {
        x = 400
    }
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function drawImage(id) {
    const img = new Image()
    img.src = getImgById(id).url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function createNewLine(txt) {
    gMeme.lines.push({
        txt,
        size: 20,
        align: 'left',
        color: 'blue',
    });
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
}

function getImgById(id) {
    var img = gImgs.find(img => img.id === id)
    gMeme.selectedImgId = img.id
    console.log('selectedImgId:', gMeme.selectedImgId)
    return img
}