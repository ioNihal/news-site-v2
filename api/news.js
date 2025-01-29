import axios from 'axios';

export default async (req, res) => {
  try {
    const { category } = req.query;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${
        category ? `&category=${category}` : ''
      }&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};