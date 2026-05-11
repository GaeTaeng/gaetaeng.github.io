import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const portfolioItems = [
    { id: 1, title: '대한민국 랜덤 여행 지역 뽑기', description: '랜덤 위치를 생성해주는 미니 웹 도구', description2: 'description', status: '완료', link: 'https://random-location-generator.onrender.com/' },
    { id: 3, title: 'KORDLE Helper / 꼬들, 아나그램', description: 'Description of Project 2', description2: 'description', status: '완료' },
    { id: 5, title: '[제작중] GIECL', description: 'Description of Project 4', description2: 'description', status: '진행중' },
  ];

  return (
    <div className="Portfolio">
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-box">
            <div className="portfolio-card-container">

              <div className="portfolio-card back">
                <div className="card-top">
                  <span className={`card-status ${item.status === '완료' ? 'done' : 'wip'}`}>{item.status}</span>
                  <span className="card-chip">Details</span>
                  <span className="card-year">{item.description2}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">
                    프로젝트 보기
                  </a>
                )}
              </div>
              <div className="portfolio-card front">
                <div className="card-top">
                  <span className={`card-status ${item.status === '완료' ? 'done' : 'wip'}`}>{item.status}</span>
                  <span className="card-chip">Project</span>
                  <span className="card-year">{item.description2}</span>
                </div>
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
