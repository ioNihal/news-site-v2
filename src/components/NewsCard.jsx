import React from 'react';

const NewsCard = ({ article }) => {
  const defaultImage = 'https://via.placeholder.com/300x200';

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover"
        src={article.urlToImage || defaultImage}
        alt={article.title}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{article.title}</h3>
        <p className="text-gray-700 text-base">{article.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;