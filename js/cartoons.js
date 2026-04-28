(function () {
  const seriesList    = document.getElementById('series-list');
  const sidebarArea   = document.getElementById('sidebar-widgets');
  let allSeriesCards  = [];

  // ── Load Series from Firestore ───────────────────────────
  seriesRef.orderBy('updatedAt', 'desc').get()
    .then(snapshot => {
      if (seriesList) {
        seriesList.innerHTML = '';
        snapshot.forEach(doc => {
          const data = { id: doc.id, ...doc.data() };
          renderSeriesCard(data);
        });
      }

      if (sidebarArea) {
        // Render Recent sidebar widget
        const recentWidget = document.createElement('div');
        recentWidget.className = 'bg-surface-800/40 border border-zinc-800/60 rounded-3xl p-6';
        recentWidget.innerHTML = `
          <h3 class="text-xs font-black text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <span class="w-1.5 h-4 bg-brand-500 rounded-full"></span> Latest Cartoons
          </h3>
          <div id="latest-series-sidebar" class="space-y-6"></div>
        `;
        sidebarArea.appendChild(recentWidget);
        
        const latestContainer = document.getElementById('latest-series-sidebar');
        snapshot.docs.slice(0, 5).forEach(doc => {
          renderSidebarItem(latestContainer, { id: doc.id, ...doc.data() });
        });
      }
    });

  function renderSeriesCard(data) {
    const postDate = data.updatedAt ? new Date(data.updatedAt.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently';
    
    const article = document.createElement('article');
    article.className = 'group flex flex-col gap-6 cartoon-item';
    
    article.innerHTML = `
      <div class="space-y-3">
        <h2 class="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-400 transition-colors tracking-tight leading-tight article-title">
          ${data.title} | <span class="font-sinhala text-lg font-medium opacity-80">${data.title_si || ''}</span>
        </h2>
        <div class="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
           <span class="flex items-center gap-1.5"><span class="text-brand-500 opacity-60">🕒</span> ${postDate}</span>
           <span class="flex items-center gap-1.5"><span class="text-brand-500 opacity-60">📂</span> Cartoons</span>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-[320px] aspect-video rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl relative flex-shrink-0">
          <img src="${data.thumbnail}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        <div class="flex flex-col justify-between items-start py-1">
          <p class="text-sm text-zinc-400 leading-relaxed line-clamp-3">
            Watch all episodes of ${data.title} Sinhala dubbed version in high quality. Exclusive cartoon collection for all Sri Lankan fans.
          </p>
          <a href="series-details.html?id=${data.id}" class="mt-6 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-lg shadow-brand-500/20 active:scale-95 group/btn">
            Read More <span class="group-hover/btn:translate-x-1 transition-transform">»</span>
          </a>
        </div>
      </div>
    `;
    seriesList.appendChild(article);
  }

  function renderSidebarItem(container, data) {
    const postDate = data.updatedAt ? new Date(data.updatedAt.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently';
    const item = document.createElement('a');
    item.href = `series-details.html?id=${data.id}`;
    item.className = 'flex gap-4 group/item';
    item.innerHTML = `
      <div class="w-20 h-14 rounded-lg overflow-hidden border border-zinc-800/80 flex-shrink-0">
        <img src="${data.thumbnail}" class="w-full h-full object-cover transition-transform group-hover/item:scale-110" />
      </div>
      <div class="flex flex-col justify-center gap-1">
        <h4 class="text-[11px] font-bold text-zinc-300 group-hover/item:text-brand-400 transition-colors line-clamp-2 leading-snug">
          ${data.title}
        </h4>
        <span class="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">${postDate}</span>
      </div>
    `;
    container.appendChild(item);
  }
})();
