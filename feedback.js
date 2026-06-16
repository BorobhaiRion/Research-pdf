// Feedback form logic (vanilla JS)
// Uses window.supabaseClient and window.supabaseConfigured
let btn, modal, closeBtn, cancelBtn, form, statusEl, submitBtn;

function init() {
  btn = document.getElementById('feedback-btn');
  modal = document.getElementById('feedback-modal');
  closeBtn = document.getElementById('feedback-close');
  cancelBtn = document.getElementById('feedback-cancel');
  form = document.getElementById('feedback-form');
  statusEl = document.getElementById('feedback-status');
  submitBtn = document.getElementById('feedback-submit');

  function openModal() {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    const m = form.querySelector('[name="message"]');
    if (m) m.focus();
  }
  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    statusEl.textContent = '';
  }

  btn.addEventListener('click', () => {
    // open modal - public form
    openModal();
  });
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Basic sanitization and limits
  function sanitize(str, maxLen) {
    if (!str) return '';
    let s = String(str).trim();
    // Strip tags
    s = s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Remove control chars
    s = s.replace(/[\x00-\x1F\x7F]/g, '');
    if (maxLen) s = s.slice(0, maxLen);
    return s;
  }

  let isSubmitting = false;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (isSubmitting) return;

    const name = sanitize(form.name.value, 255) || null;
    const emailRaw = sanitize(form.email.value, 255) || null;
    const email = emailRaw && /@/.test(emailRaw) ? emailRaw : null;
    const message = sanitize(form.message.value, 2000);
    const ratingRaw = sanitize(form.rating.value, 2) || null;
    const rating = ratingRaw ? Math.max(1, Math.min(5, parseInt(ratingRaw, 10))) : null;

    if (!message || message.length < 3) {
      statusEl.textContent = 'Please write a short message (3+ characters).';
      statusEl.style.color = 'var(--text)';
      return;
    }

    if (!window.supabaseConfigured || !window.supabaseClient) {
      statusEl.textContent = 'Missing Supabase config. Create env.js with window.__SUPABASE_URL and window.__SUPABASE_ANON_KEY, then reload.';
      statusEl.style.color = '#e11d48';
      return;
    }

    // Prevent double-submit
    isSubmitting = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    statusEl.textContent = '';

    var payload = { name: name, email: email, message: message, rating: rating };
    window.supabaseClient.from('feedback').insert([payload]).then(function (res) {
      var data = res.data, error = res.error;
      if (error) {
        console.error('Supabase returned error:', error);
        var msg = (error && error.message) ? error.message : JSON.stringify(error);
        var short = msg.length > 200 ? msg.slice(0, 200) + '...' : msg;
        statusEl.textContent = 'Error sending feedback: ' + short + ' (check RLS and anon INSERT)';
        statusEl.style.color = '#e11d48';
      } else {
        statusEl.textContent = 'Thanks! Your feedback was sent.';
        statusEl.style.color = 'var(--success)';
        form.reset();
        setTimeout(function () { closeModal(); }, 1200);
      }
    }).catch(function (err) {
      console.error('Feedback submission error', err);
      var msg = (err && err.message) ? err.message : String(err);
      statusEl.textContent = 'Error sending feedback: ' + msg;
      statusEl.style.color = '#e11d48';
    }).finally(function () {
      isSubmitting = false;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send';
    });
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
