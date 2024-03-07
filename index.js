let container = document.querySelector('.grid');
let cells = document.querySelectorAll('.grid-cell');
let countainerWidth = document.querySelector('.grid').offsetWidth;
let countainerHeight = document.querySelector('.grid').offsetHeight;
let counterX = 0;
let counterY = 0;

window.addEventListener("resize", (event) => {
    countainerWidth = document.querySelector('.grid').offsetWidth;
    countainerHeight = document.querySelector('.grid').offsetHeight;
    changeBg();
});

function changeBg(){
    cells.forEach((cell) => {
        cell.style.backgroundPosition = `-${cell.offsetWidth * counterX}px -${cell.offsetHeight * counterY}px`;
        cell.style.backgroundSize = `${countainerWidth}px ${countainerHeight}px`
        counterX++;
        if (counterX === 10){
            counterX = 0;
            counterY ++;
            if (counterY === 10){
                counterY = 0;
            }
        }
    })
}
changeBg();

function dragHandler(ev){
    localStorage.setItem('position', ev.target.style.backgroundPosition);
}
function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
    ev.preventDefault();
    console.log(localStorage.getItem('position'));
    ev.target.style.backgroundPosition = localStorage.getItem('position');
}

function dragEndHandler(ev){
    // ev.target.style.background = 'red';
}