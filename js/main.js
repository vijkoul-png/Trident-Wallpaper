
/* ===== extracted script block 1 ===== */
function sendToWhatsApp(e){
  e.preventDefault();
  const name=document.getElementById('n');
  const phone=document.getElementById('p');
  const requirement=document.getElementById('r');
  const details=document.getElementById('m');
  if(!name||!phone||!requirement||!details) return;
  const t='Hello Trident Wallpaper,%0A%0AName: '+encodeURIComponent(name.value)+'%0APhone: '+encodeURIComponent(phone.value)+'%0ARequirement: '+encodeURIComponent(requirement.value)+'%0ADetails: '+encodeURIComponent(details.value);
  window.open('https://wa.me/919811882211?text='+t,'_blank','noopener,noreferrer');
}

/* ===== extracted script block 2 ===== */
(function(){
  const tabs=[...document.querySelectorAll('.wallpaper-tab')];
  const panels=[...document.querySelectorAll('.wallpaper-panel')];

  function activate(id){
    tabs.forEach(t=>{
      const on=t.dataset.category===id;
      t.classList.toggle('is-active',on);
      t.setAttribute('aria-selected',on?'true':'false');
    });
    panels.forEach(p=>{
      p.hidden = p.dataset.categoryId !== id;
    });
  }

  tabs.forEach(t=>t.addEventListener('click',()=>{
    activate(t.dataset.category);
  }));

  const box=document.getElementById('wallpaper-lightbox');
  const image=document.getElementById('lightbox-image');
  const close=document.querySelector('.lightbox-close');

  document.querySelectorAll('.wallpaper-panel .category-image').forEach(card=>{
    card.addEventListener('click',()=>{
      const im=card.querySelector('img');
      if(!im || !im.src) return;
      image.src=im.src;
      image.alt='';
      box.hidden=false;
      document.body.style.overflow='hidden';
      close.focus();
    });
  });

  function shut(){
    box.hidden=true;
    image.removeAttribute('src');
    document.body.style.overflow='';
  }

  close.addEventListener('click',shut);
  box.addEventListener('click',e=>{
    if(e.target===box) shut();
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape' && !box.hidden) shut();
  });
})();

/* ===== extracted script block 3 ===== */
(function(){
  /* Main service/category cards have inline galleries.
     Only legacy detail cards may use separate gallery panels. */
  const cards=[...document.querySelectorAll('.service-card.detail-service-card')];
  const panels=[...document.querySelectorAll('.service-gallery-panel')];

  function openService(id){
    cards.forEach(c=>{
      const on=c.dataset.service===id;
      c.classList.toggle('is-active',on);
      c.setAttribute('aria-selected',on?'true':'false');
    });
    panels.forEach(p=>p.hidden=p.dataset.servicePanel!==id);
    const target=document.getElementById(id+'-panel');
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  }

  cards.forEach(c=>c.addEventListener('click',()=>openService(c.dataset.service)));

  document.querySelectorAll('.service-close').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const panel=btn.closest('.service-gallery-panel');
      if(panel) panel.hidden=true;
      cards.forEach(c=>{
        c.classList.remove('is-active');
        c.setAttribute('aria-selected','false');
      });
    });
  });

  const box=document.getElementById('wallpaper-lightbox');
  const lightImg=document.getElementById('lightbox-image');
  const close=document.querySelector('.lightbox-close');

  document.querySelectorAll('.service-gallery-panel .service-image-card img').forEach(img=>{
    img.addEventListener('click',e=>{
      e.stopPropagation();
      if(!box || !lightImg) return;
      lightImg.src=img.currentSrc||img.src;
      lightImg.alt=img.alt||'Trident Wallpaper design preview';
      box.hidden=false;
      document.body.style.overflow='hidden';
      if(close) close.focus();
    });
  });
})();

/* ===== extracted script block 4 ===== */
(function(){
  const cards=[...document.querySelectorAll('.detail-service-card')];
  const panels=[...document.querySelectorAll('.detail-service-gallery-panel')];

  function openDetail(id){
    cards.forEach(card=>{
      const active=card.dataset.detailService===id;
      card.classList.toggle('is-active',active);
      card.setAttribute('aria-selected',active?'true':'false');
    });
    panels.forEach(panel=>panel.hidden=panel.dataset.detailPanel!==id);
    const target=document.getElementById(id+'-gallery');
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  }

  cards.forEach(card=>{
    card.addEventListener('click',()=>openDetail(card.dataset.detailService));
  });

  document.querySelectorAll('.detail-service-close').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const panel=btn.closest('.detail-service-gallery-panel');
      if(panel) panel.hidden=true;
      cards.forEach(card=>{
        card.classList.remove('is-active');
        card.setAttribute('aria-selected','false');
      });
    });
  });

  const box=document.getElementById('wallpaper-lightbox');
  const lightImg=document.getElementById('lightbox-image');
  const close=document.querySelector('.lightbox-close');

  document.querySelectorAll('.detail-service-gallery-panel .service-image-card img').forEach(img=>{
    img.addEventListener('click',e=>{
      e.stopPropagation();
      if(!box || !lightImg) return;
      lightImg.src=img.currentSrc||img.src;
      lightImg.alt=img.alt||'Trident Wallpaper service image preview';
      box.hidden=false;
      document.body.style.overflow='hidden';
      if(close) close.focus();
    });
  });

  if(cards.length && panels.length) openDetail(cards[0].dataset.detailService);
})();

