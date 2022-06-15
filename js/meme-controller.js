var gCanvas
var gCtx
var gCurrImg


var gMeme = {
    selectedImg: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'center',
            color: 'red'
        }
    ]
}

function renderMeme(img) {
    gCurrImg = img
    renderEditor()
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    renderCanvas(img)
    renderImg(img)
}


function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    console.log(gCtx.width)
}



function renderEditor() {
    var strHtml = ""
    strHtml += `    <canvas>
    </canvas>
    <div class="edit-container">
        <input type="text" onkeyup="renderText(this)">
        <div class="line-container">
            <button>+</button>
            <button>-</button>
            <button>?</button>
        </div>
        <div class="text-container">
            <button onclick="changeTextSize(this)" class="plus-btn">+</button>
            <button onclick="changeTextSize(this)" class="minus-btn">-</button>
            <button onclick="changeTextAlignment(this)">&#x2192;</button>
            <button onclick="changeTextAlignment(this)">&#x2190;</button>
            <button onclick="changeTextAlignment(this)">center</button>
            <select name="fonts" id="">
                <option value="impact">impact</option>
            </select>


        </div>
        <div class="emoji-container">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </div>
        <div class="down-container">
            <button>1</button>
            <button>2</button>
        </div>
    </div>`;
    document.querySelector('.container').innerHTML = strHtml

}

function renderCanvas() {
    gCtx.fillStyle = "transparent"
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    renderImg(gCurrImg)
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
}


function renderText(text) {
    renderCanvas()
    setLineTxt(text.value)
}



function getCtx() {
    return gCtx
}
function setCtx(ctx) {
    gCtx = ctx
}

function getMeme() {
    return gMeme
}

