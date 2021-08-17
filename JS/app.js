//console.log("test to connect") - Connected

let keys = []
const flashbulbsArray = []
const starletsArray = []
const canvas= document.querySelector("#canvas")
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext('2d')
ctx.fillStyle = "#861c23"
ctx.strokeColor = "white"
ctx.fillRect(0,0,canvas.width, canvas.height);
let score = 0
let lives = 3
let wallet = 0
/*
const photographer = document.querySelector('#photographer')
ctx.drawImage(photographer,1000,300,75,100)
console.log(photographer) 
const starlet1 = document.querySelector('#starlet1')
ctx.drawImage(starlet1,500,50,120,140)
console.log(starlet1)
const starlet2 = document.querySelector('#starlet2')
ctx.drawImage(starlet2,200,100,100,120)
console.log(starlet2)
const securityGuard = document.querySelector('#securityGuard')
ctx.drawImage(securityGuard,10,180,100,125)
console.log(securityGuard)
const singingStarlet = document.querySelector('#singingStarlet')
ctx.drawImage(singingStarlet,900,0,100,120)
console.log(singingStarlet)
const angryStarlet = document.querySelector('#angryStarlet')
ctx.drawImage(angryStarlet,100,400,100,120)
console.log(angryStarlet)
const starlet3 = document.querySelector('#starlet3')
ctx.drawImage(starlet3, 400,300,120,140)
console.log(starlet3)
*/
document.body.addEventListener('keydown', function(e) {
        keys[e.keyCode] = true
        console.log("keydown event loaded")
    })
document.body.addEventListener('keyup', function(e) {
        keys[e.keyCode] = false
        console.log("keyup event loaded")
        if(e.keyCode===32){
            flashbulbsArray.push(new Flashbulbs(photographer1.angle))
        }
    })

class Photographer {
    constructor(x,y,radius,collisionRadius){
        this.photographer=document.querySelector('#photographer')
        this.width = 120
        this.height = 140
        this.visible = true
        this.x = x || (canvas.width-this.width)/2
        this.y = y || (canvas.height-this.height)/2
        this.movingForward = false
        this.speed = 0.1
        this.rotateSpeed = .001
        this.velx = 0
        this.vely = 0
        this.radius = 15
        this.collisionRadius = collisionRadius || 11
        this.angle = 0
        this.lives = lives
        this.img = new Image()
        this.img.src="Images/original_size-removebg-preview.png"
        this.fbx = this.x//(canvas.width/2 + 15)
        this.fby = this.y//canvas.height/2
        this.wallet = wallet
        console.log(this)
    }
    draw() {
        ctx.strokeStyle = this.strokeColor
        ctx.beginPath()
        this.fbx = this.x - this.radius * Math.cos(radians)
        this.fby = this.y - this.radius * Math.sin(radians)
    }

    rotate(dir){
        this.angle += this.rotateSpeed * dir
     }
    updatePhotographer(){
        let radians = this.angle / Math.PI * 180
             if(this.movingForward===true) {
            this.velx += Math.cos(radians) * this.speed
            this.vely += Math.sin(radians) * this.speed
        }
        if(this.x < this.radius){
            this.x = canvas.width

        }
        if(this.x > canvas.width){
            this.x = this.radius

        }
        if(this.y < this.radius) {
            this.y = canvas.height
 
        }
        if(this.y > canvas.height){
            this.y = this.radius

        }
        this.fbx = this.x+17
        this.fby = this.y+30
        this.velx *= 0.99
        this.vely *= 0.99
        this.x -= this.velx
        this.y -= this.vely
    }

}
const photographer1 = new Photographer()

