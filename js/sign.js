class Login {
    constructor() {
        this.user = document.querySelector(".login-input-box .input")
        this.pass = document.querySelector(".login-input-box .input1")
        this.span = document.querySelector(".login-button-box .but1")
        this.p = document.querySelector(".login-header p")
        console.log(this.p)
        this.init()
    }
    init(){
        var that = this
        this.span.onclick = function(){
            that.getusermsg()
        }
    }
    getusermsg(){
        this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : []
        this.check()
    }
    check(){
        for(var i=0;i<this.usermsg.length;i++){
            this.usermsg[i].onoff = 0
            if(this.usermsg[i].user==this.user.value&&this.usermsg[i].pass==this.pass.value&&this.usermsg[i].user!=""&&this.usermsg[i].pass!=""){
                this.usermsg[i].onoff = 1;
                localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                this.p.innerHTML = "登陆成功3秒后跳转"
                setTimeout(()=>{
                    location.href="Mainpage.html"
                },3000)
                return
            }else{
                this.p.innerHTML = "账号密码不符"
            }
        }
    }
}
new Login;