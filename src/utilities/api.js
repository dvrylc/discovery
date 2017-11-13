const api = {
  fetchNews: page => {
    console.log(`Fetch: News page ${page}`);
    return fetch(`https://api.hackerwebapp.com/news?page=${page}`);
  },
  fetchItem: id => {
    console.log(`Fetch: Item ${id}`);
    return fetch(`https://api.hackerwebapp.com/item/${id}`);
  }
}

export default api;
