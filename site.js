// Stacked cards: a marked section stays put while the next one slides up over it.
(function(){
  var contact=document.querySelector('.contact');
  if(contact){var p=contact.previousElementSibling;while(p&&p.tagName!=='SECTION'&&p.tagName!=='HEADER')p=p.previousElementSibling;
    if(p)p.classList.add('precontact')}
  var c=document.querySelectorAll('.cardstack');
  function f(){c.forEach(function(e){e.style.top=Math.min(0,innerHeight-e.offsetHeight)+'px'})}
  addEventListener('resize',f);addEventListener('load',f);f();
  if('ResizeObserver' in window){var ro=new ResizeObserver(f);c.forEach(function(e){ro.observe(e)})}
})();
