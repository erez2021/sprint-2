'use strict'

var gElCanvas;
var gCtx;

var gKeywords = {'funny': 12,'pet': 2, 'baby' :4}

var gImgs = [
{id: 1, url: '/meme-imgs/1.jpg', keywords: ['funny']},
{id: 2, url: '/meme-imgs/2.jpg', keywords: ['pet']},
{id: 3, url: '/meme-imgs/3.jpg', keywords: ['baby']},
{id: 4, url: '/meme-imgs/4.jpg', keywords: ['pet']},
{id: 5, url: '/meme-imgs/5.jpg', keywords: ['baby']},
{id: 6, url: '/meme-imgs/6.jpg', keywords: ['funny']},
{id: 7, url: '/meme-imgs/7.jpg', keywords: ['baby']},
{id: 8, url: '/meme-imgs/8.jpg', keywords: ['funny']},
{id: 9, url: '/meme-imgs/9.jpg', keywords: ['baby']},
{id: 10, url: '/meme-imgs/10.jpg', keywords: ['funny']},
{id: 11, url: '/meme-imgs/11.jpg', keywords: ['funny']},
{id: 12,url: '/meme-imgs/12.jpg', keywords: ['funny']},
{id: 13, url: '/meme-imgs/13.jpg', keywords: ['funny']},
{id: 14, url: '/meme-imgs/14.jpg', keywords: ['funny']},
{id: 15, url: '/meme-imgs/15.jpg', keywords: ['funny']},
{id: 16, url: '/meme-imgs/16.jpg', keywords: ['funny']},
{id: 17, url: '/meme-imgs/17.jpg', keywords: ['funny']},
{id: 18, url: '/meme-imgs/18.jpg', keywords: ['funny']},
]

var gMeme = {
 selectedImgId: 5,
 selectedLineIdx: 0,
 lines: [
 {
 txt: 'I never eat Falafel',
 size: 20,
 align: 'left',
 color: 'red'
 }
 ]
}

function getImgById () {
    var img = gImgs.find(img => {
        if ( gMeme.selectedImgId === img.id)
        console.log(img)
    })
    return img
}
