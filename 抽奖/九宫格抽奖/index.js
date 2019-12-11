var tdList = document.getElementById('table').getElementsByTagName('td');
        
var tdID = 0;
var tdArr = [0,1,2,5,8,7,6,3];
var nowCount = 0; //当前跑的次数
var totalCount ; //跑的总次数
var index; //获取奖品的下标
var speed = 100; //跑的速度，值越大，速度越慢
var isClick = true; //是否点击

function playFunc(){
    if( nowCount > parseInt(totalCount /2)+6){
        speed -= 10;
    }else{
        speed += 5;
    }
    //第一行 0-3
    //取消上次的选中
    tdList[tdArr[tdID]].className = '';
    tdID = tdID+1 == tdArr.length ? 0 : tdID + 1 ;
    //当前元素加上选中
    tdList[tdArr[tdID]].className = 'select';

    nowCount++;
    if(nowCount >= totalCount){
        start.textContent = "开始";
        isClick = true;
    }else{
        setTimeout(playFunc,speed);
    }
}

var start = document.getElementById('start');
start.onclick = function(){
    start.textContent = "抽奖中";
    if(isClick){
        index = parseInt(Math.random()*8);//获取转到奖品的随机下标
        totalCount = 8 * 3 + index; 
        nowCount = 0; //跑的初始圈数
        speed = 200;
        isClick = false;
        setTimeout(playFunc,200);
    }
}