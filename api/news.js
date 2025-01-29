import axios from 'axios';

export default async function handler(req, res) {
  try {
    console.log("Incoming request:", req.query);
    
    const { category } = req.query;
    const apiKey = process.env.VITE_NEWS_API_KEY;
    
    if (!apiKey) {
      throw new Error("Missing API key");
    }
    
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category || 'general'}&apiKey=${apiKey}`
    );

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: error.message });
  }
};
