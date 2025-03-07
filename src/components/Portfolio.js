import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const portfolioItems = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
    { id: 4, title: 'Project 4', description: 'Description of Project 4' },
    { id: 5, title: 'Project 5', description: 'Description of Project 5' },
    { id: 6, title: 'Project 6', description: 'Description of Project 6' },
  ];

  return (
    <div className="Portfolio">
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
