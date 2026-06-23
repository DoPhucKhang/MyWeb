// =======================
// Console
// =======================


const siteName = "Ẩm thực Việt Nam";

let topic = "Khám phá món ăn truyền thống";

let imageCount = 5;

let isReady = true;


console.log("Website:",siteName);

console.log("Chủ đề:",topic);

console.log("Số ảnh:",imageCount);

console.log("Sẵn sàng:",isReady);






// =======================
// Đổi nội dung
// =======================


const mainTitle =
document.getElementById("mainTitle");


const welcomeText =
document.getElementById("welcomeText");



if(mainTitle && welcomeText){

    mainTitle.textContent =
    "Ẩm thực Việt Nam";

    welcomeText.textContent =
    "Chào mừng bạn khám phá món ngon Việt Nam";

}





// =======================
// Nút lời chào
// =======================


const helloBtn =
document.getElementById("helloBtn");


const helloResult =
document.getElementById("helloResult");


if(helloBtn && helloResult){


helloBtn.addEventListener("click",function(){


helloResult.textContent =
"Cảm ơn bạn đã ghé thăm website Ẩm thực Việt Nam!";


});


}







// =======================
// Ẩn hiện giới thiệu
// =======================


const toggleAboutBtn =
document.getElementById("toggleAboutBtn");


const aboutContent =
document.getElementById("aboutContent");



if(toggleAboutBtn && aboutContent){


toggleAboutBtn.addEventListener("click",function(){


aboutContent.classList.toggle("hidden");


});


}







// =======================
// MENU
// =======================


const menuToggle =
document.getElementById("menuToggle");


const mainMenu =
document.getElementById("mainMenu");



if(menuToggle && mainMenu){


menuToggle.addEventListener("click",function(){


mainMenu.classList.toggle("active");


if(mainMenu.classList.contains("active")){

    menuToggle.textContent =
    "Đóng menu";

}else{

    menuToggle.textContent =
    "☰ Menu";

}


});



const links =
mainMenu.querySelectorAll("a");


links.forEach(function(link){


link.addEventListener("click",function(){


mainMenu.classList.remove("active");


menuToggle.textContent =
"☰ Menu";


});


});


}








// =======================
// Đổi giao diện
// =======================


const themeSelect =
document.getElementById("themeSelect");



if(themeSelect){


themeSelect.addEventListener("change",function(){


document.body.classList.remove(
"dark-mode",
"warm-mode"
);



if(themeSelect.value !== ""){


document.body.classList.add(
themeSelect.value
);


}



});


}







// =======================
// TÌM KIẾM ẢNH
// =======================


const searchInput =
document.getElementById("searchInput");


const searchItems =
document.querySelectorAll(".search-item");



if(searchInput){


searchInput.addEventListener("keyup",function(){


const keyword =
searchInput.value.toLowerCase().trim();



searchItems.forEach(function(item){


const text =
item.textContent.toLowerCase();



if(text.includes(keyword)){


item.style.display="";


}else{


item.style.display="none";


}



});


});


}







// =======================
// LỌC ẢNH
// =======================


const filterButtons =
document.querySelectorAll(".filter-btn");


const galleryItems =
document.querySelectorAll(".gallery-item");



filterButtons.forEach(function(button){


button.addEventListener("click",function(){


const filter =
button.dataset.filter;



galleryItems.forEach(function(item){


const category =
item.dataset.category;



if(
filter==="all" ||
category===filter
){


item.style.display="";


}else{


item.style.display="none";


}


});


});


});







// =======================
// FORM
// =======================


const contactForm =
document.getElementById("contactForm");


const fullName =
document.getElementById("fullName");


const email =
document.getElementById("email");


const formMessage =
document.getElementById("formMessage");



if(contactForm){


contactForm.addEventListener("submit",function(event){


event.preventDefault();



const nameValue =
fullName.value.trim();



const emailValue =
email.value.trim();




if(nameValue===""){


formMessage.textContent =
"Vui lòng nhập họ tên.";


formMessage.style.color="red";


return;


}





if(
emailValue==="" ||
!emailValue.includes("@")
){


formMessage.textContent =
"Vui lòng nhập email hợp lệ.";


formMessage.style.color="red";


return;


}





formMessage.textContent =
"Thông tin đã hợp lệ. Cảm ơn bạn!";


formMessage.style.color="green";



});


}
