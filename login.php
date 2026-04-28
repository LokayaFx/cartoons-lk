<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Login â€” CartoonsLK</title>
  <meta name="robots" content="noindex, nofollow" />

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand:   { 400:'#fb923c',500:'#f97316',600:'#ea6c0a' },
            surface: { 900:'#0d0d0f',800:'#18181b',700:'#27272a',600:'#3f3f46' }
          },
          fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] },
        }
      }
    }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />

  <style>
    body {
      background: radial-gradient(ellipse 80% 60% at 50% -20%, rgba(249,115,22,0.15) 0%, transparent 60%),
                  #0d0d0f;
    }
  </style>
</head>

<body class="dark font-sans text-zinc-100 flex items-center justify-center min-h-screen p-4">

  <!-- Back to site -->
  <a href="index.php" class="fixed top-4 left-4 flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors z-10">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
    </svg>
    Back to site
  </a>

  <!-- â”€â”€ Login Card â”€â”€ -->
  <div class="login-card w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-fade-in">

    <!-- Brand -->
    <div class="text-center mb-8">
      <div class="w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-500/30
                  flex items-center justify-center text-3xl mx-auto mb-4 shadow-[0_0_20px_rgba(249,115,22,0.25)]">
        ðŸ“º
      </div>
      <h1 class="text-xl font-bold text-white">Admin Access</h1>
      <p class="text-sm text-zinc-500 mt-1">CartoonsLK Dashboard</p>
    </div>

    <!-- Error box -->
    <div id="error-box"
         class="hidden mb-5 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400 text-center">
    </div>

    <!-- Google Sign-In -->
    <button id="google-btn" onclick="signInWithGoogle()"
            class="btn-google w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl text-sm font-semibold text-zinc-200 cursor-pointer">
      <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <span id="btn-text">Continue with Google</span>
      <div id="btn-spinner" class="spinner hidden"></div>
    </button>

    <!-- Divider -->
    <div class="flex items-center gap-3 my-5">
      <div class="flex-1 h-px bg-zinc-800"></div>
      <span class="text-xs text-zinc-600">or</span>
      <div class="flex-1 h-px bg-zinc-800"></div>
    </div>

    <!-- Email / Password -->
    <form id="email-form" onsubmit="signInWithEmail(event)">
      <div class="mb-3">
        <label for="login-email" class="text-xs font-medium text-zinc-400 mb-1.5 block">Email</label>
        <input id="login-email" type="email" required autocomplete="email"
               placeholder="admin@example.com"
               class="input-field" />
      </div>
      <div class="mb-5">
        <label for="login-password" class="text-xs font-medium text-zinc-400 mb-1.5 block">Password</label>
        <div class="relative">
          <input id="login-password" type="password" required autocomplete="current-password"
                 placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                 class="input-field pr-10" />
          <button type="button" id="toggle-pw"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </button>
        </div>
      </div>
      <button type="submit" id="email-btn"
              class="btn-primary w-full justify-center py-3 rounded-2xl text-sm">
        <span id="email-btn-text">Sign In</span>
        <div id="email-spinner" class="spinner border-white/30 border-t-white hidden"></div>
      </button>
    </form>

    <!-- Note -->
    <p class="text-center text-xs text-zinc-600 mt-6">
      ðŸ”’ Access restricted to authorised administrators only.<br/>No registration available.
    </p>
  </div>

  <!-- Toast -->
  <div id="toast" class="toast bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-sm text-zinc-200 shadow-xl"></div>

  <!-- Firebase SDKs -->
  <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
  <script src="js/firebase-config.js"></script>
  <script src="js/auth.js"></script>
</body>
</html>

