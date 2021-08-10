//console.log("test to connect") - Connected

//Global scope for canvas and animation.
//grab the canvas element by its ID, set the graphics context of the drawing.
//Set the initial size. Update the size to fit the height and width of the window.
//Call resize function as updates are made to window size.
const canvas= document.querySelector("#canvas")
canvas.width = innerWidth
canvas.height = innerHeight
const context = canvas.getContext('2d')
console.log(canvas)
//Set up timer for animation refresh.
//const framesPerSecond = 30
//etInterval(update, 1000 / framesPerSecond) 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Global scope for game
let score = 0
let lives = 3

class CameraMan {
    constructor() {
        this.width=width
        this.height=height
        this.x=x
        this.y=y


}
}