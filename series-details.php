<?php
$pageTitle = 'Episodes — Cartoons LK';
include 'includes/header.php';
?>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

  <!-- Back button -->
  <a href="index.php" class="btn-back mb-8 inline-flex">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
    Back to Cartoons
  </a>

  <!-- Series hero section with blurred bg -->
  <div class="series-hero rounded-3xl mb-10 overflow-hidden border border-zinc-800/60">
    <div class="series-hero-bg" id="series-hero-bg"></div>
    <div class="series-hero-content p-8 flex flex-col md:flex-row gap-8 items-center md:items-end">
      <div class="relative flex-shrink-0">
        <img id="series-img" src="" alt=""
          class="w-52 aspect-video object-cover rounded-2xl border-2 border-zinc-700/60 shadow-2xl ring-2 ring-brand-500/20" />
        <!-- Shimmer while loading -->
        <div id="series-img-skeleton" class="skeleton absolute inset-0 rounded-2xl"></div>
      </div>
      <div class="text-center md:text-left">
        <p class="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-2">Now Watching</p>
        <h1 id="series-title" class="text-3xl sm:text-4xl font-extrabold text-white glow-text mb-3 font-sinhala">Loading…</h1>
        <div class="flex items-center gap-3 justify-center md:justify-start flex-wrap">
          <div class="stat-pill">
            <span>🎞️</span>
            <strong id="ep-count-text">—</strong>
            <span>Episodes</span>
          </div>
          <div class="stat-pill">
            <span>📺</span>
            <span>HD Quality</span>
          </div>
          <div class="stat-pill">
            <span>🇱🇰</span>
            <span>සිංහල</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="h-px bg-zinc-800/60 mb-8"></div>

  <!-- Episode grid header -->
  <div class="flex items-center justify-between mb-5">
    <h2 class="text-sm font-semibold text-zinc-400 uppercase tracking-wider">All Episodes</h2>
    <div class="text-xs text-zinc-600" id="ep-sort-label">Sorted by oldest first</div>
  </div>

  <div id="episodes-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
    <!-- Skeleton loaders -->
    <?php for ($i = 0; $i < 10; $i++): ?>
    <div class="skeleton rounded-xl aspect-video"></div>
    <?php endfor; ?>
  </div>
</main>

<!-- ── Footer ─────────────────────────────────────────── -->
<footer class="site-footer">
  <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
    <div class="flex items-center gap-2">
      <span class="text-xl">📺</span>
      <span class="footer-logo"><span class="text-brand-400">Cartoons</span><span class="text-zinc-400">LK</span></span>
    </div>
    <div class="flex items-center gap-5 flex-wrap justify-center">
      <a href="index.php" class="footer-link">Home</a>
      <a href="movies.php" class="footer-link">Movies</a>
      <a href="contact.php" class="footer-link">Contact</a>
      <a href="terms.php" class="footer-link">Terms</a>
    </div>
    <p class="text-xs text-zinc-700">© 2026 CartoonsLK · Made with ❤️ in Sri Lanka</p>
  </div>
</footer>

<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
<script src="js/firebase-config.js"></script>
<script src="js/common.js"></script>
<script src="js/series.js"></script>
</body>
</html>
