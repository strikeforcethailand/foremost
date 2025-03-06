function toggleCard(id) {
    var card = document.getElementById(id);

    if (card.classList.contains("show")) {
        card.classList.remove("show");
        setTimeout(() => { card.style.display = "none"; }, 500); // ซ่อนหลังจาก animation จบ
    } else {
        card.style.display = "block";
        setTimeout(() => { card.classList.add("show"); }, 10); // เริ่ม animation
    }
}

// function groupProduct(id) {
//     var allCards = document.querySelectorAll(".slide-card"); // เลือกทุกการ์ด
//     allCards.forEach(card => {
//         if (card.id === id) {
//             if (!card.classList.contains("show")) {
//                 card.style.display = "block";  
//                 setTimeout(() => card.classList.add("show"), 10); // เพิ่ม class show หลังจากแสดง
//             }
//         } else {
//             if (card.classList.contains("show")) {
//                 card.classList.remove("show"); // ลบ class show
//                 setTimeout(() => { card.style.display = "none"; }, 500); // ซ่อนหลัง transition
//             }
//         }
//     });
// }


function groupProduct(id) {
    var allCards = document.querySelectorAll(".slide-card"); // เลือกทุกการ์ด
    allCards.forEach(card => {
        if (card.id === id) {
            if (card.classList.contains("show")) {
                // ถ้ากดซ้ำ ให้ปิดตัวเอง
                card.classList.remove("show"); 
                setTimeout(() => { card.style.display = "none"; }, 500);
            } else {
                // ถ้ายังไม่เปิด ให้เปิด
                card.style.display = "block";  
                setTimeout(() => card.classList.add("show"), 10);
            }
        } else {
            // ปิดการ์ดอื่นๆ
            card.classList.remove("show"); 
            setTimeout(() => { card.style.display = "none"; }, 500);
        }
    });
}



function toggleCardTwo(id1, id2) {
    [id1, id2].forEach(id => {
        var card = document.getElementById(id);
        if (card) {
            if (card.classList.contains("show")) {
                card.classList.remove("show");
                setTimeout(() => { card.style.display = "none"; }, 500); // ซ่อนหลังจาก animation จบ
            } else {
                card.style.display = "block";
                setTimeout(() => { card.classList.add("show"); }, 10); // เริ่ม animation
            }
        }
    });
}
