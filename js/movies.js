/**
 * movies.js — Logic for fetching and rendering movies
 */

(function () {
  const moviesList = document.getElementById('movies-list');
  const recentPostsList = document.getElementById('recent-posts-list');

  // ── Load Movies ───────────────────────────
  moviesRef.orderBy('createdAt', 'desc').limit(10).get().then(snapshot => {
    moviesList.innerHTML = '';
    
    if (snapshot.size === 0) {
      moviesList.innerHTML = `
        <div class="text-center py-20 bg-surface-800/20 rounded-3xl border border-dashed border-zinc-800">
          <p class="text-zinc-500 text-xs font-bold uppercase tracking-widest">No movies found yet.</p>
        </div>
      `;
      return;
    }

    snapshot.forEach(doc => {
      const data = doc.data();
      renderMovieCard(data);
    });
  });

  // ── Load Recent Posts (Sidebar) ───────────────────────────
  moviesRef.orderBy('createdAt', 'desc').limit(5).get().then(snapshot => {
    recentPostsList.innerHTML = '';
    snapshot.forEach(doc => {
      renderRecentPost(doc.data());
    });
  });

  function renderMovieCard(data) {
    const postDate = data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently';
    
    const article = document.createElement('article');
    article.className = 'group flex flex-col gap-6';
    
    article.innerHTML = `
      <div class="space-y-3">
        <h2 class="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-400 transition-colors tracking-tight leading-tight">
          ${data.title} | <span class="font-sinhala text-lg font-medium opacity-80">${data.title_si || ''}</span>
        </h2>
        <div class="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
           <span class="flex items-center gap-1.5"><span class="text-brand-500 opacity-60">🕒</span> ${postDate}</span>
           <span class="flex items-center gap-1.5"><span class="text-brand-500 opacity-60">📂</span> Movies</span>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-[320px] aspect-video rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl relative flex-shrink-0">
          <img src="${data.thumbnail}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        <div class="flex flex-col justify-between items-start py-1">
          <p class="text-sm text-zinc-400 leading-relaxed line-clamp-3">
            ${data.description || 'Watch the classic Sinhala dubbed version of this amazing movie right here on CartoonsLK. High quality streaming available.'}
          </p>
          <a href="${data.redirect_url || '#'}" target="_blank" class="mt-6 inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-lg shadow-brand-500/20 active:scale-95 group/btn">
            Read More <span class="group-hover/btn:translate-x-1 transition-transform">»</span>
          </a>
        </div>
      </div>
    `;
    moviesList.appendChild(article);
  }

  function renderRecentPost(data) {
    const postDate = data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently';

    const item = document.createElement('a');
    item.href = data.redirect_url || '#';
    item.target = '_blank';
    item.className = 'flex gap-4 group/item';
    
    item.innerHTML = `
      <div class="w-20 h-14 rounded-lg overflow-hidden border border-zinc-800/80 flex-shrink-0 relative">
        <img src="${data.thumbnail}" class="w-full h-full object-cover transition-transform group-hover/item:scale-110" />
      </div>
      <div class="flex flex-col justify-center gap-1">
        <h4 class="text-[11px] font-bold text-zinc-300 group-hover/item:text-brand-400 transition-colors line-clamp-2 leading-snug">
          ${data.title}
        </h4>
        <span class="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">${postDate}</span>
      </div>
    `;
    recentPostsList.appendChild(item);
  }

})();
