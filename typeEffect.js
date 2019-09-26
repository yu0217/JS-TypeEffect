var texts = ["舞蹈老師","外星人","舞者"]   // 陣列
var speed = 300;                         // 打字速度
var index = 0;                           // 編號
var count = 0;                           // 字數
var id = "type-box";                     // 要寫入文字的ID

// 定義方法
function type(){
    var box = document.getElementById(id);
    // 變數 切割完的文字 = 文字陣列[編號].切割(開始位置,切幾個);
    var slice = texts[index].slice(0,count++);

    //盒子.插入內容 = 切割完的文字; 
    box.innerHTML = slice;

    //設置重複時間(方法名稱,間隔時間(單位:毫秒)); 
    setTimeout(type,speed);

    // 如果 字數 大於 目前文字的字數
    if (count > texts[index].length + 5 ) {
        count = 0;
        index++;
    }

    // 如果 編號 = 陣列數量
    if (index == texts.length) {
        index = 0;
    }
}

// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded",type);