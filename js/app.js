/**
 * app.js — Homepage logic for loading Series
 */

(function () {
<<<<<<< HEAD
  const grid         = document.getElementById('series-grid');
  const topList      = document.getElementById('top-list');
  const heroTitle    = document.getElementById('hero-title');
  const heroDesc     = document.getElementById('hero-desc');
  const heroLink     = document.getElementById('hero-link');
  const heroContainer= document.getElementById('hero-img-container');
=======
  const grid        = document.getElementById('series-grid');
  const searchIn    = document.getElementById('search-input');
  const noResult    = document.getElementById('no-result');
  const searchTerm  = document.getElementById('search-term');
  const catChips    = document.querySelectorAll('.cat-chip');
  const countSeries = document.getElementById('count-series');
  const countEp     = document.getElementById('count-episodes');
  let allCards      = [];
  let activeCategory = 'all';

  // ── Floating Particles ─────────────────────────────────
  (function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    const sizes  = [2, 3, 4, 3, 2];
    const delays = [0, 2, 4, 6, 8, 10, 12, 1, 3, 5];
    const durations = [8, 10, 12, 9, 11];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const s = sizes[i % sizes.length];
      p.style.cssText = `
        width:${s}px; height:${s}px;
        left:${Math.random()*100}%;
        animation-duration:${durations[i % durations.length] + Math.random()*3}s;
        animation-delay:${delays[i % delays.length] * -1}s;
        opacity: ${0.3 + Math.random()*0.5};
      `;
      container.appendChild(p);
    }
  })();

  // ── Scroll to Top ──────────────────────────────────────
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 200);
    });
  }

  // ── Category chips ─────────────────────────────────────
  catChips.forEach(chip => {
    chip.addEventListener('click', () => {
      catChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.cat;
      filterCards();
    });
  });

  // ── Load Series from Firestore ─────────────────────────
  let totalEpisodes = 0;
>>>>>>> 76d07265cbe322158ad39a67d7e5f09af748aa6c

  seriesRef.orderBy('updatedAt', 'desc').get()
    .then(snapshot => {
<<<<<<< HEAD
      const seriesData = [];
      snapshot.forEach(doc => seriesData.push({ id: doc.id, ...doc.data() }));

      if (grid) {
        grid.innerHTML = '';
        seriesData.forEach(data => renderSeriesCard(data));
      }

      if (topList) {
        topList.innerHTML = '';
        seriesData.slice(0, 7).forEach((data, index) => renderTopItem(data, index));
      }

      // Set Hero Banner with the latest series
      if (seriesData.length > 0) {
        const featured = seriesData[0];
        if (heroTitle) heroTitle.textContent = featured.title;
        if (heroDesc) heroDesc.textContent = `Watch ${featured.title} on CartoonsLK. High quality Sinhala dubbed episodes updated recently.`;
        if (heroLink) heroLink.href = `series-details.html?id=${featured.id}`;
        if (featured.thumbnail && heroContainer) {
          heroContainer.style.backgroundImage = `url('${featured.thumbnail}')`;
        }
      }
=======
      grid.innerHTML = '';
      if (countSeries) countSeries.textContent = snapshot.size;

      let epPromises = [];
      snapshot.forEach(doc => {
        const data = { id: doc.id, ...doc.data() };
        renderSeriesCard(data);
        epPromises.push(
          episodesRef.where('seriesId', '==', doc.id).get()
            .then(s => s.size)
        );
      });

      Promise.all(epPromises).then(counts => {
        const total = counts.reduce((a, b) => a + b, 0);
        if (countEp) animateCount(countEp, total);
      });

      if (countSeries) animateCount(countSeries, snapshot.size);
>>>>>>> 76d07265cbe322158ad39a67d7e5f09af748aa6c
    });

  function animateCount(el, target) {
    let current = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 40);
  }

  function renderSeriesCard(data) {
    const card = document.createElement('a');
<<<<<<< HEAD
    card.href = `series-details.html?id=${data.id}`;
    card.className = 'group relative block';
    
    card.innerHTML = `
      <div class="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-lg group-hover:border-brand-500/40 transition-all">
        <img src="${data.thumbnail}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        <!-- Badges -->
        <div class="absolute top-2 left-2 flex flex-col gap-1.5">
           <span class="bg-brand-500 text-white text-[9px] font-black px-2 py-0.5 rounded shadow-lg uppercase">Sub</span>
        </div>
        <div class="absolute top-2 right-2">
           <span class="bg-zinc-900/80 backdrop-blur-md text-white text-[9px] font-black px-2 py-0.5 rounded shadow-lg uppercase">Series</span>
        </div>
        
        <div class="absolute bottom-3 left-3 right-3">
          <h3 class="font-bold text-xs text-white group-hover:text-brand-400 transition-colors line-clamp-2 leading-tight uppercase tracking-tighter">
            ${data.title}
          </h3>
        </div>
      </div>
    `;
    grid.appendChild(card);
  }

  function renderTopItem(data, index) {
    const item = document.createElement('a');
    item.href = `series-details.html?id=${data.id}`;
    item.className = 'flex items-center gap-4 group/top py-1';
    
    item.innerHTML = `
      <span class="text-xl font-black text-zinc-700 italic w-6">${index + 1}</span>
      <div class="w-12 h-16 rounded-lg overflow-hidden border border-zinc-800/80 flex-shrink-0">
        <img src="${data.thumbnail}" class="w-full h-full object-cover group-hover/top:scale-110 transition-transform" />
      </div>
      <div class="flex-1">
        <h4 class="text-[11px] font-bold text-zinc-300 group-hover/top:text-brand-400 transition-colors line-clamp-2 leading-snug">
          ${data.title}
        </h4>
        <div class="flex items-center gap-2 mt-1">
           <span class="text-[8px] font-black text-brand-500 uppercase tracking-tighter">SI-Dub</span>
           <span class="text-[8px] font-bold text-zinc-600">• 2025</span>
        </div>
      </div>
    `;
    topList.appendChild(item);
  }
