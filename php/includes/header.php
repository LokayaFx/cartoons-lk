<?php
$pageTitle = $pageTitle ?? 'Cartoons LK — සිංහල කාටූන් එකතුව';
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="si" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="CartoonsLK — ලංකාවේ සිංහල කාටූන් ලොවේ හොඳම collection එක. Watch classic Sinhala dubbed cartoons online for free." />
  <title><?php echo htmlspecialchars($pageTitle); ?></title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand:   { 400:'#fb923c',500:'#f97316',600:'#ea6c0a' },
            surface: { 900:'#0d0d0f',800:'#18181b',700:'#27272a',600:'#3f3f46',500:'#52525b' }
          },
          fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'], sinhala: ['"Noto Sans Sinhala"','sans-serif'] },
        }
      }
    }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+Sinhala:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body class="dark font-sans text-zinc-100 min-h-screen flex flex-col">

<!-- ── Scroll to Top Button ─────────────────────────── -->
<button id="scroll-top" aria-label="Scroll to top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/></svg>
</button>

<nav class="sticky top-0 z-50 border-b border-zinc-800/70 backdrop-blur-xl bg-surface-900/80">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 gap-4">
    <a href="index.php" class="flex items-center gap-2 group flex-shrink-0">
      <span class="text-xl transition-transform group-hover:scale-110 duration-200">📺</span>
      <span class="font-bold text-base tracking-tight">
        <span class="text-brand-400">Cartoons</span><span class="text-zinc-300">LK</span>
      </span>
    </a>

    <!-- Desktop quick search -->
    <div class="hidden sm:flex flex-1 max-w-xs relative">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
      <input id="nav-search" type="search" placeholder="Search cartoons…" onclick="window.location.href='index.php'" readonly
        class="w-full bg-surface-800 border border-zinc-700/70 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none cursor-pointer text-zinc-400 hover:border-brand-500/40 transition-colors" />
    </div>

    <button id="menu-toggle" class="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer flex-shrink-0">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</nav>

<div id="sidebar-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-300"></div>
<aside id="sidebar" class="fixed top-0 right-0 h-full w-[280px] bg-surface-900 border-l border-zinc-800 z-[70] translate-x-full transition-transform duration-300 ease-out flex flex-col">
  <div class="p-5 flex items-center justify-between border-b border-zinc-800">
    <div class="flex items-center gap-2">
      <span class="text-lg">📺</span>
      <span class="font-bold text-sm"><span class="text-brand-400">Cartoons</span><span class="text-zinc-300">LK</span></span>
    </div>
    <button id="menu-close" class="text-zinc-500 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-zinc-800">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>

  <!-- Navigation Links -->
  <div class="p-4 flex flex-col gap-1 flex-grow overflow-y-auto">
    <p class="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest px-3 mb-1">Menu</p>
    <a href="index.php" class="nav-link-item <?php echo $currentPage == 'index.php' ? 'active' : ''; ?>">
      <span>📺</span> Cartoons
    </a>
    <a href="movies.php" class="nav-link-item <?php echo $currentPage == 'movies.php' ? 'active' : ''; ?>">
      <span>🎬</span> Movies
    </a>
    <a href="submits.php" class="nav-link-item <?php echo $currentPage == 'submits.php' ? 'active' : ''; ?>">
      <span>📬</span> Submits
    </a>
    <a href="contact.php" class="nav-link-item <?php echo $currentPage == 'contact.php' ? 'active' : ''; ?>">
      <span>📧</span> Contact Us
    </a>
    <a href="terms.php" class="nav-link-item <?php echo $currentPage == 'terms.php' ? 'active' : ''; ?>">
      <span>⚖️</span> Terms &amp; Conditions
    </a>
    <div id="nav-auth-links" class="flex flex-col gap-1"></div>
  </div>

  <!-- Sidebar Footer -->
  <div class="p-4 border-t border-zinc-800">
    <p class="text-[11px] text-zinc-600 text-center">© 2026 CartoonsLK · Made with ❤️ in Sri Lanka</p>
  </div>
</aside>
