//console.log("test to connect") - Connected

let keys = []
let move = 5
let FPS = 30
const flashbulbsArray = []
const starletsArray = []
const canvas= document.querySelector("#canvas")
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext('2d')
ctx.fillStyle = "#861c23"
ctx.strokeColor = "white"
ctx.fillRect(0,0,canvas.width, canvas.height);
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
    constructor(){
        this.photographer=document.querySelector('#photographer')
        this.width = 120
        this.height = 140
        this.visible = true
        this.x = (canvas.width-this.width)/2
        this.y = (canvas.height-this.height)/2
        this.movingForward = false
        this.speed = 0.1
        this.rotateSpeed = .001
        this.velx = 0
        this.vely = 0
        this.radius = 15
        this.angle = 0
        this.img = new Image()
        this.img.src="Images/original_size-removebg-preview.png"
        this.fbx = this.x//(canvas.width/2 + 15)
        this.fby = this.y//canvas.height/2
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
        this.fbx = this.x+15
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
        this.width = 20
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
    constructor() {
        this.starlet1=document.querySelector('#starlet1')
        this.width = 80
        this.height = 100
        this.visible = true
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = Math.floor(Math.random() * canvas.height)
        this.speed = 1
        this.radius = 20
        this.angle = Math.floor(Math.random() * 359)
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
    constructor() {
        this.starlet2=document.querySelector('#starlet2')
        this.width = 80
        this.height = 100
        this.visible = true
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = Math.floor(Math.random() * canvas.height)
        this.radius = 20
        this.angle = Math.floor(Math.random() * 359)
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
    constructor() {
        this.securityGuard=document.querySelector('#securityGuard')
        this.width = 80
        this.height = 100
        this.visible = true
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = Math.floor(Math.random() * canvas.height)
        this.radius = 20
        this.angle = Math.floor(Math.random() * 359)
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
    constructor() {
        this.singingStarlet=document.querySelector('#singingStarlet')
        this.width = 80
        this.height = 100
        this.visible = true
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = Math.floor(Math.random() * canvas.height)
        this.radius = 20
        this.angle = Math.floor(Math.random() * 359)
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
    constructor() {
        this.angryStarlet=document.querySelector('#angryStarlet')
        this.width = 80
        this.height = 100
        this.visible = true
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = Math.floor(Math.random() * canvas.height)
        this.radius = 20
        this.angle = Math.floor(Math.random() * 359)
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
const celebrity2 = new Star2()
const securityMan1 = new SecurityGuard()
const singerNice = new SingingStarlet()
const singerAngry = new AngryStarlet()
starletsArray.push(celebrity1)
starletsArray.push(celebrity2)
starletsArray.push(securityMan1)
starletsArray.push(singerNice)
starletsArray.push(singerAngry)

console.log(starletsArray)

function renderStarlets() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "#861c23"
    celebrity1.updateStar1()
    ctx.drawImage(celebrity1.img,celebrity1.x,celebrity1.y,celebrity1.width,celebrity1.height)
    celebrity2.updateStar2()
    ctx.drawImage(celebrity2.img,celebrity2.x,celebrity2.y,celebrity2.width,celebrity2.height)
    securityMan1.updateSecurityGuard()
    ctx.drawImage(securityMan1.img,securityMan1.x,securityMan1.y,securityMan1.width,securityMan1.height)
    singerNice.updateSingingStarlet()
    ctx.drawImage(singerNice.img,singerNice.x,singerNice.y,singerNice.width,singerNice.height)
    singerAngry.updateAngryStarlet()
    ctx.drawImage(singerAngry.img,singerAngry.x,singerAngry.y,singerAngry.width,singerAngry.height)
    if(starletsArray.length !== 0){
        for (let i = 0; i < starletsArray.length; i++){
            starletsArray[i].updateStar1()
            starletsArray[i].updateStar2()
            starletsArray[i].updateSecurityGuard()
            starletsArray[i].updateSingingStarlet()
            starletsArray[i].updateAngryStarlet()
        }
    }
    requestAnimationFrame(renderStarlets)
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
    requestAnimationFrame(renderPhotographer)

}   

function renderFlashbulbs() {
    if(flashbulbsArray.length !== 0){
        for (let i = 0; i < flashbulbsArray.length; i++){
            flashbulbsArray[i].updateFlashbulbs()
            flashbulbsArray[i].drawFlashbulbs()
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

}
console.log(photographer1)
photographer1.img.onload=()=>{
   
    startGame()
}

 //  startGame()



//ctx.drawImage(photographer1.img,photographer1.x,photographer1.y,photographer1.width,photographer1.height) 
    