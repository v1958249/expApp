function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

//全画面化
function full() {
    var el = document.documentElement
        , reffer =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    reffer.call(el);
    audioElement.play();
};

//画面クリック後イベント
$(document).ready(function ev(){

    const audioElement1= document.createElement('audio');
    const audioElement2 = document.createElement('audio');
    audioElement1.setAttribute('src', 'js/warning2.mp3');
    audioElement2.setAttribute('src', 'js/warning3.mp3');
    
    audioElement1.addEventListener('ended', function () {
        this.play();
    }, false);
    addEventListener("click", function full() {
        var el = document.documentElement
            , reffer =
                el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
        reffer.call(el);
        audioElement1.play();
    });
    
    audioElement2.addEventListener('ended', function () {
        this.play();
    }, false);
    addEventListener("click", function full() {
        var el = document.documentElement
            , reffer =
                el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
        reffer.call(el);
        audioElement2.play();
    });

   if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
        // 特定のキーボードロックのリクエスト
        navigator.keyboard.lock(['Escape', 'Space','MetaLeft','MetaRight','F11','Delete','ShiftLeft','ControlLeft']); 
      } else {
        console.log('Keyboard Lock APIが対応していません.');
      }
    document.addEventListener('keydown', function(event) {
        event.preventDefault();
    }, false);
    //右クリックをロック
    document.oncontextmenu = function () {return false;}
});

//ランダムボックス生成
window.addEventListener('load', function () {
    const container = document.getElementById("container");

    function generateBoxes(){
        const warningBox = document.createElement("div");
        warningBox.className = "warning";

        // ランダムな位置を計算
        const maxWidth = 100;  // ボックスの仮の最大幅
        const maxHeight = 50;  // ボックスの仮の最大高さ
        const randomX = Math.random() * (window.innerWidth - maxWidth); 
        const randomY = Math.random() * (window.innerHeight - maxHeight);

        warningBox.style.left = `${randomX}px`;
        warningBox.style.top = `${randomY}px`;

        const message = document.createElement("span");
        message.innerHTML = "<h1>警告</h1><p>悪意のあるウィルスを発見しました。<br>今すぐ対応してください。<br>これを放置するとPCが危険にさらされます。</p>";
        warningBox.appendChild(message);

        container.appendChild(warningBox);
    }

    for (let i = 0; i < 70; i++) {
        setTimeout(generateBoxes, i * 60);
    }

    // 5秒後に警告ボックスをすべて削除
    setTimeout(function() {
        const warningBoxes = document.querySelectorAll(".warning");
        warningBoxes.forEach(box => {
            box.remove();
        });
    }, 8000);
});

//偽ウィルススキャン
window.addEventListener('load',function startScan() {
    const progressBar = document.getElementById('progressBar');
    const statusMessage = document.getElementById('statusMessage');
    const percentage = document.getElementById('percentage');
    let width = 0;
    var x = 0;
    var n = 0;

    statusMessage.textContent = "スキャン中...";
    percentage.textContent = "0%";

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout((function() {
                return function () {
                    const element1 = document.getElementById('progressContainer');
                    const element2 = document.getElementById('percentage');
                    const count = document.getElementById('count');
                    element1.remove();
                    element2.remove();
                    const element3 = document.getElementById('box-title');
                    element3.textContent = "ウィルススキャンが完了しました";
                    statusMessage.innerHTML = "<p>⚠このデバイスに"+x+"個の脅威が存在します。<br>残りのセキュリティ有効期間</p>";
                    count.innerHTML = "<p>01:00:00</p>";
                    let m = 59;
                    let s = 59;
                    //タイマーカウントダウン
                    window.setInterval((function countDown() {
                        if(s == -1){
                            m--;
                            s = 59;
                        }
                        if(s >= 10){
                            count.innerHTML = "<p>00:"+m+":"+s+"</p>";
                        }else{
                            count.innerHTML = "<p>00:"+m+":0"+s+"</p>";
                        }
                        s--;
                    }),1000)
                    //サポート詐欺モーダル表示
                    document.getElementById("modal").style.display = "block";
                    setTimeout(document.getElementById("ad-box").style.display = "block",15000)
                    const adCount = document.getElementById('ad-count');
                    adCount.innerHTML = "<p>特別オファー期限　10分00秒</p>";
                    let am = 9;
                    let as = 59;
                    //広告タイマーカウントダウン
                    window.setInterval((function countDown() {
                        if(as == -1){
                            am--;
                            as = 59;
                        }
                        if(s >= 10){
                            adCount.innerHTML = "<p>特別オファー期限　"+am+"分"+as+"秒</p>";
                        }else{
                            adCount.innerHTML = "<p>特別オファー期限　"+am+"分0"+as+"秒</p>";
                        }
                        as--;
                    }),1000)
                    //一定時間経過で解説を表示
                    setTimeout((function() {
                        return function () {
                            document.getElementById("box").style.display = "block";
                            document.getElementById("closeBox").addEventListener("click", function(e) {
                                document.getElementById("last").style.display = "block";
                                e.preventDefault(ev);
                            });
                            document.getElementById("yes").addEventListener("click", function() {
                                document.getElementById("last").style.display = "none";
                                document.getElementById("box").style.display = "none";
                            });
                            document.getElementById("no").addEventListener("click", function(e) {
                                document.getElementById("last").style.display = "none";
                                e.preventDefault(ev);
                            });
                        }
                    })(),10000)

                    //閉じれなくなった際の自動終了
                    //setTimeout("window.close()", 300000);
                };
            })(), 3000);
        } else {
            width += Math.random() * 10; // ランダムに増加
            if (width > 100) width = 100; // 幅を100に制限
            progressBar.style.width = width + '%';
            percentage.textContent = Math.floor(width) + '%';
            n = Math.random();
            if(n < 0.2) x= x + 1;
            statusMessage.textContent = "このデバイスに見つかった脅威：" + x + "個";
        }
    }, 500);
})



//解説画面アシスタント
document.addEventListener('DOMContentLoaded', () => {
    const hoverText = document.querySelector('.hover-text');
    const hoverVideo = document.querySelector('.hover-video');

    hoverText.addEventListener('mouseenter', () => {
        hoverVideo.style.display = 'block';
        hoverVideo.play();
    });

    hoverText.addEventListener('mouseleave', () => {
        hoverVideo.style.display = 'none';
        hoverVideo.pause();
        hoverVideo.currentTime = 0; // 動画を最初から再生する場合
    });
});