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
    const sectionHeight = window.innerHeight / 4; // Chia màn hình thành 4 phần
    
    // Lướt qua từng phần tử trong biến chapters
    chapters.forEach((chapter, index) => { // chapter = các chapter trong mảng / index = vị trí của chapter trong mảng
        const rect = chapter.getBoundingClientRect(); // Lấy vị trí của các chapter
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2){ // kiểm tra vị trí của chapter có ở giữa màn hình hay không
            currentColor = colors[index];
        }
        else if (rect.top && rect.bottom < window.innerHeight){ // Điều kiện đặc biệt cho thẻ Footer khi muốn giữ nguyên màu cuối cùng khi scroll tới Footer
            currentColor = colors[index];
        }
    });

    contents.forEach((content) => {
        const rect = content.getBoundingClientRect();
        
        // Kiểm tra phần tử có nằm trong 3 phần trên cùng (phần 1,2,3)
        if (rect.top <= 3 * sectionHeight && rect.bottom <= 3 * sectionHeight) {
            content.style.opacity = '1';
        } else {
            content.style.opacity = '0';
        }
    });

    document.body.style.backgroundColor = currentColor;
});

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const speed = 0.03; // Tốc độ di chuyển
    const bgWidth = 1920; // Chiều rộng gốc của ảnh background
    
    // Tính toán phần trăm di chuyển dựa trên chiều rộng ảnh
    const xOffset = (mouseX / window.innerWidth) * bgWidth * speed;
    const yOffset = (mouseY / window.innerHeight) * 100 * speed;
    
    document.body.style.backgroundPosition = 
        `${-xOffset}px ${50 - yOffset}%`;
});
