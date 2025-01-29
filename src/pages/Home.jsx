import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('general');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`/api/news?category=${category}`);
                setArticles(response.data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    const categories = [
        'general', 'business', 'entertainment',
        'health', 'science', 'sports', 'technology'
    ];

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center my-8">Latest News</h1>

            <div className="flex flex-wrap justify-center mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`m-2 px-4 py-2 rounded ${category === cat
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {articles.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;