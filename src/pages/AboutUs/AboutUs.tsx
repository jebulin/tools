import { Helmet } from 'react-helmet-async';
import { Users, Target, Wrench } from 'lucide-react';

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - FinanceTool</title>
        <meta name="description" content="Learn about our mission to provide free, efficient tools for engineers." />
      </Helmet>
      
      <div className="page-container">
        <div className="content-wrapper">
          <h1 className="page-title">About Us</h1>
          
          <div className="card">
            <p className="lead-text">
              Welcome to mydaytools.com. We are dedicated to providing free, high-quality tools for engineers and developers to streamline their daily workflows.
            </p>
            
            <div className="features-grid" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div className="feature-item" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  <Target size={32} />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  To empower engineers with efficient, reliable, and free tools that solve common problems and enhance productivity.
                </p>
              </div>
              
              <div className="feature-item" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  <Wrench size={32} />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>The Tools</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  From file comparisons to data formatting, our suite of tools is designed to handle the specific needs of software development and engineering.
                </p>
              </div>
              
              <div className="feature-item" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  <Users size={32} />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>For Engineers</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Built by engineers, for engineers. We understand the challenges you face and build solutions to address them directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
