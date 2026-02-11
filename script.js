document.addEventListener("DOMContentLoaded", function() {
    const artistsData = {
        fruits: {
            songs: [
                { name: "完璧主義で☆", desc:"元気になれる明るい曲", url:"https://youtu.be/pFVaqv7pb1k?si=USsGRI_z9ipBzBZw&t=215" },
                { name: "フルーツバスケット", desc:"かわいいメロディが特徴", url:"https://youtu.be/bRRPqGRguKo?si=sq-cVwGiJlRWBs6p&t=70" },
                { name: "君と目が合った時", desc:"メガネがテーマの新曲", url:"https://youtu.be/T55SROZ5S78?si=D4FhaMAOVFcRk5VC&t=76" }
            ]
        },
        fujii: {
            songs: [
                { name: "満ちていく", desc:"心温まるバラード", url:"https://youtu.be/ptiK8U4WlSc?si=8bzmlJJITYI2mxcr&t=78" },
                { name: "旅路", desc:"優しいメロディが印象的", url:"https://youtu.be/29p8FvT_puU?si=lw8toRxsv6cVPjvr&t=91" },
                { name: "きらり", desc:"明るく元気なナンバー", url:"https://youtu.be/TcLLpZBWsck?si=zCyGA-mviCt8oAk7&t=65" }
            ]
        },
        oneokrock: {
            songs: [
                { name: "Wherever you are", desc:"力強いラブソング", url:"https://youtu.be/qs4Q4cQxyU4?si=jQY2WF5zuR6guWWK&t=222" },
                { name: "完全感覚Dreamer", desc:"ロック魂が溢れる曲", url:"https://youtu.be/xGbxsiBZGPI?si=Da2EqS51DJzVxWoc&t=71" },
                { name: "Mighty Long Fall", desc:"感情揺さぶる名曲", url:"https://youtu.be/UjZqcDYbvAE?si=Hpa5cV8m8KtOG1mt&t=53" }
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
            a.href = song.url;
            a.target = "_blank";
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
