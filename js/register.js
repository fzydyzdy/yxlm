class Register {
    constructor() {
        this.user = document.querySelector(".login-input-box .input")
        this.pass = document.querySelector(".login-input-box .input1")
        this.a = document.querySelector(".login-button-box .but1")
        this.p = document.querySelector(".login-header p")
        this.init()
    }
    init() {
        var that = this
        this.a.onclick = function () {
            if(that.user.value!=""&&that.pass.value){
                that.getusermsg()
            }
        }
    }
    getusermsg(){
        this.usermsg = localStorage.getItem("usermsg")
        this.setusermasg()
    }
    setusermasg(){
        if(this.usermsg == null){
            this.usermsg = [
                {
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                }
            ]
            this.span.style.display = "none"
        }else{
            this.usermsg = JSON.parse(localStorage.getItem("usermsg"))
            for(var i=0;i<this.usermsg.length;i++){
                if(this.usermsg[i].user == this.user.value){
                    this.p.innerHTML = "请换个账号"
                    return;
                }
            }
            this.usermsg.push({
                user:this.user.value,
                pass:this.pass.value,
                onoff:0
            })
            
            this.p.innerHTML = "注册成功3秒后返回登录页面"
            setTimeout(()=>{
                location.href="sign.html"
            },3000)
        }
        localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
    }
}
new Register