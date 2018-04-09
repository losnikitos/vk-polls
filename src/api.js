export default {
  get(endpoint) {
    return fetch(`${API_URL}${endpoint}`).then(res => {
      if (res.ok) {
        return res.json();
      }
      return res.text().then(text => {
        throw new TypeError(`${res.status}: ${text}`);
      });
    });
  },

  async post(endpoint, body) {
    const res = await fetch(`${API_URL}${endpoint}`, { method: 'POST', body });
    if (res.ok) {
      return await res.text();
    } else {
      const text = await res.text();
      const { status } = res;
      throw new TypeError(`${status}: ${text}`);
    }
  }
};
