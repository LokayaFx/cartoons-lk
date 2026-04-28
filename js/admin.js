/**
 * admin.js â€” Admin logic for Series & Episodes
 */

(function () {
  const adminApp      = document.getElementById('admin-app');
  const emailDisplay  = document.getElementById('admin-email-display');
  const seriesTable   = document.getElementById('series-table-body');
  const epTable       = document.getElementById('episodes-table-body');
  const epSeriesSel   = document.getElementById('ep-series-select');
  const toastEl       = document.getElementById('toast');

  let cachedSeries = {};

  // â”€â”€ Auth gate â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  auth.onAuthStateChanged(user => {
    if (!user || user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      window.location.href = 'login.php';
      return;
    }
    emailDisplay.textContent = user.email;
    adminApp.classList.remove('hidden');
    loadAll();
  });

  function showToast(msg, ok=true) {
    toastEl.textContent = (ok ? 'âœ… ' : 'âŒ ') + msg;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 3000);
  }

  function loadAll() {
    loadSeries();
    loadEpisodes();
  }

  // â”€â”€ Manage Series â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  window.addSeries = async function(e) {
    e.preventDefault();
    const title = document.getElementById('series-title').value.trim();
    const thumb = document.getElementById('series-thumb').value.trim();
    
    try {
      await seriesRef.add({ title, thumbnail: thumb, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
      showToast('Series created!');
      document.getElementById('series-form').reset();
      loadSeries();
    } catch(e) { showToast(e.message, false); }
  };

  async function loadSeries() {
    const snap = await seriesRef.orderBy('updatedAt', 'desc').get();
    seriesTable.innerHTML = '';
    epSeriesSel.innerHTML = '<option value="">-- Select Series --</option>';
    cachedSeries = {};

    snap.forEach(doc => {
      const data = doc.data();
      cachedSeries[doc.id] = data;
      
      // Update Dropdown
      const opt = document.createElement('option');
      opt.value = doc.id;
      opt.textContent = data.title;
      epSeriesSel.appendChild(opt);

      // Update Table
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><img src="${data.thumbnail}" class="thumb-sm" /></td>
        <td class="font-bold">${data.title}</td>
        <td class="text-right"><button onclick="deleteSeries('${doc.id}')" class="btn-danger">Delete</button></td>
      `;
      seriesTable.appendChild(tr);
    });
  }

  window.deleteSeries = async function(id) {
    if (!confirm('Delete this series and all its episodes?')) return;
    await seriesRef.doc(id).delete();
    // Ideally delete linked episodes too...
    loadSeries();
  };

  // â”€â”€ Manage Episodes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  window.addEpisode = async function(e) {
    e.preventDefault();
    const seriesId = epSeriesSel.value;
    const title    = document.getElementById('ep-title').value.trim();
    const redirect = document.getElementById('ep-redirect').value.trim();
    const thumb    = document.getElementById('ep-thumb').value.trim();
    
    try {
      await episodesRef.add({
        seriesId,
        title,
        redirect_url: redirect,
        thumbnail_url: thumb || cachedSeries[seriesId].thumbnail,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      // Update series updatedAt to bring it to top on home
      await seriesRef.doc(seriesId).update({ updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
      
      showToast('Episode added!');
      document.getElementById('episode-form').reset();
      loadEpisodes();
    } catch(e) { showToast(e.message, false); }
  };

  async function loadEpisodes() {
    const snap = await episodesRef.orderBy('createdAt', 'desc').limit(20).get();
    epTable.innerHTML = '';
    snap.forEach(doc => {
      const data = doc.data();
      const sTitle = cachedSeries[data.seriesId]?.title || 'Unknown';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="text-xs text-zinc-500">${sTitle}</td>
        <td class="font-semibold">${data.title}</td>
        <td class="text-xs truncate max-w-[100px]">${data.redirect_url}</td>
        <td class="text-right"><button onclick="deleteEpisode('${doc.id}')" class="btn-danger">Delete</button></td>
      `;
      epTable.appendChild(tr);
    });
  }

  window.deleteEpisode = async function(id) {
    await episodesRef.doc(id).delete();
    loadEpisodes();
  };

})();

