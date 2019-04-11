import { useState, useEffect } from "react";
const API_KEY = "9e22b226934f4df9bbc96b4b4d5504bf";
export function useNewsArticles() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headlines, setHeadlines] = useState([]);
  // the effect
  useEffect(() => {
    getHeadlines()
      .then(headlines => {
        setHeadlines(headlines);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    headlines,
    error
  };
}
function getHeadlines() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  return fetch(url)
    .then(res => res.json())
    .then(res => res.articles) // get just the list of articles
    .then(articles =>
      // get just the title and url from each article
      articles.map(article => ({
        title: article.title,
        url: article.url
      }))
    );
}