=======
    card.href = `series-details.php?id=${data.id}`;
    card.className = 'cartoon-card block bg-surface-800 rounded-2xl overflow-hidden border border-zinc-800/60 hover:border-brand-500/40 transition-all glow-hover animate-slide-up';
    card.dataset.title = (data.title || '').toLowerCase();
    card.dataset.cat   = (data.category || 'all').toLowerCase();

    const isNew = data.updatedAt && (Date.now()/1000 - data.updatedAt.seconds) < 60*60*24*7;

    card.innerHTML = `
      <div class="aspect-video relative overflow-hidden">
        <img src="${data.thumbnail}" alt="${data.title}" class="w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute bottom-2 left-3">
          <span class="text-[10px] font-bold text-brand-400 uppercase tracking-tighter bg-black/40 backdrop-blur-sm rounded px-1.5 py-0.5">Series</span>
        </div>
        ${isNew ? '<span class="badge-new">NEW</span>' : ''}
      </div>
      <div class="p-3">
        <h3 class="font-bold text-sm text-zinc-100 font-sinhala line-clamp-1">${data.title}</h3>
        <p class="text-[10px] text-zinc-500 mt-1 flex items-center gap-1">
          <svg class="w-3 h-3 text-brand-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          View Episodes →
        </p>
      </div>
    `;
    grid.appendChild(card);
    allCards.push(card);
  }

  function filterCards() {
    const q   = searchIn.value.trim().toLowerCase();
    let count = 0;
    allCards.forEach(card => {
      const matchSearch = !q || card.dataset.title.includes(q);
      const matchCat    = activeCategory === 'all' || card.dataset.cat === activeCategory;
      const show = matchSearch && matchCat;
      card.style.display = show ? '' : 'none';
      if (show) count++;
    });
    if (noResult)   noResult.style.display = count === 0 ? 'flex' : 'none';
    if (searchTerm) searchTerm.textContent = q;
  }

  searchIn.addEventListener('input', filterCards);
>>>>>>> 76d07265cbe322158ad39a67d7e5f09af748aa6c
})();
