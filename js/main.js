var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var page0 = document.getElementById('page0');
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var header = document.getElementById('header');
var page1_img = document.getElementById('page1_img');
var page1_arrows = document.getElementById('page1_arrows');
var btn01 = document.getElementById('btn01');
var btn02 = document.getElementById('btn02');
var page1_title = document.getElementById('page1_title');
var page2_words = document.getElementById('page2_words');
var page2_img = document.getElementById('page2_img');


// Функции для карточек переключения страниц start

function show1() {
   page0.classList.add('opac0');
   page1.classList.add('opac1');
   page1_title.classList.add('back3');
   btn01.classList.add('back1');
   page1.classList.add('back');
   page1_arrows.classList.add('back');
   page1_img.classList.add('back1');
   page1.classList.add('height1');
   header.classList.add('up');
}

function back() {
   page0.classList.remove('opac0');
   page1.classList.remove('opac1');
   page1_title.classList.remove('back3');
   btn01.classList.remove('back1');
   page1.classList.remove('back');
   page1_arrows.classList.remove('back');
   page1_img.classList.remove('back1');
   page1.classList.remove('height1');
   header.classList.remove('up');
}

function show2() {
   page0.classList.add('opac0');
   page2.classList.add('back1');
   page2.classList.add('opac1');
   page2.classList.add('height3');
   btn01.classList.add('back1');
   page2_words.classList.add('back4');
   page2_img.classList.add('back4');
   header.classList.add('up');
}

function back2() {
   page0.classList.remove('opac0');
   page2.classList.remove('back1');
   page2.classList.remove('opac1');
   page2.classList.remove('height3');
   btn01.classList.remove('back1');
   page2_words.classList.remove('back4');
   page2_img.classList.remove('back4');
   header.classList.remove('up');
}

// Функции для карточек переключения страниц end


// Функции для карточек page1 start

function move(){
   img2.classList.toggle('big');
   img2.classList.toggle('little');
   img2.classList.toggle('order3');
   img3.classList.toggle('order2');
   img3.classList.toggle('big');
   img1.classList.toggle('order1');
}

function move2(){
   img1.classList.toggle('big');
   img1.classList.toggle('little');
   img1.classList.toggle('order2');
   img2.classList.toggle('order1');
   img3.classList.toggle('order3');
   img2.classList.toggle('big');
   img2.classList.toggle('little');
}

// Функции для карточек page1 end

$(document).ready(function(){
   $('.wrapper').addClass('active');
});