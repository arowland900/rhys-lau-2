// var iframe = document.createElement("iframe");
// iframe.setAttribute('id', "ifrm1");
// iframe.setAttribute('src', 'files/IntakeSheet.pdf'); // change the URL
// iframe.setAttribute('width', '100%');
// iframe.setAttribute('height', '500');
// iframe.setAttribute('frameBorder', '0');
// iframe.setAttribute('scrolling', 'no');
// iframe.setAttribute('onload' ,"setIframeHeight(this.id)");
// document.body.appendChild(iframe);
let idx = 0
const next = document.getElementById('next')
const c1 = document.querySelector(`.c1`)
const c2 = document.querySelector(`.c2`)
const c3 = document.querySelector(`.c3`)
const c4 = document.querySelector(`.c4`)
const c5 = document.querySelector(`.c5`)
const c6 = document.querySelector(`.c6`)
let arr = [c1, c2, c3,c4,c5,c6]

next.addEventListener('click', function (e) {
    for(let i = 0; i < arr.length; i++){
        if(i == idx){
            document.querySelector(`.c${i+1}`).style.display = 'block'
        } else {
            document.querySelector(`.c${i+1}`).style.display = 'none'
        }
    }
    idx = (idx + 1) % 6
})