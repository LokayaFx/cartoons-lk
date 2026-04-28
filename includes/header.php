<?php
$pageTitle = $pageTitle ?? 'Cartoons LK — සිංහල කාටූන් එකතුව';
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="si" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

<nav class="sticky top-0 z-50 border-b border-zinc-800/70 backdrop-blur-xl bg-surface-900/80">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
    <a href="index.php" class="flex items-center gap-2 group">
      <span class="text-xl">📺</span>
      <span class="font-bold text-base tracking-tight"><span class="text-brand-400">Cartoons</span><span class="text-zinc-300">LK</span></span>
    </a>
    <button id="menu-toggle" class="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</nav>

<div id="sidebar-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-300"></div>
<aside id="sidebar" class="fixed top-0 right-0 h-full w-[280px] bg-surface-900 border-l border-zinc-800 z-[70] translate-x-full transition-transform duration-300 ease-out flex flex-col">
  <div class="p-6 flex items-center justify-between border-b border-zinc-800">
    <span class="font-bold text-zinc-200">Navigation</span>
    <button id="menu-close" class="text-zinc-500 hover:text-white transition-colors cursor-pointer"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
  </div>
  <div class="p-6 flex flex-col gap-2 flex-grow overflow-y-auto">
    <a href="index.php" class="nav-link-item <?php echo $currentPage == 'index.php' ? 'active' : ''; ?>"><span class="w-4">📺</span> Cartoons</a>
    <a href="movies.php" class="nav-link-item <?php echo $currentPage == 'movies.php' ? 'active' : ''; ?>"><span class="w-4">🎬</span> Movies</a>
    <a href="submits.php" class="nav-link-item <?php echo $currentPage == 'submits.php' ? 'active' : ''; ?>"><span class="w-4">📬</span> Submits</a>
    <a href="contact.php" class="nav-link-item <?php echo $currentPage == 'contact.php' ? 'active' : ''; ?>"><span class="w-4">📧</span> Contact Us</a>
    <a href="terms.php" class="nav-link-item <?php echo $currentPage == 'terms.php' ? 'active' : ''; ?>"><span class="w-4">⚖️</span> Terms & Conditions</a>
    <div id="nav-auth-links" class="flex flex-col gap-2"></div>
  </div>
</aside>
