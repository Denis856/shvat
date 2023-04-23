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