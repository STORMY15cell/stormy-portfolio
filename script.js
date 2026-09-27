const nav=document.querySelector('.nav');const menu=document.querySelector('.menu');menu?.addEventListener('click',()=>nav.classList.toggle('open'));
const copyBtn=document.getElementById('copyCrosshair');const code=document.getElementById('crosshairCode').textContent.trim();
copyBtn?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(code);copyBtn.innerHTML='COPIED ✓';setTimeout(()=>copyBtn.innerHTML='COPY CODE <span>⧉</span>',1600)}catch{window.prompt('Copy your Valorant crosshair code:',code)}});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.portfolio-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.portfolio-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const filter=btn.dataset.filter;document.querySelectorAll('.portfolio-item').forEach(item=>item.style.display=(filter==='all'||item.classList.contains(filter))?'block':'none');
}));
