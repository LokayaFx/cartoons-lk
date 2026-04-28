<?php
$pageTitle = 'Cartoons LK — සිංහල කාටූන් එකතුව';
require_once 'includes/header.php';
?>

<!-- ── Ticker Marquee ─────────────────────────────────── -->
<div class="ticker-wrap">
  <div class="ticker-inner" id="ticker">
    <span><span class="ticker-dot">▶</span> ප්‍රියතම කාටූන් — Classic Sinhala Dubbed Cartoons</span>
    <span><span class="ticker-dot">⭐</span> නවතම Episodes දෛනිකව Add කෙරේ</span>
    <span><span class="ticker-dot">▶</span> Tom &amp; Jerry · Doraemon · Ninja Hattori · Sinchan</span>
    <span><span class="ticker-dot">⭐</span> Totally Free · No Ads · No Login Required</span>
    <!-- duplicate for infinite loop -->
    <span><span class="ticker-dot">▶</span> ප්‍රියතම කාටූන් — Classic Sinhala Dubbed Cartoons</span>
    <span><span class="ticker-dot">⭐</span> නවතම Episodes දෛනිකව Add කෙරේ</span>
    <span><span class="ticker-dot">▶</span> Tom &amp; Jerry · Doraemon · Ninja Hattori · Sinchan</span>
    <span><span class="ticker-dot">⭐</span> Totally Free · No Ads · No Login Required</span>
  </div>
</div>

<!-- ── Hero Header ────────────────────────────────────── -->
<header class="header-bg pt-12 pb-10 text-center px-4 animate-fade-in">
  <!-- Floating particles -->
  <div class="particles" id="particles-container"></div>

  <div class="max-w-2xl mx-auto relative z-10">
    <p class="text-brand-400 text-xs font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
      <span class="inline-block w-5 h-px bg-brand-500/40"></span>
      Recently Updated
      <span class="inline-block w-5 h-px bg-brand-500/40"></span>
    </p>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white glow-text leading-tight mb-3">
      ප්‍රියතම <span class="gradient-text">කාටූන්</span> මාලාවන්
    </h1>
    <p class="text-zinc-500 text-sm mb-8">Classic Sinhala dubbed cartoons from your childhood 🎉</p>

    <!-- Stats pills -->
    <div id="stats-bar" class="flex items-center justify-center gap-3 flex-wrap mb-8">
      <div class="stat-pill">
        <span>📺</span>
        <span>Series: <strong id="count-series">…</strong></span>
      </div>
      <div class="stat-pill">
        <span>🎞️</span>
        <span>Episodes: <strong id="count-episodes">…</strong></span>
      </div>
      <div class="stat-pill">
        <span>🌟</span>
        <span>Free Forever</span>
      </div>
    </div>

    <!-- Search -->
    <div class="relative max-w-xl mx-auto search-container">
      <input id="search-input" type="search" placeholder="Search series… (e.g. Doraemon)" 
        class="w-full bg-surface-800 border border-zinc-700/70 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/60 transition-all" />
    </div>
  </div>
</header>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-6">

  <!-- Category filter chips -->
  <div class="chips-row mb-6" id="cat-chips">
    <button class="cat-chip active" data-cat="all">🌐 All</button>
    <button class="cat-chip" data-cat="action">⚔️ Action</button>
    <button class="cat-chip" data-cat="comedy">😂 Comedy</button>
    <button class="cat-chip" data-cat="adventure">🗺️ Adventure</button>
    <button class="cat-chip" data-cat="fantasy">🧙 Fantasy</button>
    <button class="cat-chip" data-cat="educational">📚 Educational</button>
    <button class="cat-chip" data-cat="sports">⚽ Sports</button>
  </div>

  <!-- Series Grid -->
  <div id="series-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
    <!-- Skeleton loaders -->
    <?php for ($i = 0; $i < 12; $i++): ?>
    <div class="skeleton rounded-2xl aspect-video"></div>
    <?php endfor; ?>
  </div>

  <!-- No results state -->
  <div id="no-result" class="hidden-card flex-col items-center justify-center py-24 text-center gap-4 col-span-full">
    <div class="text-5xl">🔍</div>
    <p class="text-zinc-500 font-medium">No cartoons found for "<span id="search-term" class="text-zinc-300"></span>"</p>
    <button onclick="document.getElementById('search-input').value=''; document.getElementById('search-input').dispatchEvent(new Event('input'));" 
      class="btn-back mt-2">← Clear search</button>
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
      <a href="submits.php" class="footer-link">Submit</a>
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
<script src="js/app.js"></script>
</body>
</html>
