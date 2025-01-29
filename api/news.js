const axios = require('axios');

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { category } = req.query;
        const apiKey = process.env.NEWS_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'API Key not configured' });
        }

        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category || 'general'}&apiKey=${apiKey}`
        );

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        return res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
