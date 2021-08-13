//console.log("test to connect") - Connected

let keys = []
let move = 5
let FPS = 30
const canvas= document.querySelector("#canvas")
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext('2d')
ctx.fillStyle = "#861c23"
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
    })

class Photographer {
    constructor(){
        this.photographer=document.querySelector('#photographer')
        this.width = 80
        this.height = 100
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
        console.log(this)
    }
    rotate(dir){
        this.angle += this.rotateSpeed * dir
     }
    updatePhotographer(){
        let radians = this.angle / Math.PI * 180
        console.log(radians)
        //old X + cos(radians) * distance
        //old Y +cos(radians) * distance
        //console.log(photographer1.velx)
        if(this.movingForward===true) {
           // this.velx+=this.speed
          //  this.vely+=this.speed

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
        
        //console.log(this.velx)
        this.velx *= 0.99
        this.vely *= 0.99
        this.x -= this.velx
        this.y -= this.vely
    }

}
const photographer1 = new Photographer()








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
    requestAnimationFrame(renderPhotographer)
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
//startGame()

//ctx.drawImage(photographer1.img,photographer1.x,photographer1.y,photographer1.width,photographer1.height) 
    