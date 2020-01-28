const next = document.getElementById('next')

const c1 = document.querySelector(`.c1`)
const c2 = document.querySelector(`.c2`)
const c3 = document.querySelector(`.c3`)
const c4 = document.querySelector(`.c4`)
const c5 = document.querySelector(`.c5`)
const c6 = document.querySelector(`.c6`)
const containers = document.querySelectorAll('.container')


let idx = 1
let arr = [c1, c2, c3,c4,c5,c6]

containers.forEach((e,i) => { if(i )e.style.display = 'none' })

for(let j = 0; j < arr.length; j++){
    console.log('hit!')
    hideDisplay()
}



next.addEventListener('click', hideDisplay)

function hideDisplay(e){
    for(let i = 0; i < arr.length; i++){
        console.log("inner hit!")
        i == idx 
        ? document.querySelector(`.c${i+1}`).style.display = 'block'
        : document.querySelector(`.c${i+1}`).style.display = 'none'
    }
    idx = (idx + 1) % 6
}
