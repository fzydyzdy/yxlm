// //增
function cookieincrease(key, value, options) {
    options = options ? options : {};
    if (options.expires) {
        var d = new Date();
        d.setDate(d.getDate() + options.expires);
        var expi = ";expires=" + d;
    } else {
        var expi = "";
    }
    var path = options.path ? ";path=" + options.path : "";
    document.cookie = key + "=" + value + expi + path;
};

//删
function deletecookie(key, options) {
    options = options ? options : {};
    var value = ""
    options.expires = -1;
    if (options.expires) {
        var d = new Date();
        d.setDate(d.getDate() + options.expires);
        var expi = ";expires=" + d;
    } else {
        var expi = "";
    }
    var path = options.path ? ";path=" + options.path : "";
    document.cookie = key + "=" + value + expi + path;
}

//查
function check(type) {
    var arr = document.cookie.split("; ")
    var onOff = true
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].split("=")[0] == type) {
            return arr[i].split("=")[1]
        } else {
            onOff = false
        }
    }
    if (!onOff) {
        return ""
    }
}