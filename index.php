<?php
$pageTitle = 'Cartoons LK â€” à·ƒà·’à¶‚à·„à¶½ à¶šà·à¶§à·–à¶±à·Š à¶‘à¶šà¶­à·”à·€';
include 'includes/header.php';
?>


<header class="header-bg pt-10 pb-8 text-center px-4 animate-fade-in">
  <div class="max-w-2xl mx-auto">
    <p class="text-brand-400 text-xs font-semibold tracking-widest uppercase mb-2">Recently Updated</p>
    <h1 class="text-3xl font-extrabold text-white glow-text leading-tight mb-6">à¶´à·Šâ€à¶»à·’à¶ºà¶­à¶¸ à¶šà·à¶§à·–à¶±à·Š à¶¸à·à¶½à·à·€à¶±à·Š</h1>
    
    <div class="relative max-w-xl mx-auto search-container">
      <input id="search-input" type="search" placeholder="Search series..." class="w-full bg-surface-800 border border-zinc-700/70 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/60" />
    </div>
  </div>
</header>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-8">
  <div id="series-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    <!-- Will be populated with Series Cards -->
  </div>
</main>

<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
<script src="js/firebase-config.js"></script>
<script src="js/common.js"></script>
<script src="js/app.js"></script>
</body>
</html>

