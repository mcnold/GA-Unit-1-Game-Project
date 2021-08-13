class Photographer {             //Build the photographer class
    constructor(image,x,y,width,height,update,newPhotographer) {
    this.image=document.querySelector('#photographer')
    this.imagesrc = 
    this.x = x
    this.y = y
    this.width = width
    this.height = height





























//Global

//setup canvas
//set up start of game and updates/refreshes
//start the game
//build a photographer
//build a starlet
//build a security guard
//build an angry starlet
//create an array of starlets
//create an ability to snap a photo of a starlet
//get the distance between the photographer and the starlet
//shoot flashbulb lights at starlet
//make photographer blink when he touches a security guard or the angry starlet
//Move the photographer
//draw the flashbulbs
//draw game text "Press any key to start snappin"
//Detect photo taken by photographer of starlet
//Design the edge of the screen so the starlets and security guards can float in and out
//Move the flashbulbs
//Move the starlets
//Move the photographer and shoot the flashbulbs on keydown function
//Stop the photographer actions when key up
//Level up
//Game Over function


// 
/*
const canvas= document.querySelector("#canvas")
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext('2d')
ctx.fillStyle = "#861c23"
ctx.fillRect(0,0,canvas.width, canvas.height);
const photographer = document.querySelector('#photographer')
//ctx.scale(-1,1)
ctx.drawImage(photographer,1200,300,75,100)
const starlet1 = document.querySelector('#starlet1')
//ctx.scale(1,1)
ctx.drawImage(starlet1,500,50,80,100)
const starlet2 = document.querySelector('#starlet2')
ctx.drawImage(starlet2,200,100,80,100)
const securityGuard = document.querySelector('#securityGuard')
ctx.drawImage(securityGuard,10,180,80,100)
const singingStarlet = document.querySelector('#singingStarlet')
ctx.drawImage(singingStarlet,800,0,80,100)
const angryStarlet = document.querySelector('#angryStarlet')
ctx.drawImage(angryStarlet,0,800,80,100)


let moneyScore = 0
let level = 0
let lives = 3 //game lives
const framesPerSecond = 30 //page refreshes for animations
const friction = 0.5 //adds friction to movement of the photographer
const photographerBlinkDuration = 0.1 //seconds
const photographerDieDuration = 0.3
const photographerInvisibilityDuration = 3 //seconds
const photographerTurnSpeed = 360 //degrees per second
const flashBulbDistance = 0.3 //max distance that the lights will travel on screen
const flashBulbDuration = 0.1 //in seconds
const flashBulbMax = 10 //max number of "shoots" on the screen at any given time
const flashBulbSpeed = 200 //px per second
const starletNumber = 1 //starting number of starlets
const starletSpeed = 50 //max pixels per second
const securityGuardSpeed = 60 //max pixels per second
const angryStarletSpeed = 70 //max pixels per second
const starletLargePts = 20 //points scored for starlet2
const starletMediumPts = 50 //points scored for starlet1
const starletSmallPts = 100 //points scored for starlet3
const angryStarletPts =moneyScore-moneyScore //sets money score back to 0
const securityGuardPts = -50 //points scored for security guard

document.addEventListener("keydown", startGame)
  
class Photographer {             //Build the photographer class
      constructor(image,x,y,width,height,update,newPhotographer) {
      this.image=document.querySelector('#photographer');
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }
    updateImage() {
        ctx = canvas.context;
        ctx.drawImage(this.image,this.x, this.y, this.width, this.height);
    }
    newPhotographer() {          //Make a new photographer
        this.x= canvas.width/2
        this.y= canvas.height/2
        blinkNumber = Math.ceil(photographerInvisibilityDuration/photographerBlinkDuration)
        blinkingTime= Math.ceil(photographerBlinkDuration*framesPerSecond)
        let canShoot= true
        let isDead= false
        let dieTime= 0
        const flashbulbs= [] //creates an empty array for flashbulbs
        let rotation= 0 //fixed position at start
        let walking= false //not moving upon start
        this.movex = this.x //coordinate values
        this.movey = this.y
      }
    
    activateFlashbulb() {

   }
    snapPhoto() {

    }
}
class RegularStarlet {
    constructor(image,x,y,width,height,update) {
    this.image=document.querySelectorAll('.starlets')
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    }
    updateImage() {
        ctx = canvas.context;
        ctx.drawImage(this.image,this.x, this.y, this.width, this.height)
    }
    newStarlet() {
        let lvlMultiply = 1 +0.1 * level//number of starlets increases with each level up
        x=this.x
        y=this.y
        let xv=(Math.random() * starletSpeed * lvlMultiply / framesPerSecond * Math.random())
        let yv=(Math.random() * starletSpeed * lvlMultiply / framesPerSecond * Math.random())
        } //need to grab a random image of one of the starlets
  
    
    ArrayOfStarlets() {
        const starlets =[]
        let starletTotal = (starletNumber + level) * 7
        let starletsLeft = starletTotal
        let x, y
        for (let i = 0; i<starletNumber + level; i++) {
            do {
                x = Math.floor(Math.random() * canvas.width)
                y = Math.floor(Math.random() * canvas.height) 
            } while (distBetweenPoints(photographer.x, photographer.y, x, y < 100)) //need to figure out this part.
            starlets.push(this.newStarlet(x,y,Math.ceil(1)))
        }
    }
}
class SecurityGuard {
    constructor(image,x,y,width,height,update) {
        this.image=document.querySelector('#securityGuard')
        this.x=x
        this.y=y
        this.width=width
        this.height=height
    }
    
    updateImage() {
        ctx = canvas.context;
        ctx.drawImage(this.image,this.x, this.y, this.width, this.height)
        }
    
    newSecurityGuard() {
        let lvlMultiply = 1 +0.1 * level
        let guard = {
            x: this.x,
            y: this.y,
            xv: (Math.random() * securityGuardSpeed * lvlMultiply / framesPerSecond * Math.random()),
            yv: (Math.random() * securityGuardSpeed * lvlMultiply / framesPerSecond * Math.random()),
        }
        return guard

    }
}
class AngryStarlet {
    constructor(image,x,y,width,height,update) {
        this.image=document.querySelector('#angryStarlet')
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.update = function() {
            ctx = myGameArea.context;
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        }
    }
    newAngryStarlet() {
        let lvlMultiply = 1 +0.1 * level
        let angryS = {
            x: this.x,
            y: this.y,
            xv: (Math.random() * angryStarletSpeed * lvlMultiply / framesPerSecond * Math.random()),
            yv: (Math.random() * angryStarletSpeed * lvlMultiply / framesPerSecond * Math.random()),
        }
        return angryS
    }
}


function startGame() {
    //const photographer = new Photographer()
    //const starlet1 = new Starlet()           Randomly select a starlet from the starlet class
    myGameArea.start()
  }









//const clearScreen=()=>{
//    ctx.clearRect(0,0,canvas.width, canvas.height)
//}
//const update=()=> {
//    canvas.width=innerWidth
//    canvas.height=innerHeight
//}
//const gameInterval = setInterval(updateGameArea, 20)
//window.setInterval()

//console.log(ctx)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Global scope for game

//let soundOn = false;
//let musicOn = false;


//setInterval(update, 1000/ framesPerSecond)