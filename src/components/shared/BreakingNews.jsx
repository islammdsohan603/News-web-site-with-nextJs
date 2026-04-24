import React from 'react';
import Marquee from 'react-fast-marquee';

const breakingData = [
  { id: 1, title: 'Global Markets Surge After Tech Rally' },
  { id: 2, title: 'Earthquake Shakes Coastal Region' },
  { id: 3, title: 'AI Breakthrough in Medical Diagnosis' },
  { id: 4, title: 'Major Football Transfer Shock' },
  { id: 5, title: 'Heavy Rain Causes Flooding in South Asia' },
];

const BreakingNews = () => {
  return (
    <div className="bg-gray-400">
      <div className="w-10/12 mx-auto flex items-center gap-4 py-4">
        <button className="btn bg-pink-500 text-white ">Latest News</button>
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {breakingData.map(data => (
            <span key={data.id} className="mx-8 text-black font-semibold">
              🔴 {data.title}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
