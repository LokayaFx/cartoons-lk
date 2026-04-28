<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Dashboard — CartoonsLK</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand:   { 400:'#fb923c',500:'#f97316',600:'#ea6c0a',700:'#c2570a' },
            surface: { 900:'#0d0d0f',800:'#18181b',700:'#27272a',600:'#3f3f46',500:'#52525b' }
          }
        }
      }
    }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body class="dark font-sans text-zinc-100 min-h-screen">

<div id="admin-app" class="hidden">
<nav class="sticky top-0 z-50 border-b border-zinc-800/70 backdrop-blur-xl bg-surface-900/90">
  <div class="flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8 max-w-full">
    <div class="flex items-center gap-3">
      <a href="index.php" class="flex items-center gap-2 font-bold text-sm">
        <span class="text-xl">📺</span> <span class="text-brand-400">Cartoons</span>LK
      </a>
      <span class="text-xs text-zinc-500">| Dashboard</span>
    </div>
    <div class="flex items-center gap-4">
        <span id="admin-email-display" class="text-xs text-zinc-500 hidden sm:block"></span>
        <button onclick="auth.signOut(); location.reload();" class="text-xs text-red-500 font-semibold cursor-pointer">Logout</button>
    </div>
  </div>
</nav>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
    
    <!-- —— SERIES MANAGEMENT —— -->
    <section>
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold flex items-center gap-2">📂 1. Manage Series (Categories)</h2>
        </div>
        <div class="bg-surface-800 p-6 rounded-2xl border border-zinc-800 mb-6">
            <form id="series-form" onsubmit="addSeries(event)" class="grid grid-cols-1 md:grid-cols-3 gap-4 h-full items-end">
                <div><label class="label">Series Title</label><input id="series-title" required class="input-field" placeholder="e.g. Tom and Jerry" /></div>
                <div><label class="label">Main Thumbnail URL</label><input id="series-thumb" required class="input-field" placeholder="https://..." /></div>
                <button type="submit" class="btn-primary h-[42px] justify-center">Create Series</button>
            </form>
        </div>
        <div class="table-container bg-surface-800 rounded-2xl border border-zinc-800 overflow-hidden">
            <table>
                <thead><tr><th>Thumb</th><th>Title</th><th class="text-right">Action</th></tr></thead>
                <tbody id="series-table-body"></tbody>
            </table>
        </div>
    </section>

    <div class="h-px bg-zinc-800"></div>

    <!-- —— EPISODE MANAGEMENT —— -->
    <section>
        <h2 class="text-xl font-bold flex items-center gap-2 mb-6">🎞️ 2. Manage Episodes</h2>
        <div class="bg-surface-800 p-6 rounded-2xl border border-zinc-800 mb-6">
            <form id="episode-form" onsubmit="addEpisode(event)" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div>
                    <label class="label">Choose Series</label>
                    <select id="ep-series-select" required class="input-field">
                        <option value="">-- Select Series --</option>
                    </select>
                </div>
                <div><label class="label">Episode Title</label><input id="ep-title" required class="input-field" placeholder="e.g. Episode 01" /></div>
                <div><label class="label">Video Link</label><input id="ep-redirect" required class="input-field" placeholder="YouTube URL" /></div>
                <div><label class="label">Thumbnail (Optional)</label><input id="ep-thumb" class="input-field" placeholder="Defaults to series thumb" /></div>
                <button type="submit" class="btn-primary col-span-full h-[42px] justify-center mt-2">Add Episode</button>
            </form>
        </div>
        
        <div class="table-container bg-surface-800 rounded-2xl border border-zinc-800 overflow-hidden">
            <table>
                <thead><tr><th>Series</th><th>Episode</th><th>Link</th><th class="text-right">Action</th></tr></thead>
                <tbody id="episodes-table-body"></tbody>
            </table>
        </div>
    </section>
    <div class="h-px bg-zinc-800"></div>

    <!-- ── MOVIE MANAGEMENT ── -->
    <section>
        <h2 class="text-xl font-bold flex items-center gap-2 mb-6">🍿 3. Manage Movies</h2>
        <div class="bg-surface-800 p-8 rounded-3xl border border-zinc-800 mb-6 glass-card">
            <form id="movie-form" onsubmit="addMovie(event)" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                <div><label class="label">Movie Title (English)</label><input id="movie-title" required class="input-field" placeholder="e.g. Harry Potter 5" /></div>
                <div><label class="label">Movie Title (Sinhala)</label><input id="movie-title-si" required class="input-field font-sinhala" placeholder="e.g. හැරි පොටර් 5" /></div>
                <div><label class="label">Thumbnail URL</label><input id="movie-thumb" required class="input-field" placeholder="https://..." /></div>
                <div><label class="label">Watch/Redirect Link</label><input id="movie-redirect" required class="input-field" placeholder="https://..." /></div>
                <div class="lg:col-span-2"><label class="label">Brief Description (Optional)</label><input id="movie-desc" class="input-field" placeholder="Brief movie info..." /></div>
                <button type="submit" class="btn-primary h-[42px] justify-center mt-2 w-full lg:w-auto">Add Movie</button>
            </form>
        </div>
        
        <div class="table-container bg-surface-800 rounded-2xl border border-zinc-800 overflow-hidden shadow-xl">
            <table>
                <thead><tr><th>Thumb</th><th>Title</th><th>Link</th><th class="text-right">Action</th></tr></thead>
                <tbody id="movies-table-body"></tbody>
            </table>
        </div>
    </section>
</main>
</div>

<div id="toast" class="toast bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-sm text-zinc-200"></div>

<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics-compat.js"></script>
<script src="js/firebase-config.js"></script>
<script src="js/admin.js"></script>
</body>
</html>
