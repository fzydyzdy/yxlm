$(function () {
    let time = ""
    time = setInterval(() => { $("#head").children().children(".a").slideUp(1000).show(2000) }, 3000)
    $("#head").children().children(".a").on("mouseover", function () {
        clearInterval(time)
    }).on("mouseout", function () {
        time = setInterval(() => { $("#head").children().children(".a").slideUp(1000).show(2000) }, 3000)
    })
    $("#head").children(".head-Catalog").children(".u").children().on("click", function () {
        $("#head").children(".head-Catalog").children(".u").children().removeClass()
        $(this).addClass("l")
    })
    $("#head .head-Catalog .head-Catalog-a").on("mouseover", function () {
        $("#menu").css({ display: "block" })
    })
    $("#menu").on("mouseover", function () {
        $(this).css({ display: "block" })
    }).on("mouseout", function () {
        $(this).css({ display: "none" })
    })
    $("#menu").children(".menu-1").children(".menu-u").children("li").children("ul").children("li").on("click", function () {
        open()
    })
})


class Verification {
    constructor() {
        this.a = document.querySelector(".head-logo-sign-a")
        this.on = true
        this.init()
    }
    init() {
        var that = this
        this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
        this.cleck()
        if (this.on) {
            this.a.onclick = function(){
                location.href="../html/sign.html"
            }
        } else {

            this.a.onclick = function(){
                that.logoout()
                that.on = true;
            }
        }
    }
    cleck() {
        for (var i = 0; i < this.usermsg.length; i++) {
            if (this.usermsg[i].onoff == "1") {
                this.a.innerHTML = this.usermsg[i].user;
                this.name = this.usermsg[i].user;
                this.on = false
                return;
            }
        }
    }
    logoout() {
        for (var i = 0; i < this.usermsg.length; i++) {
            if(this.name == this.usermsg[i].user){
                this.usermsg[i].onoff = 0;
                localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
            }
        }
        
        this.a.innerHTML = "立即登录"
    }
}
new Verification()




class List{
    constructor(){
        this.log = document.querySelector(".head-logo-sign-a")
        this.shopping = document.querySelector(".head-logo-shopping")
        this.main = document.querySelector("#main-z")
        this.url = "http://localhost/ltz/json/Mainpage.json"
        this.init()
        this.dj()
    }
    init(){
        var that = this
        ajax({
            url:this.url,
            success:function(res){
                that.res = JSON.parse(res)
                that.display()
            }
        })
    }
    display(){
        
        var str = ""
        for(var i=0;i<this.res.length;i++){
            var st = ""
            for(var j=0;j<this.res[i].food.length;j++){
                st +=`<a class="o"><img src="${this.res[i].food[j].src}"><p>${this.res[i].food[j].name}</p><p>￥${this.res[i].food[j].money}</p></a>`
            }
            str +=`<div id="main-1">
            <span class="s1">${this.res[i].name}</span>
            <span class="s2">${this.res[i].hd}</span>
            <a href="#"><span>${this.res[i].gd}</span><i></i></a>
            </div>
            <img src="${this.res[i].src}">
            <div class="di">
                ${st}
            </div>`
            this.main.innerHTML = str
        }
       
        this.clock()
    }
    clock(){
        var that = this
        this.a = document.querySelectorAll(".di a")
        for(var i=0;i<this.a.length;i++){
            this.a[i].onclick = function(){
                if(that.log.innerHTML == "立即登录"){
                    location.href ="../html/sign.html"
                }else{
                    location.href = "../html/detailse.html"
                }
            }
        }
    }
    dj(){
        var that = this
        this.shopping.onclick = function(){
            if(that.log.innerHTML == "立即登录"){
                location.href ="../html/sign.html"
            }else{
                location.href = "../html/cart.html"
            }
        }
    }
}

new List()

class Lou{
    constructor(){
        this.ul=document.querySelector("#list").children
        this.ali=this.ul[0].children
        this.init()
    }
    init(){
        for(var i=0;i<this.ali.length;i++){
            this.ali[i].index=i
            this.ali[i].onclick=function(){

                switch(this.index){
                    case 0:
                        $("html").animate({scrollTop:0});break;
                    case 1:
                         $("html").animate({scrollTop:1300});break;
                    case 2:
                        $("html").animate({scrollTop:2700});break;
                    case 3:
                        $("html").animate({scrollTop:3750});break;
                }
            }
        }
    }
}
new Lou


