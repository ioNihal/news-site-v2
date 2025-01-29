// api/news.js (CommonJS syntax)
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const { category } = req.query;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category || 'general'}&apiKey=${process.env.NEWS_API_KEY}`
    );
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};