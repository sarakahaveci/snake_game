export const SNAKE_SPEED =1
 const snakeBody = [{x: 11, y:11}]

 export function update(){
     console.log('update snake')
 }

 export function draw (gameBoard){
     snakeBody.forEach(segment => {
         const snakeElement = document.createElement('div')
         snakeElement.style.gridRowStaer = segement.x
         snakeElement.style.gridColumnStaer = segement.y
         gameBoard.appendChild(snakeElement)

     })
 }