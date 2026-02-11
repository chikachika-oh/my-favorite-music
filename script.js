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
                { name: "満ちていく", url: "https://youtu.be/ptiK8U4WlSc?si=S1sCJ-CCZ9JmmKwo&t=80", desc:"心温まるバラード" },
                { name: "旅路", url: "https://youtu.be/29p8FvT_puU?si=0owXNpcktYMCzkno&t=92", desc:"どこか懐かしい気持ちに" },
                { name: "きらり", url: "https://youtu.be/TcLLpZBWsck?si=jJ5wXTWIXI92OIvY&t=66", desc:"明るく元気なナンバー" }
            ]
        },
        oneokrock: {
            songs: [
                { name: "Wherever you are", url: "https://youtu.be/qs4Q4cQxyU4?si=jcSb5op5lAlNye8P&t=177", desc:"力強いラブソング" },
                { name: "完全感覚Dreamer", url: "https://youtu.be/xGbxsiBZGPI?si=pVBslNKEHR0lT974&t=72", desc:"ロック魂が溢れる曲" },
                { name: "Mighty Long Fall", url: "https://youtu.be/UjZqcDYbvAE?si=i9TMXxNwS2BScd1h&t=53", desc:"感情揺さぶる名曲" }
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
