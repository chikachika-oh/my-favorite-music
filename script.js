document.addEventListener("DOMContentLoaded", function() {

    const artists = {
        fruits: {
            name: "FRUITS ZIPPER",
            info: "可愛さと元気いっぱいのパフォーマンスが魅力のアイドルグループです！",
            songs: ["完璧主義で☆", "フルーツバスケット", "君と目が合った時"],
            message: "どの曲も元気になれる曲ですが、特に『完璧主義で☆』は明るくて前向きな気持ちになれる最高の1曲です！",
            image: "fruits.png"
        },
        fujii: {
            name: "藤井風",
            info: "独特の歌声とピアノ演奏で人気のシンガーソングライターです。",
            songs: ["帰ろう", "優しさ", "きらり"],
            message: "藤井風の曲は心に響き、特に『帰ろう』は温かくて感動的な名曲です！",
            image: "fujii.png"
        },
        oneokrock: {
            name: "ONE OK ROCK",
            info: "国内外で人気のロックバンド。力強い歌声とエモーショナルな曲が魅力です。",
            songs: ["Wherever you are", "完全感覚Dreamer", "Mighty Long Fall"],
            message: "ONE OK ROCKの力強い楽曲は聴く人の心を揺さぶります。特に『Wherever you are』は感情を込めて聴ける名曲です！",
            image: "oneokrock.png"
        }
    };

    let currentArtist = "fruits";

    const artistSelect = document.getElementById("artistSelect");
    const showMessageBtn = document.getElementById("showMessageBtn");

    displayArtist(currentArtist);

    artistSelect.addEventListener("change", function() {
        currentArtist = this.value;
        displayArtist(currentArtist);
    });

    showMessageBtn.addEventListener("click", function() {
        const message = document.getElementById("message");
        message.textContent = artists[currentArtist].message;
        message.classList.remove("fade-in");
        void message.offsetWidth;
        message.classList.add("fade-in");
    });

    function displayArtist(artistKey) {
        const artist = artists[artistKey];
        document.getElementById("artistTitle").innerHTML = `${artist.name}<br>好きな曲ランキング`;
        document.getElementById("artistInfo").textContent = artist.info;

        const list = document.getElementById("rankingList");
        list.innerHTML = "";

        artist.songs.forEach((song, i) => {
            const li = document.createElement("li");
            li.textContent = `${i + 1}位：${song}`;
            li.style.animationDelay = `${i * 0.3}s`; // 順番にフェードイン
            list.appendChild(li);
        });

        document.getElementById("artistImage").src = artist.image;
        document.getElementById("message").textContent = "";
    }
});
