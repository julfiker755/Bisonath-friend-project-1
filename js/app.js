// /Navber js for responsive for custom js
const btn=document.querySelector(".mobile");
btn.addEventListener("click",function(){
  const addshow=document.querySelector(".nav-item");
  this.querySelector('i').classList.toggle('fa-xmark');
   addshow.classList.toggle('show')
 
})
