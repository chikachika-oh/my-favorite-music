document.addEventListener("DOMContentLoaded", function() {
    const artistsData = {
        fruits: {
            songs: [
                { name: "完璧主義で☆", url: "https://youtu.be/pFVaqv7pb1k?si=nV5fA1S8p-51tEzT&t=217", desc:"元気になれる明るい曲" },
                { name: "フルーツバスケット", url: "https://youtu.be/bRRPqGRguKo?si=CgQmIYG-b60fwIye", desc:"かわいいメロディが特徴" },
                { name: "君と目があったとき", url: "https://youtu.be/T55SROZ5S78?si=bnMqQ0DgUErWp2UQ&t=76", desc:"zoffとタイアップ" }
            ]
        },
        fujii: {
            songs: [
                { name: "帰ろう", url: "https://www.youtube.com/watch?v=example4", desc:"心温まるバラード" },
                { name: "優しさ", url: "https://www.youtube.com/watch?v=example5", desc:"優しいメロディが印象的" },
                { name: "きらり", url: "https://www.youtube.com/watch?v=example6", desc:"明るく元気なナンバー" }
            ]
        },
        oneokrock: {
            songs: [
                { name: "Wherever you are", url: "https://www.youtube.com/watch?v=example7", desc:"力強いラブソング" },
                { name: "完全感覚Dreamer", url: "https://www.youtube.com/watch?v=example8", desc:"ロック魂が溢れる曲" },
                { name: "Mighty Long Fall", url: "https://www.youtube.com/watch?v=example9", desc:"感情揺さぶる名曲" }
            ]
        }
    };

    const liClasses = ["rank1","rank2","rank3"];

    document.querySelectorAll(".artistSection").forEach(section => {
        const id = section.id;
        const list = section.querySelector(".rankingList");
        artistsData[id].songs.forEach((song, i)=>{
            const li = document.createElement("li");
            if(i<3) li.classList.add(liClasses[i]);

            const a = document.createElement("a");
            a.href = "#";
            a.innerHTML = `<span class="star">★</span>${i+1}位: ${song.name} <span class="play">▶︎</span> - ${song.desc}`;
            a.addEventListener("click", function(e){
                e.preventDefault();
                const modal = document.getElementById("youtubeModal");
                const player = document.getElementById("youtubePlayer");
                player.src = song.url.replace("watch?v=", "embed/") + "?autoplay=1";
                modal.style.display = "flex";
            });
            li.appendChild(a);
            list.appendChild(li);
        });
    });

    // モーダル閉じる
    document.querySelector("#youtubeModal .closeBtn").addEventListener("click", function(){
        const modal = document.getElementById("youtubeModal");
        const player = document.getElementById("youtubePlayer");
        player.src = "";
        modal.style.display = "none";
    });

    // スクロールでフェードイン
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".artistSection").forEach(section=>{
        observer.observe(section);
    });

});
