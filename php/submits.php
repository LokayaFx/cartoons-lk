<?php
$pageTitle = 'Submits — Cartoons LK';
include 'includes/header.php';
?>

<main class="max-w-xl mx-auto p-8 w-full animate-fade-in">
  <div class="text-center mb-10">
    <div class="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-3xl mx-auto mb-4">📬</div>
    <h1 class="text-2xl font-bold text-white mb-2">Submit Cartoon</h1>
    <p class="text-sm text-zinc-500">Do you have a classic cartoon link? Share it with us!</p>
  </div>
  <form class="space-y-4">
    <div>
      <label class="label">Cartoon Title</label>
      <input type="text" placeholder="e.g. Robinhood Sinhala" class="input-field" />
    </div>
    <div>
      <label class="label">Video Link (YouTube/Dailymotion)</label>
      <input type="url" placeholder="https://..." class="input-field" />
    </div>
    <button type="button" class="btn-primary w-full justify-center">Send Submission</button>
  </form>
</main>

<footer class="border-t border-zinc-800/60 bg-surface-900 py-8 text-center mt-auto">
  <p class="text-xs text-zinc-600">&copy; 2026 CartoonsLK</p>
</footer>

<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<script src="js/firebase-config.js"></script>
<script src="js/common.js"></script>
</body>
</html>
