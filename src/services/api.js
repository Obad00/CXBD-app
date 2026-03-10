/**
 * API Service — centralized HTTP client
 * Replace BASE_URL with your backend URL when ready
 */

const BASE_URL = import.meta.env.VITE_API_URL || '/api'

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  }

  // Add auth token if available
  const token = localStorage.getItem('cxbd_token')
  if (token) config.headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(url, config)
  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.json()
}

export const api = {
  get:    (ep)       => request(ep),
  post:   (ep, body) => request(ep, { method: 'POST',   body: JSON.stringify(body) }),
  put:    (ep, body) => request(ep, { method: 'PUT',    body: JSON.stringify(body) }),
  delete: (ep)       => request(ep, { method: 'DELETE' })
}

// ─── Domain endpoints (swap mock → real as backend is built) ──────────────────

export const programsApi = {
  getAll:   () => api.get('/programs'),
  getById:  (id) => api.get(`/programs/${id}`),
}

export const applicationsApi = {
  submit:   (data) => api.post('/applications', data),
  getMyApp: ()     => api.get('/applications/me')
}

export const statsApi = {
  getImpact: () => api.get('/stats/impact')
}

export const contactApi = {
  send: (data) => api.post('/contact', data)
}
