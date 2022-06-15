var gNumOfImages = 18
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] }
];

renderGallery()



function renderGallery() {
    var strHtml = `<div class="gallery">`
    for (var i = 0; i < gImgs.length; i++) {
        strHtml += `<img src="/styles/${gImgs[i].url}" onclick ="renderMeme(this)">`
    }
    strHtml += `</div>`
    document.querySelector('.container').innerHTML = strHtml
}

function getImageById(id) {
    return gImgs[id + 1].url
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    addResizeListener()
}

function addResizeListener() {
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
    })
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}


