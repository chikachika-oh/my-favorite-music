document.addEventListener("DOMContentLoaded", function() {
    const artistsData = {
        fruits: {
            songs: [
                { name: "完璧主義で☆", desc:"元気になれる明るい曲", url:"https://youtu.be/pFVaqv7pb1k?si=USsGRI_z9ipBzBZw&t=215" },
                { name: "フルーツバスケット", desc:"かわいいメロディが特徴", url:"" },
                { name: "君と目が合った時", desc:"恋する気持ちを歌った曲", url:"" }
            ]
        },
        fujii: {
            songs: [
                { name: "帰ろう", desc:"心温まるバラード", url:"" },
                { name: "優しさ", desc:"優しいメロディが印象的", url:"" },
                { name: "きらり", desc:"明るく元気なナンバー", url:"" }
            ]
        },
        oneokrock: {
            songs: [
                { name: "Wherever you are", desc:"力強いラブソング", url:"" },
                { name: "完全感覚Dreamer", desc:"ロック魂が溢れる曲", url:"" },
                { name: "Mighty Long Fall", desc:"感情揺さぶる名曲", url:"" }
            ]
        }
    };

    const liClasses = ["rank1","rank2","rank3"];

    // ランキング生成
    document.querySelectorAll(".artistSection").forEach(section => {
        const id = section.id;
        const list = section.querySelector(".rankingList");
        artistsData[id].songs.forEach((song, i)=>{
            const li = document.createElement("li");
            if(i<3) li.classList.add(liClasses[i]);
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = `${i+1}位: ${song.name} - ${song.desc}`;
            li.appendChild(a);
            list.appendChild(li);
        });
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
