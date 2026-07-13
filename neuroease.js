(function(){
  if(!('IntersectionObserver' in window))return;
  var delays=['reveal-d1','reveal-d2','reveal-d3','reveal-d4','reveal-d5','reveal-d6','reveal-d7','reveal-d8'];
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var el=e.target;
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  },{threshold:0.12});
  var pid=0;
  document.querySelectorAll('.reveal').forEach(function(el){
    var parent=el.parentNode;
    if(parent && !parent._rid){parent._rid=++pid}
    var siblings=Array.prototype.filter.call(parent.children,function(c){return c.classList.contains('reveal')});
    var idx=siblings.indexOf(el);
    if(idx<delays.length)el.classList.add(delays[idx]);
    observer.observe(el);
  });
})();
