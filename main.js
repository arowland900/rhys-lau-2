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
const container1 = document.querySelector(`.c1`)
const container2 = document.querySelector(`.c2`)
const container3 = document.querySelector(`.c3`)
const container4 = document.querySelector(`.c4`)
const container5 = document.querySelector(`.c5`)
const container6 = document.querySelector(`.c6`)
let arr = [container1, container2, container3,container4,container5,container6]

next.addEventListener('click', function (e) {
    for(let i = 0; i < arr.length; i++){
        if(i == idx){
            document.querySelector(`.c${i+1}`).style.display = 'block'
        } else {
            document.querySelector(`.c${i+1}`).style.display = 'none'
        }
    }
    idx = (idx + 1) % 6
    // if (!idx) {
    //     container1.style.display = 'none'
    //     container2.style.display = 'block'
    //     idx += 1
    // } else {
    //     container1.style.display = 'block'
    //     container2.style.display = 'none'
    //     idx -= 1 
    // }
})