//console.log("test to connect") - Connected

//Global scope for canvas and animation.
//grab the canvas element by its ID, set the graphics context of the drawing.
//Set the initial size. Update the size to fit the height and width of the window.
//Call resize function as updates are made to window size.
const canvas= document.querySelector("#canvas")
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext('2d')
ctx.fillStyle = "#861c23"
ctx.fillRect(0,0,canvas.width, canvas.height);
const photographer = document.querySelector('#photographer')
//ctx.scale(-1,1)
ctx.drawImage(photographer,1200,300,200,200)
const starlet1 = document.querySelector('#starlet1')
//ctx.scale(1,1)
ctx.drawImage(starlet1,500,50,300,300)
const starlet2 = document.querySelector('#starlet2')
ctx.drawImage(starlet2,200,100,300,300)
//const securityGuard = document.querySelector('#securityGuard')
//ctx.drawImage(securityGuard, 90,10,50,50)

//console.log(ctx)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Global scope for game
let score = 0
let soundOn = false;
let musicOn = false;
const lives = 3
const framesPerSecond = 30
const friction = 0.5 //adds friction to movement of the photographer
const photographerLosingLifeDuration = 0.1
const handcuffsDuration = 0.3
const photographerTurnSpeed = 360
const flashBulbDistance = 0.3
const flashBulbDuration = 0.1
const flashBulbMax = 10
const flashBulbSpeed = 200
const celebrityNumber = 1
const celebritySize = 100
const celebritySpeed = 50
const celebrityLargePts = 20
const celebrityMediumPts = 50
const celebritySmallPts = 100

//setInterval(update, 1000/ framesPerSecond)
    
 
class Photographer {
    constructor() {
        this.width=width
        this.height=height
        this.x=x
        this.y=y


}
}