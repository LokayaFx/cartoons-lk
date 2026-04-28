<?php
$pageTitle = 'Contact Us — Cartoons LK';
include 'includes/header.php';
?>

<main class="max-w-xl mx-auto p-8 w-full animate-fade-in text-center">
    <div class="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-3xl mx-auto mb-4">📧</div>
    <h1 class="text-2xl font-bold text-white mb-2">Get in Touch</h1>
    <p class="text-sm text-zinc-500 mb-8">Email us at: <a href="mailto:support@cartoonslk.com" class="text-brand-400 font-medium">support@cartoonslk.com</a></p>
    
    <div class="space-y-4 text-left">
      <div><label class="label">Your Name</label><input type="text" class="input-field" /></div>
      <div><label class="label">Message</label><textarea class="input-field min-h-[120px]"></textarea></div>
      <button type="button" class="btn-primary w-full justify-center">Send Email</button>
    </div>
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
