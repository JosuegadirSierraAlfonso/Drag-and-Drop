var elmentoArr;
var elmentoArr1;
window.addEventListener('load', init);

function init(){
    var tower2 = document.querySelector('#tower2');
    var tower3 = document.querySelector('#tower3');

    tower3.addEventListener('dragover',dragSobreTower1,false)
    tower3.addEventListener('dragleave',dragExitTower1,false)
    tower3.addEventListener('drop',manejarDrop1,false)

    tower2.addEventListener('dragover',dragSobreTower,false)
    tower2.addEventListener('dragleave',dragExitTower,false)
    tower2.addEventListener('drop',manejarDrop,false)

    var circles = document.getElementsByClassName('disc');
    for(i in circles){
        var circle = circles[i];
        var x = random(0,90);
        var y = random(0,90);
        if(typeof circle.style != "undefined"){
            circle.style.top = y+'%';
            circle.style.left = x+'%';
            circle.addEventListener('dragstart',dragIniciado,false);
            circle.addEventListener('dragend',dragFinalizado,false)
        }
    }
}
function dragIniciado(e){
    this.style.backgroundColor = 'blue';
    elmentoArr = this;
    elmentoArr1 = this;
    var padre = document.createElement('p');
    var clon = this.cloneNode(true);
    padre.appendChild(clon);
    e.dataTransfer.setData('text',padre.innerHTML);
}


function manejarDrop1(e){
    e.preventDefault();
    var datos = e.dataTransfer.getData('text');
    this.innerHTML += datos;
    elmentoArr1.parentNode.removeChild(elmentoArr1);
    this.classList.remove('over');
}
function dragSobreTower1(e){
    e.preventDefault();
    this.classList.add('over');
    return false;
}
function dragExitTower1(e){
    this.classList.remove('over');
}


function manejarDrop(e){
    e.preventDefault();
    var datos = e.dataTransfer.getData('text');
    this.innerHTML += datos;
    elmentoArr.parentNode.removeChild(elmentoArr);
    this.classList.remove('over');
}
function dragSobreTower(e){
    e.preventDefault();
    this.classList.add('over');
    return false;
}
function dragExitTower(e){
    this.classList.remove('over');
}

function dragFinalizado(e){
    this.style.backgroundColor = 'red';
}
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// const towers = document.querySelectorAll('.tower');
// let moves = 0;
// let startTime = 0;
// let endTime = 0;

// towers.forEach(tower => {
//   tower.addEventListener('dragover', (e) => {
//     e.preventDefault();
//   });

//   tower.addEventListener('drop', (e) => {
//     e.preventDefault();

//     const disc = document.querySelector('.selected');

//     if (!disc) {
//       return;
//     }

//     const targetTower = e.target.closest('.tower');
//     const targetDisc = targetTower.querySelector('.disc');

//     if (targetDisc && targetDisc.clientWidth < disc.clientWidth) {
//       return;
//     }

//     targetTower.appendChild(disc);
//     disc.classList.remove('selected');
//     moves++;

//     if (document.getElementById('tower3').childElementCount === 6) {
//       endTime = new Date().getTime();
//       const time = endTime - startTime;
//       alert(`¡Felicidades, has resuelto el juego en ${moves} movimientos y ${time / 1000} segundos!`);
//       submitScore(time);
//     }
//   });
// });

// document.querySelectorAll('.disc').forEach(disc => {
//   disc.addEventListener('dragstart', () => {
//     disc.classList.add('selected');
//   });

//   disc.addEventListener('dragend', () => {
//     disc.classList.remove('selected');
//   });
// });

// document.getElementById('solveBtn').addEventListener('click', () => {
//   moves = 0;
//   startTime = new Date().getTime();
//   solve(6, 'tower1', 'tower3', 'tower2');
// });

// function solve(n, from, to, aux) {
//   if (n === 1) {
//     move(from, to);
//   } else {
//     solve(n - 1, from, aux, to);
//     move(from, to);
//     solve(n - 1, aux, to, from);
//   }
// }

// function move(from, to) {
//     const fromTower = document.getElementById(from);
//     const toTower = document.getElementById(to);
//     const disc = fromTower.querySelector('.disc');
  
//     toTower.appendChild(disc);
//     moves++;
  
//     if (document.getElementById('tower3').childElementCount === 6) {
//       endTime = new Date().getTime();
//       const time = endTime - startTime;
//       alert(`¡Felicidades, has resuelto el juego en ${moves} movimientos y ${time / 1000} segundos!`);
//       submitScore(time);
//     }
//   }