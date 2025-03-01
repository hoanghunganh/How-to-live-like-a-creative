const colors = [
    "rgba(255, 129, 129, 0.8)",
    "rgba(255, 213, 2, 0.4)",
    "rgba(102, 199, 208, 0.6)",
    "rgba(66, 95, 156, 0.3)",
    "rgba(132, 205, 181, 0.6)",
    "rgba(184, 214, 82, 0.5)",
    "rgba(109, 210, 231, 0.6)",
    "rgba(240, 0, 78, 0.3)",
    "rgba(157, 132, 205, 0.8)",
    "rgba(72, 55, 145, 0.9)",
    "rgba(72, 55, 145, 0.9)",
    "rgba(72, 55, 145, 0.9)"
]; // Tạo 1 mảng các màu 

document.addEventListener("scroll", () => {
    const chapters = document.querySelectorAll(".main") // Tạo 1 biến arr chứa tất cả các thẻ div chapter
    
    let currentColor = ''; // tạo biến rỗng
    const contents = document.querySelectorAll('.wrapper');

    // Lướt qua từng phần tử trong biến chapters
    chapters.forEach((chapter, index) => { // chapter = các chapter trong mảng / index = vị trí của chapter trong mảng
        const rect = chapter.getBoundingClientRect(); // Lấy vị trí của các chapter
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2){ // kiểm tra vị trí của chapter có ở giữa màn hình hay không
            currentColor = colors[index];
        }
        else if (rect.top && rect.bottom < window.innerHeight){ // Điều kiện đặc biệt cho thẻ Footer khi muốn giữ nguyên màu cuối cùng khi scroll tới Footer
            currentColor = colors[index];
        }
        console.log(window.innerHeight/2)
        console.log(rect.top)
        console.log(rect.bottom)
    });

    contents.forEach((content) => {
        const rect = content.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 50 && rect.bottom <= window.innerHeight - 50){
            content.style.opacity = '1';
        }
        else{
            content.style.opacity = "0";
        }
        // console.log(window.innerHeight/10);
        // console.log(rect.top);
    })

    document.body.style.backgroundColor = currentColor;
});
