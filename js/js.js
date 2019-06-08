class List{
    constructor(){
        this.main = document.querySelector(".di")

        this.url = "http://localhost/ltz/json/js.json"
        this.init()
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
            str += `
            <a index="${this.res[i].id}"><img src="${this.res[i].src}">
            <p>${this.res[i].name}</p>
            <p>${this.res[i].money}</p>
            </a>`
        }
        this.main.innerHTML = str
        this.clock()
    }
    clock(){
        var that = this
        this.a = document.querySelectorAll("a")
        for(var i=0;i<this.a.length;i++){
            this.a[i].onclick = function(){
                 that.id = this.getAttribute("index")
                 that.cookie()
                  location.href = "../html/xq.html"
            }
        }
    }
    cookie(){
        for(var i=0;i<this.res.length;i++){
            if(this.id == this.res[i].id){
                cookieincrease("key",JSON.stringify(this.res[i]))
            }
        }
    }
}

new List()