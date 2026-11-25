// Stacked cards: a marked section stays put while the next one slides up over it.
(function(){
  var contact=document.querySelector('.contact');
  if(contact){var p=contact.previousElementSibling;while(p&&p.tagName!=='SECTION'&&p.tagName!=='HEADER')p=p.previousElementSibling;
    if(p)p.classList.add('precontact')}
  var c=document.querySelectorAll('.cardstack');
  function f(){c.forEach(function(e){e.style.top=Math.min(0,innerHeight-e.offsetHeight)+'px'})}
  addEventListener('resize',f);addEventListener('load',f);f();
  if('ResizeObserver' in window){var ro=new ResizeObserver(f);c.forEach(function(e){ro.observe(e)})}
  // Screenshot rows only take keyboard focus when they actually scroll sideways.
  function rows(){document.querySelectorAll('.rc .phones').forEach(function(p){
    if(p.scrollWidth>p.clientWidth+4){p.tabIndex=0;p.setAttribute('role','group');p.setAttribute('aria-label','Screenshots. Scroll sideways to see them all.')}
    else{p.removeAttribute('tabindex');p.removeAttribute('role');p.removeAttribute('aria-label')}})}
  addEventListener('resize',rows);addEventListener('load',rows);rows();
})();
