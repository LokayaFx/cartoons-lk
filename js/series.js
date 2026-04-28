/**
 * series.js — Logic for showing episodes of a specific series
 */

(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const seriesId  = urlParams.get('id');

  const sTitle  = document.getElementById('series-title');
  const sImg    = document.getElementById('series-img');
  const sImgSk  = document.getElementById('series-img-skeleton');
  const heroBg  = document.getElementById('series-hero-bg');
  const epGrid  = document.getElementById('episodes-grid');
  const epText  = document.getElementById('ep-count-text');

  // ── Scroll to top button ───────────────────────────────
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 200);
    });
  }

  if (!seriesId) {
    window.location.href = 'index.php';
    return;
  }

  // ── Load Series Info ───────────────────────────────────
  seriesRef.doc(seriesId).get().then(doc => {
    if (!doc.exists) return;
    const data = doc.data();
    sTitle.textContent = data.title;
    document.title = data.title + ' — Cartoons LK';

    // Set the hero image
    if (data.thumbnail) {
      sImg.src = data.thumbnail;
      sImg.onload = () => {
        if (sImgSk) sImgSk.style.display = 'none';
      };
      if (heroBg) heroBg.style.backgroundImage = `url('${data.thumbnail}')`;
    }
  });

  // ── Load Episodes ──────────────────────────────────────
  episodesRef.where('seriesId', '==', seriesId).orderBy('createdAt', 'asc').get()
    .then(snapshot => {
      epGrid.innerHTML = '';
      if (epText) epText.textContent = snapshot.size;

      if (snapshot.size === 0) {
        epGrid.innerHTML = `
          <div class="col-span-full flex flex-col items-center py-20 text-center gap-3">
            <div class="text-5xl">📭</div>
            <p class="text-zinc-500 font-medium">No episodes added yet.</p>
            <p class="text-zinc-600 text-sm">Check back soon!</p>
          </div>`;
        return;
      }

      let index = 0;
      snapshot.forEach(doc => {
        renderEpisode(doc.data(), ++index);
      });
    });

  function renderEpisode(data, num) {
    const card = document.createElement('a');
    card.href = data.redirect_url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'block cartoon-card bg-surface-800 rounded-xl overflow-hidden border border-zinc-800/60 glow-hover transition-all';

    card.innerHTML = `
      <div class="aspect-video relative">
        <img src="${data.thumbnail_url}" class="w-full h-full object-cover" loading="lazy" alt="${data.title}" />
        <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div class="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center shadow-lg">
            <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <span class="ep-num">EP ${num}</span>
      </div>
      <div class="p-3 text-center">
        <h4 class="text-xs font-bold font-sinhala line-clamp-1 text-zinc-200">${data.title}</h4>
      </div>
    `;
    epGrid.appendChild(card);
  }
})();
