import { Helmet } from 'react-helmet-async';
import { Shield, FileText, AlertCircle, Scale, Clock } from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Terms of Service - FinanceTool</title>
        <meta name="description" content="Terms of Service for using mydaytools.com" />
      </Helmet>

      <div className="page-container">
        <div className="content-wrapper">
          <div className="page-header">
            <div className="icon-wrapper">
              <FileText size={48} />
            </div>
            <h1 className="page-title">Terms of Service</h1>
            <p className="page-subtitle">Please read these terms carefully before using our services.</p>
            <div className="last-updated-badge">
              <Clock size={14} />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          <div className="legal-content">
            <section className="legal-section">
              <div className="section-header">
                <Shield className="section-icon" />
                <h2>1. Acceptance of Terms</h2>
              </div>
              <div className="section-body">
                <p>
                  By accessing and using <strong>mydaytools.com</strong> ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.
                </p>
                <p>
                  We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms of Service.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="section-header">
                <FileText className="section-icon" />
                <h2>2. Use License</h2>
              </div>
              <div className="section-body">
                <p>
                  Permission is granted to temporarily use the tools and materials on mydaytools.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>Attempt to decompile or reverse engineer any software contained on mydaytools.com's website;</li>
                  <li>Remove any copyright or other proprietary notations from the materials; or</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by mydaytools.com at any time.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="section-header">
                <AlertCircle className="section-icon" />
                <h2>3. Disclaimer</h2>
              </div>
              <div className="section-body">
                <p>
                  The materials on mydaytools.com's website are provided "as is". mydaytools.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  Further, mydaytools.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="section-header">
                <Scale className="section-icon" />
                <h2>4. Limitations</h2>
              </div>
              <div className="section-body">
                <p>
                  In no event shall mydaytools.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on mydaytools.com's website, even if mydaytools.com or a mydaytools.com authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="section-header">
                <Shield className="section-icon" />
                <h2>5. Governing Law</h2>
              </div>
              <div className="section-body">
                <p>
                  Any claim relating to mydaytools.com's website shall be governed by the laws of the State of [Your State/Country] without regard to its conflict of law provisions.
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
