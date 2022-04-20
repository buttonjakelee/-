window.addEventListener("load", function () {

    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS |Symbian|Windows Phone)/i))) {
        window.location.href = "副本.html"; //手机
    } else  {
        window.location.href = "https://www.mi.com/?masid=2701.0074"; //电脑
    }
})

