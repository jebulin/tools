import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, Home, BookOpen, Shield, Info, FileCode, FileJson } from 'lucide-react';

export default function Sitemap() {
  const pages = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'About Us', path: '/about', icon: <Info size={20} /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen size={20} /> },
    { name: 'File Comparison', path: '/file-comparison', icon: <FileText size={20} /> },
    { name: 'Text Compare', path: '/text-compare', icon: <FileCode size={20} /> },
    { name: 'JSON Formatter', path: '/json-formatter', icon: <FileJson size={20} /> },
    { name: 'Terms of Service', path: '/terms', icon: <FileText size={20} /> },
    { name: 'Privacy Policy', path: '/privacy', icon: <Shield size={20} /> },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - FinanceTool</title>
        <meta name="description" content="Sitemap for mydaytools.com" />
      </Helmet>

      <div className="page-container">
        <div className="content-wrapper">
          <h1 className="page-title">Sitemap</h1>

          <div className="card">
            <div className="sitemap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
              {pages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="sitemap-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    backgroundColor: 'var(--bg-color)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    textDecoration: 'none',
                    color: 'var(--text-color)',
                    transition: 'border-color 0.2s, transform 0.2s'
                  }}
                >
                  <span style={{ color: 'var(--primary-color)' }}>{page.icon}</span>
                  <span style={{ fontWeight: 500 }}>{page.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
