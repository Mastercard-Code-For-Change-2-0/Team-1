const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export type Role = 'donor' | 'receiver' | 'admin';

export const authApi = {
  async register(payload: { name: string; email: string; password: string; role: Role }) {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Register failed');
    return res.json();
  },
  async login(payload: { email: string; password: string }) {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Login failed');
    return res.json();
  },
  async me(token: string) {
    const res = await fetch(`${API_BASE}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error('Unauthorized');
    return res.json();
  }
};

export const tokenStore = {
  get() { return localStorage.getItem('auth_token'); },
  set(token: string) { localStorage.setItem('auth_token', token); },
  clear() { localStorage.removeItem('auth_token'); }
};
