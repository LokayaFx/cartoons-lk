/**
 * app.js â€” Homepage logic for loading Series
 */

(function () {
  const grid       = document.getElementById('series-grid');
  const searchIn   = document.getElementById('search-input');
  let allSeries    = [];

  // â”€â”€ Load Series from Firestore â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  seriesRef.orderBy('updatedAt', 'desc').get()
    .then(snapshot => {
      grid.innerHTML = '';
      snapshot.forEach(doc => {
        const data = { id: doc.id, ...doc.data() };
        renderSeriesCard(data);
      });
    });

  function renderSeriesCard(data) {
    const card = document.createElement('a');
    card.href = `series-details.php?id=${data.id}`;
    card.className = 'cartoon-card block bg-surface-800 rounded-2xl overflow-hidden border border-zinc-800/60 hover:border-brand-500/30 transition-all';
    card.dataset.title = data.title.toLowerCase();
    
    card.innerHTML = `
      <div class="aspect-video relative overflow-hidden">
        <img src="${data.thumbnail}" alt="${data.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div class="absolute bottom-2 left-3">
          <span class="text-[10px] font-bold text-brand-400 uppercase tracking-tighter">Series</span>
        </div>
      </div>
      <div class="p-3">
        <h3 class="font-bold text-sm text-zinc-100 font-sinhala line-clamp-1">${data.title}</h3>
        <p class="text-[10px] text-zinc-500 mt-1">Click to view episodes â†’</p>
      </div>
    `;
    grid.appendChild(card);
    allSeries.push(card);
  }

  searchIn.addEventListener('input', () => {
    const q = searchIn.value.trim().toLowerCase();
    allSeries.forEach(card => {
      const match = !q || card.dataset.title.includes(q);
      card.style.display = match ? 'block' : 'none';
    });
  });
})();

