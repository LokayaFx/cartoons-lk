<?php
$pageTitle = 'Movies — Cartoons LK';
include 'includes/header.php';
?>

<main class="flex-grow flex flex-col items-center justify-center p-6 text-center animate-fade-in">
  <!-- Icon with animated ring -->
  <div class="relative mb-8">
    <div class="w-24 h-24 rounded-3xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-5xl shadow-lg relative z-10">🎬</div>
    <div class="absolute inset-0 rounded-3xl border-2 border-brand-500/30 animate-ping opacity-20"></div>
  </div>

  <h1 class="text-4xl font-extrabold text-white mb-3 glow-text">Movies Section</h1>
  <p class="text-zinc-500 max-w-sm mb-10 text-sm leading-relaxed">
    We're curating the best classic Sinhala dubbed movies for you.<br/>Coming very soon! 🍿
  </p>

  <!-- Countdown placeholder cards -->
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl w-full mb-10">
    <?php
    $teaser = [
      ['🧙','Fantasy','Lion & Witch'],
      ['🚀','Sci-Fi','Space Journey'],
      ['🦁','Adventure','Jungle Tales'],
      ['🤖','Action','Robot Wars'],
    ];
    foreach ($teaser as $item): ?>
    <div class="bg-surface-800 border border-zinc-800/60 rounded-2xl p-4 flex flex-col items-center gap-2 glow-hover cursor-default relative overflow-hidden group">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span class="text-3xl"><?= $item[0] ?></span>
      <span class="text-[10px] font-semibold text-brand-400 uppercase tracking-wide"><?= $item[1] ?></span>
      <span class="text-xs text-zinc-400 font-medium font-sinhala"><?= $item[2] ?></span>
      <span class="badge-new" style="position:static;animation-delay:<?= rand(0,2) ?>s">SOON</span>
    </div>
    <?php endforeach; ?>
  </div>

  <!-- Notify CTA -->
  <div class="bg-surface-800 border border-zinc-800/60 rounded-2xl p-6 max-w-sm w-full glow-hover">
    <p class="text-sm font-semibold text-white mb-1">Get notified when Movies launch</p>
    <p class="text-xs text-zinc-500 mb-4">Submit your email below and we'll let you know!</p>
    <div class="flex gap-2">
      <input type="email" placeholder="your@email.com"
        class="input-field flex-1 text-xs py-2.5" id="notify-email" />
      <button onclick="notifyClick()" class="btn-primary text-xs px-4 py-2.5 rounded-xl whitespace-nowrap" id="notify-btn">
        Notify Me
      </button>
    </div>
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
      <a href="submits.php" class="footer-link">Submit</a>
      <a href="contact.php" class="footer-link">Contact</a>
      <a href="terms.php" class="footer-link">Terms</a>
    </div>
    <p class="text-xs text-zinc-700">© 2026 CartoonsLK · Made with ❤️ in Sri Lanka</p>
  </div>
</footer>

<script>
function notifyClick() {
  const input = document.getElementById('notify-email');
  const btn   = document.getElementById('notify-btn');
  if (!input.value.includes('@')) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 600);
    return;
  }
  btn.innerHTML = '✓ Done!';
  btn.disabled = true;
  btn.style.background = '#22c55e';
  input.value = '';
}
// Scroll to top
const scrollBtn = document.getElementById('scroll-top');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 200);
  });
}
</script>

<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<script src="js/firebase-config.js"></script>
<script src="js/common.js"></script>
</body>
</html>
