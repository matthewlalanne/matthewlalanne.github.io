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
// Email links: also copy the address, because a mailto link does nothing on a computer with no mail app set up.
(function(){
  var note;
  function say(t){
    if(!note){note=document.createElement('div');note.setAttribute('role','status');
      note.style.cssText='position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;background:#14244F;color:#fff;font:600 16px/1.3 Figtree,system-ui,sans-serif;padding:14px 20px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.25);max-width:calc(100vw - 32px);text-align:center;display:none';
      document.body.appendChild(note)}
    note.textContent=t;note.style.display='block';clearTimeout(say.t);say.t=setTimeout(function(){note.style.display='none'},6000)}
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="mailto:"]');if(!a)return;
    var addr=a.getAttribute('href').slice(7).split('?')[0];
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(addr).then(function(){say('Email address copied: '+addr)},function(){say('Email me at '+addr)})}
    else say('Email me at '+addr);
  });
})();
