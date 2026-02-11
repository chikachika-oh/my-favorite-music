// 複数アーティストデータ
const artists = {
    fruits: {
        name: "FRUITS ZIPPER",
        info: "可愛さと元気いっぱいのパフォーマンスが魅力のアイドルグループです！",
        songs: ["完璧主義で☆", "フルーツバスケット", "君と目が合った時"],
        message: "どの曲も元気になれる曲ですが、特に『完璧主義で☆』は明るくて前向きな気持ちになれる最高の1曲です！"
    },
    fujii: {
        name: "藤井風",
        info: "独特の歌声とピアノ演奏で人気のシンガーソングライターです。",
        songs: ["帰ろう", "優しさ", "きらり"],
        message: "藤井風の曲はどれも心に響きます。特に『帰ろう』は温かく感動的な名曲です！"
    },
    oneokrock: {
        name: "ONE OK ROCK",
        info: "国内外で人気のロックバンド。力強い歌声とエモーショナルな曲が魅力です。",
        songs: ["Wherever you are", "完全感覚Dreamer", "Mighty Long Fall"],
        message: "ONE OK ROCKの曲は力強く、特に『Wherever you are』は感情を揺さぶられる名曲です！"
    }
};

// 初期表示
let currentArtist = "fruits";
displayArtist(currentArtist);

// 表示関数
function displayArtist(artistKey) {
    const artist = artists[artistKey];
    document.querySelector("h1").innerHTML = `${artist.name}<br>好きな曲ランキング`;
    document.getElementById("artistInfo").textContent = artist.info;

    const list = document.getElementById("rankingList");
    list.innerHTML = "";
    artist.songs.forEach((song, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}位：${song}`;
        list.appendChild(li);
    });

    const message = document.getElementById("message");
    message.textContent = "";
}

// おすすめポイント表示
function showMessage() {
    const message = document.getElementById("message");
    message.textContent = artists[currentArtist].message;

    message.classList.remove("fade-in");
    void message.offsetWidth; // アニメーション再実行
    message.classList.add("fade-in");
}

// アーティスト変更
function changeArtist() {
    const select = document.getElementById("artistSelect");
    currentArtist = select.value;
    displayArtist(currentArtist);
}
