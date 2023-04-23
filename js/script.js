var burger = document.querySelector('.header__burger');
var block0 = document.querySelectorAll('.footer__block');

burger.addEventListener('click', ()=> {
   burger.classList.toggle('active');
   document.querySelector('.header__list').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
   block0.forEach(item =>{
      item.classList.remove('active');
   });
});


// next

var title01 = document.querySelectorAll('.footer__title');

title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

//  next


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}

// next


var animates = document.querySelectorAll('.anim_item');

if(animates.length > 0) {
   window.addEventListener('scroll', animScroll);
   function animScroll() {
      for(let index = 0; index < animates.length; index++) {
         const anim = animates[index];
         const animHeight = anim.offsetHeight;
         const animOffset = offset(anim).top;
         const animStart = 4;

         let aniItemPoint = window.innerHeight - animHeight / animStart;

         if(animHeight > window.innerHeight) {
            aniItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if((pageYOffset > animOffset - aniItemPoint) && pageYOffset < (animOffset + animHeight)) {
            anim.classList.add('active');
         } else {
            // if(!anim.classList.contains('anim_no_h')) {
            //    anim.classList.remove('active');
            // }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
      }
   }
   setTimeout(() => {
      animScroll();
   }, 300);
}