// var iframe = document.createElement("iframe");
// iframe.setAttribute('id', "ifrm1");
// iframe.setAttribute('src', 'files/IntakeSheet.pdf'); // change the URL
// iframe.setAttribute('width', '100%');
// iframe.setAttribute('height', '500');
// iframe.setAttribute('frameBorder', '0');
// iframe.setAttribute('scrolling', 'no');
// iframe.setAttribute('onload' ,"setIframeHeight(this.id)");
// document.body.appendChild(iframe);
let idx = 1
const next = document.getElementById('next')
const container = document.querySelector(`.container${idx}`)
const otherContainer = document.querySelector(`.container${idx+1}`)

next.addEventListener('click', function(e){
    container.style.display = 'none'
    otherContainer.style.display = 'block'
    idx += 1
})