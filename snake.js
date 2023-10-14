//constants.
   //sounds
   let eat=new Audio('eating-sound-effect-36186.mp3');
   let over=new Audio('mixkit-failure-arcade-alert-notification-240.wav');
let directions ={x:0,y:0} 
let snake=[{x:13,y:14}]
let last_frame=0
let speed=10
let food={x:9,y:3}
let score=0;
let a=2;
let b=19;
// let board=document.getElementsByClassName("board");

function e()
{
    console.log("E");
    speed=8
}
function m()
{
    console.log("m");
    speed=11
}
function d()
{
    console.log("h");
    speed=18
}

//functions

function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime-last_frame)/1000<1/speed)
    {
        return;
    }
    last_frame=ctime;
    // console.log(ctime);

    gameEngine();
    
}

function iscolide()
{
    if(snake[0].x >20 || snake[0].x<0 || snake[0].y >20 || snake[0].y <0){
        return true;
    }
    for(var i=1; i<snake.length; i++)
    {
        if(snake[0].x==snake[i].x && snake[0].y==snake[i].y)
        {
            return true;
        }
    }
return false;
}

function gameEngine() {
    if(iscolide())
    {
        over.play();
        alert(`Game over! Your score is ${score}`);
        food={x:9,y:3}
        snake=[{x:13,y:14}]
        directions ={x:0,y:0}
        score=0;  
    }
    else{
        

    // 1>logic
    for(let i=snake.length-2; i>=0; i--)
    {
        snake[i+1]={...snake[i]}    
    }
    snake[0].x+=directions.x;
    snake[0].y+=directions.y;
    // 2>create snake,food
    board.innerHTML="";
    snake.forEach((e,index)=> {
        h=document.createElement("div");
        h.style.gridRowStart=e.y;
        h.style.gridColumnStart=e.x;
        if(index===0) {
        
        h.classList.add("head");
        
        }
        else
        {
        h.classList.add("snake");   
        }
        board.appendChild(h);
        
    });
    f=document.createElement("div");
    f.style.gridRowStart=food.y;
    f.style.gridColumnStart=food.x;
    f.classList.add("food");
    board.appendChild(f);
     

    if(food.x==snake[0].x && food.y==snake[0].y)
    {

        score++;
        // console.log("food")
        snake.unshift({x:snake[0].x+directions.x,y:snake[0].y+directions.y});
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
        eat.play();
        w.innerHTML=score;

        
    }

    }
}




//play
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    // directions = {x: 0, y: 1}
    switch (e.key) {
        case "ArrowUp":
            // console.log("ArrowUp");
            directions.x = 0;
            directions.y = -1;
            break;
 
        case "ArrowDown":
            // console.log("ArrowDown");
            directions.x = 0;
            directions.y = 1;
            break;
 
        case "ArrowLeft":
            // console.log("ArrowLeft");
            directions.x = -1;
            directions.y = 0;
            break;
 
        case "ArrowRight":
            // console.log("ArrowRight");
            directions.x = 1;
            directions.y = 0;
            break;
        default:
            break;
    }
})