import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const portfolioItems = [
    { id: 1, title: '[제작중] Knights-Rest / 방치형게임', description: 'Description of Project 1', description2: '22' },
    { id: 2, title: 'KORDLE Helper / 꼬들, 아나그램', description: 'Description of Project 2', description2: '22' },
    { id: 3, title: '[제작중] BetBall / 핀볼 내기사이트', description: 'Description of Project 3', description2: '22' },
    { id: 4, title: '[제작중] GIECL', description: 'Description of Project 4', description2: '22' },
    { id: 5, title: 'Project 5', description: 'Description of Project 5', description2: '22' },
    { id: 6, title: '[제작중] [회사] (포트폴리오)', description: 'Description of Project 6', description2: '22' },
  ];

  return (
    <div className="Portfolio">
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-box">
            <div className="portfolio-card-container">

              <div className="portfolio-card back">
                <h3>Back card</h3>
                <p>Back description</p>
              </div>
              <div className="portfolio-card front">
                <h3>Front card</h3>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
