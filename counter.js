/* PediaOS visit counter — GoatCounter (cookie-free, no personal data).
   Dashboard: https://drvigneshn.goatcounter.com  (code "drvigneshn")
   The footer number appears only once "Allow adding visitor counts on your website"
   is ticked in GoatCounter settings; until then it stays hidden. */
(function(){
  var GC = 'https://drvigneshn.goatcounter.com';
  var s = document.createElement('script');
  s.async = true; s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', GC + '/count');
  document.head.appendChild(s);

  var el = document.getElementById('visits');
  if (!el || !window.fetch) return;
  fetch(GC + '/counter/TOTAL.json')
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(d){
      if (!d || d.count == null) return;
      el.textContent = String(d.count) + ' visits since launch';
      el.hidden = false;
    })
    .catch(function(){});
})();
