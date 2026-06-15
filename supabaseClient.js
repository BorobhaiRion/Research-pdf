// Vanilla Supabase client (no modules)
// Exposes window.supabaseClient and window.supabaseConfigured
(function () {
  function readEnv() {
    const byMeta = (name) => document.querySelector(`meta[name="${name}"]`)?.content;
    const url = window.__SUPABASE_URL || byMeta('supabase-url') || (typeof SUPABASE_URL !== 'undefined' ? SUPABASE_URL : null);
    const key = window.__SUPABASE_ANON_KEY || byMeta('supabase-anon-key') || (typeof SUPABASE_ANON_KEY !== 'undefined' ? SUPABASE_ANON_KEY : null);
    return { url, key };
  }

  const env = readEnv();
  if (!env.url || !env.key) {
    console.warn('[supabaseClient] Supabase credentials not found. Provide them via env.js (window.__SUPABASE_URL / window.__SUPABASE_ANON_KEY) or meta tags.');
    window.supabaseClient = null;
    window.supabaseConfigured = false;
    return;
  }

  if (!window.supabase || !window.supabase.createClient) {
    console.error('[supabaseClient] Supabase UMD script not found. Include https://cdn.jsdelivr.net/npm/@supabase/supabase-js/dist/umd/supabase.min.js before this script.');
    window.supabaseClient = null;
    window.supabaseConfigured = false;
    return;
  }

  try {
    window.supabaseClient = window.supabase.createClient(env.url, env.key);
    window.supabaseConfigured = true;
  } catch (err) {
    console.error('[supabaseClient] Failed to create client', err);
    window.supabaseClient = null;
    window.supabaseConfigured = false;
  }
})();
