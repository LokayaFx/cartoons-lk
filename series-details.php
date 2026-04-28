<?php
$pageTitle = 'Episodes — Cartoons LK';
include 'includes/header.php';
?>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-10 flex flex-col md:flex-row gap-8 items-center md:items-end">
        <img id="series-img" src="" class="w-48 aspect-video object-cover rounded-2xl border border-zinc-700 shadow-2xl" />
        <div class="text-center md:text-left">
            <h1 id="series-title" class="text-4xl font-extrabold text-white glow-text mb-2 font-sinhala">Loading…</h1>
            <p id="ep-count-text" class="text-zinc-500 text-sm">Episodes List</p>
        </div>
    </div>

    <div class="h-px bg-zinc-800/60 mb-10"></div>

    <div id="episodes-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        <!-- Episodes cards -->
    </div>
</main>

<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
<script src="js/firebase-config.js"></script>
<script src="js/common.js"></script>
<script src="js/series.js"></script>
</body>
</html>
