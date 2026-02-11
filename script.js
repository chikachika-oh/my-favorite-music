// 曲データ
const songs = [
    "1位：完璧主義で☆",
    "2位：フルーツバスケット",
    "3位：君と目が合った時"
];

// ランキング表示
const list = document.getElementById("rankingList");

songs.forEach(function(song) {
    const li = document.createElement("li");
    li.textContent = song;
    list.appendChild(li);
});

// ボタンを押したときの処理
function showMessage() {
    document.getElementById("message").textContent =
        "どの曲も元気になれる曲ですが、特に『完璧主義で☆』は明るくて前向きな気持ちになれる最高の1曲です！";
}
