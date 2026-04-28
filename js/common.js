/**
 * common.js â€” Handles sidebar toggle and auth state across all pages
 */

(function () {
  const sidebar    = document.getElementById('sidebar');
  const overlay    = document.getElementById('sidebar-overlay');
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose  = document.getElementById('menu-close');
  const navAuth    = document.getElementById('nav-auth-links');

  if (!sidebar || !overlay || !menuToggle) return;

  function toggleMenu(open) {
    sidebar.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', () => toggleMenu(true));
  if (menuClose) menuClose.addEventListener('click', () => toggleMenu(false));
  overlay.addEventListener('click', () => toggleMenu(false));

  // â”€â”€ Auth state check for Sidebar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  if (navAuth && typeof auth !== 'undefined') {
    auth.onAuthStateChanged(user => {
      if (user && user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
        navAuth.innerHTML = `
          <div class="h-px bg-zinc-800 my-2"></div>
          <a href="admin.php" class="nav-link-item text-brand-500 bg-brand-500/5 border-brand-500/10">
            <span class="w-4">ðŸ› ï¸</span> Admin Dashboard
          </a>
          <button onclick="auth.signOut(); location.reload(); return false;" class="nav-link-item w-full text-zinc-500 hover:text-red-400">
            <span class="w-4">ðŸšª</span> Logout
          </button>`;
      } else {
        navAuth.innerHTML = ''; // Keep it hidden per user request
      }
    });
  }
})();

