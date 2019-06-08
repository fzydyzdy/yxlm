class Xq {
    constructor() {
        this.box = document.querySelector(".box1")
        this.box1 = document.querySelector(".box2")
        this.box5 = document.querySelector(".box5")
        this.bx = document.getElementById("box")
        this.a = document.querySelector(".box4 .a")
        
        
        this.init()
    }
    init() {
        this.getcookie = JSON.parse(check("key"))
        this.display()
    }
    display() {
        var that = this 
        var str = ""
        str = `<img src="${this.getcookie.src}"><span></span>`
        this.box.innerHTML = str
        this.box5.innerHTML = str
        var ts = ""
        ts = ` <p>${this.getcookie.name}</p>
               <p>${this.getcookie.money}</p>`
        this.box1.innerHTML = ts
        
        this.a.onclick = function(){
            
            that.tz()
        }
        this.s = document.querySelector("span")
        this.box5 = document.querySelector(".box5")
        this.img = this.box5.children[0]
        this.jr()
    }
    jr(){
        var that = this
        this.box.onmouseover = function(){
            that.show()
            that.box.onmousemove = function(eve){
                var e = eve || window.event
                that.mousemove({
                    x:e.pageX - this.offsetLeft - that.bx.offsetLeft,
                    y:e.pageY - this.offsetTop - that.bx.offsetTop
                })
            }
           
        }
        this.box.onmouseout = function(){
            that.hide()
        }
    }
    show(){
         this.s.style.display = "block"
         this.box5.style.display = "block"
    }
    hide(){
        this.s.style.display = "none"
         this.box5.style.display = "none"
    }
    mousemove(pos){
        var l =  pos.x - this.s.offsetWidth/2
        var t =  pos.y - this.s.offsetHeight/2
        if(l<0){l=0}
        if(t<0){t=0}
        if(l>this.box.offsetWidth - this.s.offsetWidth){
            l=this.box.offsetWidth - this.s.offsetWidth
        }
        if(t>this.box.offsetHeight - this.s.offsetHeight){
            t=this.box.offsetHeight - this.s.offsetHeight
        }
        var x = l/(this.box.offsetWidth - this.s.offsetWidth)
        var y = t/(this.box.offsetHeight - this.s.offsetHeight)
        this.img.style.left = x * (this.box5.offsetWidth - this.img.offsetWidth) + "px"
        this.img.style.top = y * (this.box5.offsetHeight - this.img.offsetHeight) + "px"
      this.s.style.left = l + "px"
      this.s.style.top = t + "px"
    }
    tz(){
          location.href = "cart.html"
         this.cun()
    }
    cun(){
        this.obj = this.getcookie
        this.obj.num = 1
        this.good = check("good")
        if(this.good == ""){
           this.good = [this.obj]
        }else{
            this.good = JSON.parse(this.good)
            var onoff = true
            for(var i=0;i<this.good.length;i++){
                if(this.good[i].id == this.getcookie.id){
                    this.good[i].num++
                    onoff = false
                }
            }
            if(onoff){
                this.good.push(this.obj)
            }
        }
        cookieincrease("good",JSON.stringify(this.good))
    }
   
}
new Xq()