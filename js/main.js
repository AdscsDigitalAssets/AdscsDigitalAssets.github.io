document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}}));


(function(){
  function tryNext(img){
    var list=(img.getAttribute('data-srcs')||'').split('|').filter(Boolean);
    var idx=parseInt(img.getAttribute('data-src-index')||'0',10)+1;
    if(idx<list.length){img.setAttribute('data-src-index',idx); img.src=list[idx];}
  }
  document.querySelectorAll('img[data-srcs]').forEach(function(img){
    img.addEventListener('error', function(){tryNext(img);});
  });
})();