/* ===== extracted script block 5 ===== */
(function(){
  const cards=[...document.querySelectorAll('.service-card:not(.detail-service-card)')];

  cards.forEach(card=>{
    const gallery=card.querySelector('.inline-category-gallery');
    if(!gallery || gallery.querySelectorAll('img').length!==10) return;

    card.setAttribute('tabindex','0');
    card.setAttribute('role','button');
    card.setAttribute('aria-expanded','false');

    const toggle=()=>{
      const open=card.classList.toggle('category-open');
      card.setAttribute('aria-expanded',open?'true':'false');
    };

    card.addEventListener('click',e=>{
      /* Thumbnails stay inside this card. They do not open a second view. */
      if(e.target.closest('.inline-category-gallery')) return;
      toggle();
    });

    card.addEventListener('keydown',e=>{
      if(e.key==='Enter' || e.key===' '){
        e.preventDefault();
        toggle();
      }
    });
  });
})();

/* ===== extracted script block 6 ===== */
(function(){
  const cards=[...document.querySelectorAll('.restored-service-card')];

  cards.forEach(card=>{
    const gallery=card.querySelector('.restored-service-gallery');
    if(!gallery || gallery.querySelectorAll('img').length!==10) return;

    card.setAttribute('tabindex','0');
    card.setAttribute('role','button');
    card.setAttribute('aria-expanded','false');

    const toggle=()=>{
      const open=card.classList.toggle('service-gallery-open');
      card.setAttribute('aria-expanded',open?'true':'false');
    };

    card.addEventListener('click',e=>{
      /* Images are displayed inline and must never open a separate viewer. */
      if(e.target.closest('.restored-service-gallery')) return;
      toggle();
    });

    card.addEventListener('keydown',e=>{
      if(e.key==='Enter' || e.key===' '){
        e.preventDefault();
        toggle();
      }
    });
  });
})();

/* ===== extracted script block 7 ===== */
(function(){
  const toggle=document.getElementById('mobile-menu-toggle');
  const nav=document.getElementById('site-navigation');
  if(!toggle || !nav) return;

  const close=()=>{
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open navigation menu');
  };
  const open=()=>{
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Close navigation menu');
  };

  toggle.addEventListener('click',()=>nav.classList.contains('is-open')?close():open());
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') close();});
  window.addEventListener('resize',()=>{if(window.innerWidth>900) close();});
})();




(function(){
  const selector = [
    '#services .inline-category-gallery .service-image-card img',
    '.recovered-service-grid .restored-service-gallery .service-image-card img',
    '.service-gallery-panel .service-image-card img',
    '.detail-service-gallery-panel .service-image-card img'
  ].join(',');

  function openServiceImage(img){
    const box = document.getElementById('wallpaper-lightbox');
    const lightImg = document.getElementById('lightbox-image');
    if(!box || !lightImg || !img) return;

    lightImg.src = img.currentSrc || img.src;
    lightImg.alt = img.alt || 'Trident Wallpaper service image preview';
    box.hidden = false;
    document.body.style.overflow = 'hidden';

    const close = box.querySelector('.lightbox-close');
    if(close) close.focus();
  }

  document.addEventListener('click', function(e){
    const img = e.target.closest(selector);
    if(!img) return;

    /* Prevent the parent service card from handling the same click. */
    e.preventDefault();
    e.stopPropagation();
    openServiceImage(img);
  }, true);
})();



(function(){
  const track=document.querySelector('.reviews-track');
  const cards=[...document.querySelectorAll('.review-card')];
  const prev=document.querySelector('.review-prev');
  const next=document.querySelector('.review-next');
  const count=document.querySelector('.review-count');
  if(!track||!cards.length||!prev||!next)return;
  let index=0;
  function show(i){
    index=(i+cards.length)%cards.length;
    track.style.transform='translateX(-'+(index*100)+'%)';
    count.textContent=(index+1)+' / '+cards.length;
  }
  prev.addEventListener('click',()=>show(index-1));
  next.addEventListener('click',()=>show(index+1));
  let timer=setInterval(()=>show(index+1),7000);
  [prev,next].forEach(b=>b.addEventListener('click',()=>{clearInterval(timer);timer=setInterval(()=>show(index+1),7000)}));
  show(0);
})();
