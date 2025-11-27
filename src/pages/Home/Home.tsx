import { Link } from 'react-router-dom';
import { FileSpreadsheet, FileJson, ArrowRight, ArrowRightLeft } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="header-content">
          <h1>Developer Tools Hub</h1>
          <p>Essential tools for developers and data analysts</p>
        </div>
      </div>

      <main className="home-main">
        <div className="tools-grid">
          {/* File Comparison Tool Card */}
          <div className="tool-card">
            <div className="tool-icon-wrapper">
              <FileSpreadsheet className="tool-icon" />
            </div>
            <div className="tool-content">
              <h3>File Comparison Tool</h3>
              <p>Upload and compare Excel files to identify differences, merge data, and generate reports.</p>
              <Link to="/file-comparison" className="tool-link">
                Try Tool <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* JSON Formatter Tool Card */}
          <div className="tool-card">
            <div className="tool-icon-wrapper">
              <FileJson className="tool-icon" />
            </div>
            <div className="tool-content">
              <h3>JSON Formatter & Validator</h3>
              <p>Validate, format, and clean your JSON data with advanced error detection and editing features.</p>
              <Link to="/json-formatter" className="tool-link">
                Try Tool <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Text Comparison Tool Card */}
          <div className="tool-card">
            <div className="tool-icon-wrapper">
              <ArrowRightLeft className="tool-icon" />
            </div>
            <div className="tool-content">
              <h3>Text Comparison Tool</h3>
              <p>Compare two text files or snippets to find differences instantly. Highlight additions and deletions.</p>
              <Link to="/text-compare" className="tool-link">
                Try Tool <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}