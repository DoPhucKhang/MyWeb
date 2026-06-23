// =======================
// 1. Thông tin website cá nhân
// =======================

const siteName = "Ẩm thực Việt Nam";

let topic = "Khám phá hương vị truyền thống và văn hóa món ăn Việt";

let imageCount = 5;

let isReady = true;


// Hiển thị Console

console.log("Website:", siteName);

console.log("Chủ đề:", topic);

console.log("Số ảnh:", imageCount);

console.log("Đã sẵn sàng dùng JS?", isReady);

console.log("Kiểu dữ liệu topic:", typeof topic);





// =======================
// 2. Đổi tiêu đề bằng JavaScript
// =======================

const mainTitle = document.getElementById("mainTitle");

const welcomeText = document.getElementById("welcomeText");


if (mainTitle && welcomeText) {


    mainTitle.textContent =
    "Ẩm thực Việt Nam đã có JavaScript!";


    welcomeText.textContent =
    "Chào mừng bạn đến với hành trình khám phá món ngon Việt Nam.";


}







// =======================
// 3. Nút xem lời chào
// =======================

const helloBtn = document.getElementById("helloBtn");

const helloResult = document.getElementById("helloResult");


if (helloBtn && helloResult) {


    helloBtn.addEventListener("click", function () {


        helloResult.textContent =
        "Cảm ơn bạn đã ghé thăm website Ẩm thực Việt Nam!";


    });


}







// =======================
// 4. Nút Ẩn / Hiện giới thiệu
// =======================

const toggleAboutBtn =
document.getElementById("toggleAboutBtn");


const aboutContent =
document.getElementById("aboutContent");



if (toggleAboutBtn && aboutContent) {


    toggleAboutBtn.addEventListener("click", function () {


        aboutContent.classList.toggle("hidden");


    });


}
