import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Server, Globe, Clock } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Privacy Policy - FinanceTool</title>
        <meta name="description" content="Privacy Policy for mydaytools.com" />
      </Helmet>

      <div className="page-container">
        <div className="content-wrapper">
          <div className="page-header">
            <div className="icon-wrapper">
              <Shield size={48} />
            </div>
            <h1 className="page-title">Privacy Policy</h1>
            <p className="page-subtitle">We value your privacy and are committed to protecting your personal data.</p>
            <div className="last-updated-badge">
              <Clock size={14} />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          <div className="legal-content">
            <section className="legal-section">
              <div className="section-header">
                <Eye className="section-icon" />
                <h2>1. Information Collection</h2>
              </div>
              <div className="section-body">
                <p>
                  At <strong>mydaytools.com</strong>, we prioritize your privacy. We want to be transparent about the data we collect:
                </p>
                <ul>
                  <li><strong>No Personal Data:</strong> We do not collect, store, or process any personal information (such as names, email addresses, or phone numbers) from our users.</li>
                  <li><strong>Client-Side Processing:</strong> All our tools (File Comparison, Text Compare, JSON Formatter, etc.) run entirely in your browser. Your data never leaves your device and is never sent to our servers.</li>
                </ul>
              </div>
            </section>

            <section className="legal-section">
              <div className="section-header">
                <Server className="section-icon" />
                <h2>2. Data Storage & Cookies</h2>
              </div>
              <div className="section-body">
                <p>
                  We use modern web technologies to enhance your experience without compromising your privacy:
                </p>
                <ul>
                  <li><strong>Local Storage:</strong> We use your browser's local storage to save your preferences, such as theme settings (dark/light mode). This data stays on your device.</li>
                  <li><strong>No Tracking Cookies:</strong> We do not use cookies for tracking, advertising, or analytics purposes.</li>
                </ul>
              </div>
            </section>

            <section className="legal-section">
              <div className="section-header">
                <Globe className="section-icon" />
                <h2>3. Third-Party Links</h2>
              </div>
              <div className="section-body">
                <p>
                  Our website may contain links to external sites that are not operated by us (e.g., GitHub). Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies. We encourage you to review the privacy policy of every site you visit.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="section-header">
                <Lock className="section-icon" />
                <h2>4. Security</h2>
              </div>
              <div className="section-body">
                <p>
                  Since we do not collect or store your personal data on our servers, the risk of data breach involving your personal information on our end is non-existent. However, we still employ industry-standard security measures to protect our website infrastructure.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="section-header">
                <Shield className="section-icon" />
                <h2>5. Changes to This Policy</h2>
              </div>
              <div className="section-body">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        .page-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border-color);
        }
        
        .icon-wrapper {
          display: inline-flex;
          padding: 1rem;
          background-color: rgba(var(--primary-rgb), 0.1);
          border-radius: 50%;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .page-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .last-updated-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          background-color: var(--surface-color);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .legal-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .legal-section {
          margin-bottom: 2.5rem;
          background-color: var(--surface-color);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid var(--border-color);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .legal-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .section-icon {
          color: var(--primary-color);
        }

        .section-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: var(--text-color);
        }

        .section-body {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .section-body p {
          margin-bottom: 1rem;
        }

        .section-body ul {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        .section-body li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .legal-section {
            padding: 1.5rem;
          }
          
          .section-header h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
