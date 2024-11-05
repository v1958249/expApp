// 電話番号やメールアドレスがクリックされたときに警告を表示する
document.getElementById("alertModal").addEventListener("click", function() {
    document.getElementById("exModal1").style.display = "block";
});
// 登録ボタンがクリックされたときにモーダルを表示する
document.getElementById("register-btn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
});
// 登録ボタンがクリックされたときにフォームを表示する
document.getElementById("register-btn").addEventListener("click", function() {
    document.getElementById("registration-form").style.display = "block";

    autoInput("number","1234567890123456");
    autoInput("username","OITA TARO");
    document.getElementById("month").value = "2028-10";
    autoInput("password","123");
});
// クレカ送信ボタンがクリックされたときにアラートを表示する
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("exModal2").style.display = "block";
    // 閉じるボタンで警告モーダルをとじる
    document.getElementById("closeExModal").addEventListener("click", function() {
        document.getElementById("exModal2").style.display = "none";
        document.getElementById("myModal").style.display = "none";
        document.getElementById("number").value = "";
        document.getElementById("username").value = "";
        document.getElementById("month").value = "";
        document.getElementById("password").value = "";
        //event.off();
    });
    // event.off();
});
// 閉じるボタンでフォームをとじる
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("exModal1").style.display = "none";
});
document.getElementById("closemyModal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("exModal2").style.display = "none";
    document.getElementById("number").value = "";
    document.getElementById("username").value = "";
    document.getElementById("month").value = "";
    document.getElementById("password").value = "";
    //event.off();
});

//現在時刻の取得
document.getElementById("day").innerHTML = showTime();
function showTime() {
    var now = new Date();
    var nowyear = now.getFullYear();
    var nowmonth = now.getMonth();
    var nowdate = now.getDate();
    var nowhour = now.getHours();
    var nowminutes = now.getMinutes();
    var nowseconds = now.getSeconds();
    var text = nowyear + " " + (nowmonth+1) + "/" + nowdate + " " + nowhour + ":" + nowminutes + ":" + nowseconds; 
    return text;
}

//ブラウザアプリのバージョン情報取得
document.getElementById("browser").innerHTML = getBrowser();
function getBrowser(){
    var appVersion = navigator.appVersion
    var text = appVersion;
    return text;
}

//OS情報取得
document.getElementById("info").innerHTML = getInfo();
function getInfo(){
    var os = navigator.platform;
    return os;
}

//カウントダウンタイマー
count.innerHTML = "<p>お支払い期限　72:00:00</p>";
let c = 259199;
let h;
let m;
let s;
window.setInterval((function countDown() {
    h = Math.floor(c / 3600);
    m = Math.floor((c % 3600) / 60);
    s = Math.floor(c % 60);
    if(s<10){
        s = "0" + s;
    }
    if(m<10){
        m = "0" + m;
    }
    if(h<10){
        h = "0" + h;
    }
    count.innerHTML = "<p>お支払い期限　"+h+":"+m+":"+s+"</p>";
    c--;
}),1000)

//自動入力機能
function autoInput(elementId,text){
    const input = document.getElementById(elementId);
    let index = 0;
    const interval = setInterval(() => {
        if(index < text.length) {
            input.value += text[index];
            index++;
        }else{
            clearInterval(interval);
        }
    },100);
}

//ブラウザバック禁止
window.history.pushState(null, null, window.location.href);
window.addEventListener('popstate', (e) => {
  history.go(1);
});