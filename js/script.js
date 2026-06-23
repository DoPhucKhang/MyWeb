// Console

const siteName="Ẩm thực Việt Nam";

let topic="Món ăn truyền thống";

let imageCount=5;

let isReady=true;


console.log(siteName);

console.log(topic);

console.log(imageCount);

console.log(isReady);






// đổi tiêu đề


const mainTitle =
document.getElementById("mainTitle");


const welcomeText =
document.getElementById("welcomeText");



if(mainTitle){

mainTitle.textContent=
"Ẩm thực Việt Nam";

}



if(welcomeText){

welcomeText.textContent=
"Khám phá món ngon Việt Nam";

}






// nút chào


helloBtn.onclick=function(){


helloResult.textContent=
"Cảm ơn bạn đã ghé thăm!";


}







// ẩn hiện


toggleAboutBtn.onclick=function(){


aboutContent.classList.toggle("hidden");


}







// menu


menuToggle.onclick=function(){


mainMenu.classList.toggle("active");


}






// đổi theme


themeSelect.onchange=function(){


document.body.classList.remove(
"dark-mode",
"warm-mode"
);


if(this.value){

document.body.classList.add(this.value);

}

}







// tìm kiếm


searchInput.onkeyup=function(){


let keyword=this.value.toLowerCase();


document.querySelectorAll(".search-item")
.forEach(function(item){


let text=item.textContent.toLowerCase();



if(text.includes(keyword)){


item.style.display="";


}else{


item.style.display="none";


}


});


}








// lọc ảnh


document.querySelectorAll(".filter-btn")
.forEach(function(btn){


btn.onclick=function(){


let filter=this.dataset.filter;



document.querySelectorAll(".gallery-item")
.forEach(function(item){


if(
filter=="all" ||
item.dataset.category==filter
){


item.style.display="";


}else{


item.style.display="none";


}


});


}



});









// form


contactForm.onsubmit=function(e){


e.preventDefault();



let name=
fullName.value.trim();



let mail=
email.value.trim();



if(name==""){


formMessage.textContent=
"Vui lòng nhập họ tên";


formMessage.style.color="red";

return;

}




if(!mail.includes("@")){


formMessage.textContent=
"Email không hợp lệ";


formMessage.style.color="red";


return;


}



formMessage.textContent=
"Gửi thành công";


formMessage.style.color="green";


}
