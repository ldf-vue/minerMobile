(function(){
    var t;
    function initHtmlFont(){
        var maxWidth = 450;
        var windowWidth = window.innerWidth||document.body.clientWidth;
        windowWidth = (windowWidth>maxWidth?maxWidth:windowWidth);
        document.documentElement.style.fontSize = 100*(windowWidth/375)+'px';
        //控制图片宽高
        var w = (window.screen.width-40)/3 + 'px';
        var dom = document.getElementsByClassName('pic_img');
        for(var i = 0,l = dom.length;i<l;i++){
            dom[i].style.width = w;
            dom[i].style.height = w;
        }
        //结束
    }

    window.onresize = function(){
        clearInterval(t);
        t = setTimeout(function(){
            initHtmlFont();
        },250)
    }
    initHtmlFont();
})()