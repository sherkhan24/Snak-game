

// 4
let speed = 9;
lastscreenTime = 0;
// 9
let snakePosition = [{x : 15, y : 18}]
// 13
let foodPosition = {x : 13, y : 16 }

// 19
let snakeAudio = new Audio('./music/ton1.mp3')
// 24
let scoreTag = document.querySelector('.score');
// 25
let score = 0;
// 11

let snakee = document.querySelector('.snakee')

// 16
let snakeValue = {x : 0, y : 0}
// 2
function gamestart(currentTime){
    // 3
    window.requestAnimationFrame(gamestart)
  
//   5  // console.log(currentTime);
   if(currentTime -lastscreenTime < 1000/speed){
    return;
   }

//  6
   lastscreenTime = currentTime

//    7
   gameEngine()   
}

// 22
function gameOverFunction(snakeOver){
    if(snakeOver[0].x >= 20 || snakeOver[0].x < 0 || snakeOver[0].y >= 20 || snakeOver[0].y < 0){
        return true
    }

// 27
    for (let index = 1; index < snakePosition.length; index++){
        if (snakePosition [index].x === snakePosition[0].x && snakePosition[index].y === snakePosition[0].y){
            return true
        }
    }
}
// 8
function gameEngine(){
// 23
    if(gameOverFunction(snakePosition)){
        alert(`game over`)
    }

// 18
if (snakePosition[0].x === foodPosition.x && snakePosition[0].y === foodPosition.y){
    snakeAudio.play();
// 26
score += 1;
if (score < 10){
    scoreTag.innerHTML = "score" + " 0" + score
}else {
    scoreTag.innerHTML = "score" + score
}

// 18
    let a = 2;
    let b = 18;
    foodPosition = {x : Math.floor(a + (b - a)*Math.random()), y : Math.floor(a + (b -a)*Math.random())}
   
    // 20
    let lastsnakebox = snakePosition[snakePosition.length -1];
    snakePosition.push({x :lastsnakebox.x, y : lastsnakebox.y})

}
// 21
   for (let i = snakePosition.length - 2; i >= 0; i--) {
    snakePosition[i + 1] = { x : snakePosition[i].x, y : snakePosition[i].y }
   }

// 17
 snakePosition[0].x += snakeValue.x;
 snakePosition[0].y += snakeValue.y;

// 12
  snakee.innerHTML = "";

// 10
    snakePosition.forEach( (element , index) => {
        let snake = document.createElement('div');
        snake.setAttribute('class', 'snake');
        
        snake.style.gridRowStart = element.y;
        snake.style.gridColumnStart = element.x;

       snakee.appendChild(snake)

    //    food create 
// 14
    let food = document.createElement('div');
    food.setAttribute('class', 'food');

    food.style.gridRowStart = foodPosition.y;
    food.style.gridColumnStart = foodPosition.x;

    snakee.appendChild(food)

    })
}

// 1
window.requestAnimationFrame(gamestart)


// 15
window.addEventListener('keydown',(event) => {
    if (event.key === "ArrowUp"){
        snakeValue.x = 0;
        snakeValue.y = -1;
     let  ArrowUpAudio = new Audio('./music/titi.mp3')
     ArrowUpAudio.play();
    }else if (event.key === "ArrowRight" ){
        snakeValue.x =  1;
        snakeValue.y = 0;
        let  ArrowRightAudio = new Audio('./music/titi.mp3')
     ArrowRightAudio.play();
    }else if (event.key === "ArrowLeft" ){
        snakeValue.x = -1;
        snakeValue.y = 0;
        let  ArrowLeftAudio = new Audio('./music/titi.mp3')
     ArrowLeftAudio.play();
    }else if (event.key === "ArrowDown" ){
        snakeValue.x =  0;
        snakeValue.y = 1;
        let  ArrowDownAudio = new Audio('./music/titi.mp3')
        ArrowDownAudio.play();
    }
})


let body = document.querySelector('body');

let button = document.querySelector('button');

button.onclick=function(){
    button.classList.toggle('active');
    body.classList.toggle('active');
    body.classList.toggle('body')
    document.style.colour = '#fff';
}