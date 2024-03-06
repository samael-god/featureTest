let px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
let container = document.querySelector('.grid');

window.addEventListener("resize", (event) => {
    let newPx= window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
    console.log(px_ratio, newPx);
    if(newPx > px_ratio) {
        container.style.gap = `${1 / newPx}px`;
        px_ratio = newPx;
    } else if(newPx < px_ratio){
        container.style.gap = `${1 * newPx}px`;
        px_ratio = newPx;
    }
});

