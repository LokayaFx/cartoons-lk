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
    document.title = data.title + ' — Cartoons LK';
  });

  // ── Load Episodes link to this Series ──────────
  episodesRef.where('seriesId', '==', seriesId).orderBy('createdAt', 'asc').get()
    .then(snapshot => {
      epGrid.innerHTML = '';
      epText.textContent = `${snapshot.size} Episodes available`;
      
      if (snapshot.size === 0) {
        epGrid.innerHTML = '<p class="col-span-full text-zinc-600">No episodes added yet for this series.</p>';
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
    card.className = 'block cartoon-card bg-surface-800 rounded-xl overflow-hidden border border-zinc-800/60 transition-all';
    
    card.innerHTML = `
      <div class="aspect-video relative">
        <img src="${data.thumbnail_url}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
           <div class="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center shadow-glow">
             <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
           </div>
        </div>
      </div>
      <div class="p-3 text-center">
        <h4 class="text-xs font-bold font-sinhala">${data.title}</h4>
      </div>
    `;
    epGrid.appendChild(card);
  }
})();
