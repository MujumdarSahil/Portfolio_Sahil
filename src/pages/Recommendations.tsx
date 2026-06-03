import React from 'react';
import './Recommendations.css';
import { publicationLink } from '../data/portfolioData';

const highlights = [
  {
    organization: 'National Informatics Centre (NIC)',
    role: 'Data Analyst Intern',
    period: 'Jul 2024 – Jun 2025',
    quote:
      'Delivered an Election Dashboard with ASP.NET, Chart.js, and SQL Server — improving data accessibility and decision-making efficiency by 30%. Led security audits and built reusable templates with Redis, cutting response times by 25%.',
  },
  {
    organization: 'Zscaler',
    role: 'Networking Virtual Internship',
    period: 'Jul 2024 – Sep 2024',
    quote:
      'Gained practical experience with Zero Trust Exchange, secure web gateway policies, and vulnerability mitigation in simulated environments — strengthening cloud security and network resilience skills.',
  },
  {
    organization: 'INCET 2025 — Jain College of Engineering',
    role: 'Conference Presenter',
    period: 'May 2025',
    quote:
      'Presented "Defense Ledger – Blockchain-Powered Ammunition and Supply Chain" at the 6th International Conference of Emerging Technology.',
    link: publicationLink,
    linkLabel: 'View publication',
  },
];

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <h2 className="timeline-title" style={{ marginBottom: '2rem' }}>Professional Highlights</h2>
      {highlights.map((item, index) => (
        <div key={index} className="recommendation-card" style={{ marginBottom: '1.5rem' }}>
          <div className="recommendation-header">
            <div>
              <h3>{item.organization}</h3>
              <p>{item.role}</p>
              <p className="date">{item.period}</p>
            </div>
          </div>
          <div className="recommendation-body">
            <p>✨ {item.quote}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="highlight-link">
                {item.linkLabel}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
