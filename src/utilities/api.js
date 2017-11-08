const api = {
  fetchNews: () => {
    return fetch('https://api.hackerwebapp.com/news');
  }
}

export default api;
