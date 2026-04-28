/**
 * app.js — Homepage logic for loading Series
 */

(function () {
  const grid         = document.getElementById('series-grid');
  const topList      = document.getElementById('top-list');
  const heroTitle    = document.getElementById('hero-title');
  const heroDesc     = document.getElementById('hero-desc');
  const heroLink     = document.getElementById('hero-link');
  const heroContainer= document.getElementById('hero-img-container');

  // ── Load Series from Firestore ───────────────────────────
  seriesRef.orderBy('updatedAt', 'desc').get()
    .then(snapshot => {
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
    });

  function renderSeriesCard(data) {
    const card = document.createElement('a');
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
})();
