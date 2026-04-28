/**
 * series.js — Logic for showing episodes of a specific series
 */

(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const seriesId  = urlParams.get('id');
  
  const sTitle = document.getElementById('series-title');
  const sImg   = document.getElementById('series-img');
  const epGrid  = document.getElementById('episodes-grid');
  const epText  = document.getElementById('ep-count-text');

  if (!seriesId) {
    window.location.href = 'index.html';
    return;
  }

  // ── Load Series Info ───────────────────────────
  seriesRef.doc(seriesId).get().then(doc => {
    if (!doc.exists) return;
    const data = doc.data();
    sTitle.textContent = data.title;
    sImg.src = data.thumbnail;
    
    // Update Hero Background
    const heroBg = document.getElementById('series-hero-bg');
    if (heroBg) {
      heroBg.style.backgroundImage = `url('${data.thumbnail}')`;
    }
    
    document.title = data.title + ' — Cartoons LK';
  });

  // ── Load Episodes link to this Series ──────────
  episodesRef.where('seriesId', '==', seriesId).orderBy('createdAt', 'asc').get()
    .then(snapshot => {
      epGrid.innerHTML = '';
      if (epText) epText.textContent = snapshot.size;
      
      if (snapshot.size === 0) {
        epGrid.innerHTML = '<p class="col-span-full text-zinc-600 text-center py-20 text-sm">No episodes added yet for this series.</p>';
      }

      snapshot.forEach(doc => {
        const data = doc.data();
        renderEpisode(data);
      });
    });

  function renderEpisode(data) {
    const card = document.createElement('a');
    card.href = data.redirect_url;
    card.target = '_blank';
    card.className = 'group relative block cartoon-card bg-surface-800 rounded-3xl overflow-hidden border border-zinc-800/60 transition-all hover:border-brand-500/30 hover:scale-[1.02] shadow-xl';
    
    card.innerHTML = `
      <div class="aspect-video relative overflow-hidden">
        <img src="${data.thumbnail_url}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
           <div class="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/40 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
           </div>
        </div>
      </div>
      <div class="p-4 bg-gradient-to-t from-surface-900 to-transparent">
        <h4 class="text-xs font-bold font-sinhala leading-relaxed text-zinc-200 line-clamp-2">${data.title}</h4>
      </div>
    `;
    epGrid.appendChild(card);
  }
})();
