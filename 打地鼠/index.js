var scene = document.getElementById('scene');
var hammer = document.getElementById('hammer');

scene.onmousedown = function(){
    hammer.src = "image/hammer2.png";
}
scene.onmouseup = function(){
    hammer.src = "image/hammer1.png";
}
scene.onmousemove = function(e){
    var x = e.clientX;
    var y = e.clientY;
    hammer.style.top = y + "px";
    hammer.style.left = x + "px";
}

scene.onclick = function(e){
    var x = e.clientX;
    var y = e.clientY;
    // 碰撞检测 
    // 鼠标的位置 x -> 矩形的x1 
    // 鼠标的位置 y -> 矩形的y1
    var x1 = mouseArr[mouseId].offsetLeft + hollowArr[mouseId].offsetLeft;
    var x2 = x1 + mouseArr[mouseId].offsetWidth;

    var y1 = mouseArr[mouseId].offsetTop + hollowArr[mouseId].offsetTop;
    var y2 = hollowArr[mouseId].offsetTop + hollowArr[mouseId].offsetHeight;
    if(x > x1 && x < x2 && y >y1 && y < y2){
        mouseArr[mouseId].src = "image/mouse2.png";
    }
}
var mouseId = 0;
var mouseArr = [];
var hollowArr = [];
for(var i = 0; i < 9; i++){
    hollowArr[i] = document.getElementById("hollow"+(i+1));
    mouseArr[i] = hollowArr[i].getElementsByTagName("img")[0];
}

var mouseLoop = null;
var loopTime = 30;
var initTop = 103;
var nowTop = initTop;
var endTop = 0;

var waitTime = 0;
var maxTime = 1000;
//每两秒钟产生一个老鼠
setInterval(function(){
    // 保证每次只产生一个老鼠
    if(mouseLoop == null){
        nowTop = initTop;
        waitTime = 0;
        mouseArr[mouseId].src = "image/mouse1.png";
        mouseId = parseInt(Math.random()* 9);
        mouseLoop = setInterval(showMouse,loopTime);
    }
},2000);

function showMouse(){
    if(nowTop > endTop){
        nowTop -= 4;
    }
    if(nowTop < endTop){
        nowTop = endTop;
    }
    if(nowTop == endTop){
        if(waitTime < maxTime){
            waitTime += loopTime;
        }
        if(waitTime >= maxTime){
            nowTop = initTop;
            clearInterval(mouseLoop);
            mouseLoop = null;
        }
    }
    mouseArr[mouseId].style.top = nowTop + "px";
}
