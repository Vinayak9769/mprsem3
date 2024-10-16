import React from 'react';
import { NavLink } from 'react-router-dom';

const News = () => {
  // Sample News Data
  const newsArticles = [
    {
      id: 1,
      title: "IPL Final: Gujarat Titan Lifts the Trophy",
      description: "Gujarat Titan beat Rajasthan Royals to win their first IPL trophy.",
      image: "ipl-final.jpg",
      link: "/article/ipl-final"
    },
    {
      id: 2,
      title: "Pakistan Thrashes Afghanistan in a Thriller",
      description: "Pakistan chased down a huge target to defeat Afghanistan in a nail-biting finish.",
      image: "pak-vs-afg.jpg",
      link: "/article/pak-beats-afg"
    },
    {
      id: 3,
      title: "England vs South Africa: Semifinal Showdown",
      description: "England and South Africa are set for an epic semifinal clash in the WT20.",
      image: "eng-vs-rsa.jpg",
      link: "/article/eng-vs-rsa"
    },
    {
      id: 4,
      title: "India vs Australia: Rivalry Renewed",
      description: "India and Australia face off in a series that promises excitement and drama.",
      image: "ind-vs-aus.jpg",
      link: "/article/ind-vs-aus"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0e2b] text-white p-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Sports News</h1>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map(article => (
          <div key={article.id} className="bg-[#1c2038] p-4 rounded-lg shadow-lg">
            <img 
              src={`src/assets/${article.image}`} 
              alt={article.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-400 mb-4">{article.description}</p>
            <NavLink
              to={article.link}
              className="text-blue-400 hover:text-blue-600"
            >
              Read More &rarr;
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
