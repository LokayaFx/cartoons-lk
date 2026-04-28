// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  auth.js â€” Login page logic
//  Firebase Google + Email/Password authentication
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

(function () {
  const errorBox = document.getElementById('error-box');
  const toastEl  = document.getElementById('toast');

  // â”€â”€ If already signed in as admin, redirect â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  auth.onAuthStateChanged(user => {
    if (user && user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      window.location.href = 'admin.php';
    }
  });

  // â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function showError(msg) {
    errorBox.textContent = msg;
    errorBox.classList.remove('hidden');
    errorBox.classList.add('shake');
    setTimeout(() => errorBox.classList.remove('shake'), 500);
  }
  function clearError() { errorBox.classList.add('hidden'); }

  function showToast(msg, ok = true) {
    toastEl.textContent = (ok ? 'âœ… ' : 'âŒ ') + msg;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 3500);
  }

  function setLoading(btnEl, spinnerEl, textEl, textStr, loading) {
    btnEl.disabled = loading;
    spinnerEl.classList.toggle('hidden', !loading);
    textEl.textContent = loading ? 'Please waitâ€¦' : textStr;
  }

  // â”€â”€ Verify admin email â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  function verifyAdmin(user) {
    if (user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      auth.signOut();
      throw new Error('Access denied: this email is not authorised.');
    }
  }

  // â”€â”€ Google Sign-In â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  window.signInWithGoogle = async function () {
    clearError();
    const btn     = document.getElementById('google-btn');
    const spinner = document.getElementById('btn-spinner');
    const btnText = document.getElementById('btn-text');
    setLoading(btn, spinner, btnText, 'Continue with Google', true);

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result   = await auth.signInWithPopup(provider);
      verifyAdmin(result.user);
      showToast('Logged in! Redirectingâ€¦');
      setTimeout(() => { window.location.href = 'admin.php'; }, 800);
    } catch (err) {
      setLoading(btn, spinner, btnText, 'Continue with Google', false);
      showError(err.message || 'Google sign-in failed');
    }
  };

  // â”€â”€ Email / Password Sign-In â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  window.signInWithEmail = async function (e) {
    e.preventDefault();
    clearError();
    const btn     = document.getElementById('email-btn');
    const spinner = document.getElementById('email-spinner');
    const text    = document.getElementById('email-btn-text');
    setLoading(btn, spinner, text, 'Sign In', true);

    const email    = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      verifyAdmin(result.user);
      showToast('Logged in! Redirectingâ€¦');
      setTimeout(() => { window.location.href = 'admin.php'; }, 800);
    } catch (err) {
      setLoading(btn, spinner, text, 'Sign In', false);
      const msg = (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found')
        ? 'Invalid email or password.'
        : (err.message || 'Sign-in failed');
      showError(msg);
    }
  };

  // â”€â”€ Toggle password visibility â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  document.getElementById('toggle-pw').addEventListener('click', () => {
    const pw = document.getElementById('login-password');
    pw.type = pw.type === 'password' ? 'text' : 'password';
  });
})();