class Flashbulbs {
    constructor(angle) {
        this.visible = true
        this.x = photographer1.fbx
        this.y = photographer1.fby
        this.angle = angle
        this.height = 6
        this.width = 12
        this.speed = 5
        this.velx = 0
        this.vely = 0
    }
    updateFlashbulbs() {
        let radians = this.angle / Math.PI * 180
        this.x -= Math.cos(radians) * this.speed
        this.y -= Math.sin(radians) * this.speed      
    }
    drawFlashbulbs() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Star1 {
    constructor(x,y,radius,collisionRadius) {
        this.starlet1=document.querySelector('#starlet1')
        this.width = 140
        this.height = 160
        this.visible = true
        this.x = x || Math.floor(Math.random() * canvas.width)
        this.y = y || Math.floor(Math.random() * canvas.height)
        this.speed = 0.3
        this.radius = radius || 20
        this.angle = Math.floor(Math.random() * 359)
        this.collisionRadius = collisionRadius || 15
        this.wallet = 5000
        this.img = new Image()
        this.img.src="Images//21_1_22-removebg-preview.png"

    }
    updateStar1() {
        let radians = this.angle / Math.PI * 180
        this.x += Math.cos(radians) * this.speed
        this.y += Math.sin(radians) * this.speed
        if(this.x < this.radius){
            this.x = canvas.width
        }
        if(this.x > canvas.width){
            this.x = this.radius
        }
        if(this.y < this.radius) {
            this.y = canvas.height
        }
        if(this.y > canvas.height){
            this.y = this.radius
        }       
    }
}
class Star2 {
    constructor(x,y,radius,collisionRadius) {
        this.starlet2=document.querySelector('#starlet2')
        this.width = 160
        this.height = 170
        this.visible = true
        this.x = x || Math.floor(Math.random() * canvas.width)
        this.y = y || Math.floor(Math.random() * canvas.height)
        this.speed = 0.4
        this.radius = 20
        this.collisionRadius = collisionRadius || 15
        this.angle = Math.floor(Math.random() * 359)
        this.wallet = 10000
        this.img = new Image()
        this.img.src="Images/36_1_41-removebg-preview.png"
    }
    updateStar2() {
        let radians = this.angle / Math.PI * 180
        this.x += Math.cos(radians) * this.speed
        this.y += Math.sin(radians) * this.speed
        if(this.x < this.radius){
            this.x = canvas.width
        }
        if(this.x > canvas.width){
            this.x = this.radius
        }
        if(this.y < this.radius) {
            this.y = canvas.height
        }
        if(this.y > canvas.height){
            this.y = this.radius
        }       
    }
}

class SecurityGuard {
    constructor(x,y,radius,collisionRadius) {
        this.securityGuard=document.querySelector('#securityGuard')
        this.width = 80
        this.height = 100
        this.visible = true
        this.x = x || Math.floor(Math.random() * canvas.width)
        this.y = y || Math.floor(Math.random() * canvas.height)
        this.speed = 0.5
        this.radius = 20
        this.collisionRadius = collisionRadius || 15
        this.angle = Math.floor(Math.random() * 359)
        this.wallet = -2000
        this.img = new Image()
        this.img.src="Images/man_security-removebg-preview.png"
    }
    updateSecurityGuard() {
        let radians = this.angle / Math.PI * 180
        this.x += Math.cos(radians) * this.speed
        this.y += Math.sin(radians) * this.speed
        if(this.x < this.radius){
            this.x = canvas.width
        }
        if(this.x > canvas.width){
            this.x = this.radius
        }
        if(this.y < this.radius) {
            this.y = canvas.height
        }
        if(this.y > canvas.height){
            this.y = this.radius
        }       
    }
}
class SingingStarlet {
    constructor(x,y,radius,collisionRadius) {
        this.singingStarlet=document.querySelector('#singingStarlet')
        this.width = 140
        this.height = 160
        this.visible = true
        this.x = x || Math.floor(Math.random() * canvas.width)
        this.y = y || Math.floor(Math.random() * canvas.height)
        this.speed = 0.5
        this.radius = 20
        this.collisionRadius = collisionRadius || 15
        this.angle = Math.floor(Math.random() * 359)
        this.wallet = 3000
        this.img = new Image()
        this.img.src="Images/original_size-removebg-preview (1).png"
    }
    updateSingingStarlet() {
        let radians = this.angle / Math.PI * 180
        this.x += Math.cos(radians) * this.speed
        this.y += Math.sin(radians) * this.speed
        if(this.x < this.radius){
            this.x = canvas.width
        }
        if(this.x > canvas.width){
            this.x = this.radius
        }
        if(this.y < this.radius) {
            this.y = canvas.height
        }
        if(this.y > canvas.height){
            this.y = this.radius
        }       
    }
}
class AngryStarlet {
    constructor(x,y,radius,collisionRadius) {
        this.angryStarlet=document.querySelector('#angryStarlet')
        this.width = 80
        this.height = 120
        this.visible = true
        this.x = x || Math.floor(Math.random() * canvas.width)
        this.y = y || Math.floor(Math.random() * canvas.height)
        this.speed = .3
        this.radius = 20
        this.collisionRadius = collisionRadius || 15
        this.angle = Math.floor(Math.random() * 359)
        this.wallet = wallet-wallet
        this.img = new Image()
        this.img.src="Images/Singing_Actress-removebg-preview.png"
    }
    updateAngryStarlet() {
        let radians = this.angle / Math.PI * 180
        this.x += Math.cos(radians) * this.speed
        this.y += Math.sin(radians) * this.speed
        if(this.x < this.radius){
            this.x = canvas.width
        }
        if(this.x > canvas.width){
            this.x = this.radius
        }
        if(this.y < this.radius) {
            this.y = canvas.height
        }
        if(this.y > canvas.height){
            this.y = this.radius
        }       
    }
}
const celebrity1 = new Star1()
const celebrity11 = new Star1()
const celebrity2 = new Star2()
const celebrity22 = new Star2()
const securityMan1 = new SecurityGuard()
const securityMan2 = new SecurityGuard()
const singerNice = new SingingStarlet()
const singerAngry = new AngryStarlet()
starletsArray.push(celebrity1)
starletsArray.push(celebrity11)
starletsArray.push(celebrity2)
starletsArray.push(celebrity22)
starletsArray.push(securityMan1)
starletsArray.push(securityMan2)
starletsArray.push(singerNice)
starletsArray.push(singerAngry)

console.log(starletsArray)

function renderStarlets() {
    if(starletsArray.length !== 0){
        for (let i = 0; i < 2; i++){
            ctx.fillStyle = "#861c23"
            celebrity1.updateStar1()
            ctx.drawImage(celebrity1.img,celebrity1.x,celebrity1.y,celebrity1.width,celebrity1.height)
            celebrity11.updateStar1()
            ctx.drawImage(celebrity11.img,celebrity11.x,celebrity11.y,celebrity11.width,celebrity11.height)
            celebrity2.updateStar2()
            ctx.drawImage(celebrity2.img,celebrity2.x,celebrity2.y,celebrity2.width,celebrity2.height)
            celebrity22.updateStar2()
            ctx.drawImage(celebrity22.img,celebrity22.x,celebrity22.y,celebrity22.width,celebrity22.height)
            securityMan1.updateSecurityGuard()
            ctx.drawImage(securityMan1.img,securityMan1.x,securityMan1.y,securityMan1.width,securityMan1.height)
            securityMan2.updateSecurityGuard()
            ctx.drawImage(securityMan2.img,securityMan2.x,securityMan2.y,securityMan2.width,securityMan2.height)
            singerNice.updateSingingStarlet()
            ctx.drawImage(singerNice.img,singerNice.x,singerNice.y,singerNice.width,singerNice.height)
            singerAngry.updateAngryStarlet()
            ctx.drawImage(singerAngry.img,singerAngry.x,singerAngry.y,singerAngry.width,singerAngry.height)
 //           ctx.rect(singerAngry.x, singerAngry.y, singerAngry.width, singerAngry.height)
 //           ctx.strokeStyle="white"
 //           ctx.stroke()
  
    }
 //   ctx.clearRect(0,0,canvas.width,canvas.height)
 //   ctx.fillStyle = "#861c23"
 //   celebrity1.updateStar1()
 //   ctx.drawImage(celebrity1.img,celebrity1.x,celebrity1.y,celebrity1.width,celebrity1.height)
 //   celebrity2.updateStar2()
 //   ctx.drawImage(celebrity2.img,celebrity2.x,celebrity2.y,celebrity2.width,celebrity2.height)
 //   securityMan1.updateSecurityGuard()
 //   ctx.drawImage(securityMan1.img,securityMan1.x,securityMan1.y,securityMan1.width,securityMan1.height)
 //   singerNice.updateSingingStarlet()
 //   ctx.drawImage(singerNice.img,singerNice.x,singerNice.y,singerNice.width,singerNice.height)
 //   singerAngry.updateAngryStarlet()
 //   ctx.drawImage(singerAngry.img,singerAngry.x,singerAngry.y,singerAngry.width,singerAngry.height)
 //       requestAnimationFrame(renderStarlets)
}
}
function renderPhotographer() {
    photographer1.movingForward = (keys[38])
    //console.log("moving forward") //up arrow
    if (keys[39]) {  //right arrow
        photographer1.rotate(1)
      //  console.log("right arrow")
    }
    if (keys[37]) { //left arrow
        photographer1.rotate(-1)
       // console.log("left arrow")
    }
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "#861c23"
    photographer1.updatePhotographer()
    ctx.drawImage(photographer1.img,photographer1.x,photographer1.y,photographer1.width,photographer1.height)
    renderFlashbulbs()
    renderStarlets() 
    requestAnimationFrame(renderPhotographer)
    peopleCollision()
    flashBulbCollision()

}   

function circleCollsion(p1x, p1y, r1, p2x, p2y, r2){
    let radiusSum = r1 + r2
    let xDiff = p1x - p2x
    let yDiff = p1y - p2y
    if (radiusSum > Math.sqrt((xDiff * xDiff) +(yDiff * yDiff))){
        return true
    } else {
        return false
    }
}
function renderFlashbulbs() {
    if(flashbulbsArray.length !== 0){
        for (let i = 0; i < flashbulbsArray.length; i++){
            flashbulbsArray[i].updateFlashbulbs()
            flashbulbsArray[i].drawFlashbulbs()
        }
    }
}

function updateLives() {
    let updatelife = document.querySelector('#span1')
    updatelife = photographer1.lives //this isn't working, why is it not updating the span visibly?
}
function updateWallet() {
    let updateWalAmt = document.querySelector('#span2')
    updateWalAmt = photographer1.wallet //this isn't working, why is it not updating the span visibly?
}
function gameOver() {
    if(lives <= 0){
        photographer1.visible=false
        ctx.fillStyle = "white"
        ctx.font = "40px Codystar, cursive"
        ctx.fillText("GAME OVER", canvas.width / 2 - 150, canvas.height / 2)
    }
}
function peopleCollision() {
    if(starletsArray.length !== 0){
        for(let i = 0; i < starletsArray.length; i++){
            if(circleCollsion(photographer1.x, photographer1.y, 11, starletsArray[i].x, starletsArray[i].y, starletsArray[i].collisionRadius)){
                photgrapher1.lives-=1
                updateLives()
                alert("You were thrown in jail for harassment!")
                ctx.clearRect(0,0,canvas.width,canvas.height)
                ctx.fillStyle = "#861c23"   
                photographer1.x = (canvas.width-this.width)/2
                photographer1.y = (canvas.height-this.height)/2
                photographer1.updatePhotographer()
                ctx.drawImage(photographer1.img,photographer1.x,photographer1.y,photographer1.width,photographer1.height)

                //Need to update collision radius, find out why it only works at some times. Photographer will not reload.
            }
        }
    }
}
function flashBulbCollision() {
    if(flashbulbsArray !== 0){
        for(let i = 0; i < flashbulbsArray.length; i++){
            if(circleCollsion(flashbulbsArray[i].x, flashbulbsArray[i].y,11,starletsArray[i].x,starletsArray[i].y, starletsArray[i].collisionRadius)){
                starletsArray[i].speed=0
                ctx.strokeStyle="white" 
                ctx.strokeRect(starletsArray[i].x-2, starletsArray[i].y-2, starletsArray[i].width+2, starletsArray[i].height+2)
                ctx.clearRect(starletsArray[i].x, starletsArray[i].y, starletsArray[i].width, starletsArray[i].height)
                ctx.drawImage(starletsArray[i].img,starletsArray[i].x,starletsArray[i].y,starletsArray[i].width,starletsArray[i].height)
                wallet = photographer1.wallet + starletsArray[i].wallet
                updateWallet()
                starletsArray[i].speed = 0.4   //need to debug this, only capturing at set times.
            }
        }
    }
}

function startGame() {
 
    //console.log(photographer1.velx)
    photographer1.rotate(0)
    //console.log(photographer1.velx)
    photographer1.updatePhotographer()
    //console.log(photographer1.velx)
    renderPhotographer()
    wallet = 0
    lives = 3

}
console.log(photographer1)
photographer1.img.onload=()=>{
   
    startGame()
}

 //  startGame()



//ctx.drawImage(photographer1.img,photographer1.x,photographer1.y,photographer1.width,photographer1.height) 
    