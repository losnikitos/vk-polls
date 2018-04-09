export default {
  get(endpoint) {
    return fetch(`${API_URL}/${endpoint}`).then(res => {
      if (res.ok) {
        return res.json();
      }
      return res.text().then(text => {
        throw new TypeError(`${res.status}: ${text}`);
      });
    });
  }
};
