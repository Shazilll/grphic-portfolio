const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.ph img').forEach(i=>i.parentElement.addEventListener('click',()=>{li.src=i.src;li.alt=i.alt;lb.showModal()}));
lb.addEventListener('click',()=>lb.close());
const vs=[...document.querySelectorAll('video')];
vs.forEach(v=>v.addEventListener('play',()=>vs.forEach(o=>{if(o!==v)o.pause()})));
