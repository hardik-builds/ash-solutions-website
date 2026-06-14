// lib/auth.js
// Client-side authentication helpers (Session is fully managed via secure HttpOnly database-backed cookies)

export async function isAuthenticated() {
  try {
    const res = await fetch('/api/auth/me');
    return res.ok;
  } catch (err) {
    return false;
  }
}

export async function getUser() {
  try {
    const res = await fetch('/api/auth/me');
    if (res.ok) {
      const data = await res.json();
      return data.user;
    }
  } catch (err) {}
  return null;
}

export function getToken() {
  // Session tokens are stored in secure HttpOnly cookies and are not accessible to client-side scripts.
  return null;
}

export async function logout() {
  try {
    await fetch('/api/auth/logout', { method: 'POST' });
  } catch (err) {
    console.error('Logout error:', err);
  }
}