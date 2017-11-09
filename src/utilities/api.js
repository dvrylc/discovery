const api = {
  fetchNews: () => {
    return fetch('https://api.hackerwebapp.com/news');
  },
  fetchItem: id => {
    return fetch(`https://api.hackerwebapp.com/item/${id}`);
  }
}

export default api;
