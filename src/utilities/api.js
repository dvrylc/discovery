const api = {
  fetchNews: () => {
    console.log('Fetch: News');
    return fetch('https://api.hackerwebapp.com/news');
  },
  fetchItem: id => {
    console.log(`Fetch: Item ${id}`);
    return fetch(`https://api.hackerwebapp.com/item/${id}`);
  }
}

export default api;
