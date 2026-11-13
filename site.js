/* PediaOS site: phone menu toggle */
(function(){
  var nav=document.querySelector('header.nav'), btn=document.querySelector('.menu-btn');
  if(!nav||!btn) return;
  function set(open){ nav.classList.toggle('open',open); btn.setAttribute('aria-expanded',open); }
  btn.addEventListener('click',function(){ set(!nav.classList.contains('open')); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&nav.classList.contains('open')){ set(false); btn.focus(); } });
  document.addEventListener('click',function(e){ if(!e.target.closest('header.nav')||e.target.closest('.navlinks a')) set(false); });
})();
