'use strict'

var gCurrLine = 0

// selectedImgId: 5,
// selectedLineIdx: 0,
// lines: [
//     {
//         txt: '',
//         size: 20,
//         align: 'left',
//         color: 'red'
//     }
// ]
// }

function setLineTxt(text, x = 20) {
    var meme = getMeme()
    meme.lines[gCurrLine].txt = text
    console.log(meme.lines[gCurrLine].size)

    var ctx = getCtx()
    ctx.font = meme.lines[gCurrLine].size + 'px' + ' sans-serif'
    ctx.textAlign = meme.lines[gCurrLine].align
    console.log(meme.lines[gCurrLine].align)
    ctx.strokeText(text, 150, 20)

}



function changeTextSize(elBtn) {
    var meme = getMeme()
    if (elBtn.classList.contains('plus-btn')) {
        meme.lines[gCurrLine].size += 2
    } else meme.lines[gCurrLine].size -= 2
    setLineTxt(meme.lines[gCurrLine].txt, meme.lines[gCurrLine].size)
}

function changeTextAlignment(elBtn) {
    var meme = getMeme()
    var centerPos = 20
    meme.lines[gCurrLine].align = elBtn.name
    setLineTxt(meme.lines[gCurrLine].txt, centerPos)
}