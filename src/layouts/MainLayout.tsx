import { Link, Outlet } from 'react-router-dom';
import { Home, BookOpen, Github } from 'lucide-react';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>FinanceTool</span>
          </Link>
          <nav className="main-nav">
            <Link to="/" className="nav-link">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/blog" className="nav-link">
              <BookOpen size={18} />
              <span>Blog</span>
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} FinanceTool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
