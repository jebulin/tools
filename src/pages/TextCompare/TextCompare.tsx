import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { diffWords } from 'diff';
import { ArrowRightLeft } from 'lucide-react';
import './TextCompare.css';

interface DiffResult {
  value: string;
  added?: boolean;
  removed?: boolean;
}

export default function TextCompare() {
  const [originalText, setOriginalText] = useState('');
  const [modifiedText, setModifiedText] = useState('');
  const [diffs, setDiffs] = useState<DiffResult[]>([]);
  const [hasCompared, setHasCompared] = useState(false);

  const handleCompare = () => {
    if (!originalText && !modifiedText) return;

    const results = diffWords(originalText, modifiedText);
    setDiffs(results);
    setHasCompared(true);
  };

  return (
    <>
      <Helmet>
        <title>Text Comparison Tool - Online Diff Checker</title>
        <meta
          name="description"
          content="Free online text comparison tool. Compare two text files or snippets to find differences instantly. Highlight additions and deletions."
        />
      </Helmet>

      <div className="text-compare-container">
        <div className="compare-header">
          <h1>Text Comparison Tool</h1>
          <p>Compare two texts to find the difference.</p>
        </div>

        <div className="compare-grid">
          <div className="input-group">
            <label htmlFor="original">Original Text</label>
            <textarea
              id="original"
              className="text-input"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="Paste original text here..."
            />
          </div>
          <div className="input-group">
            <label htmlFor="modified">Modified Text</label>
            <textarea
              id="modified"
              className="text-input"
              value={modifiedText}
              onChange={(e) => setModifiedText(e.target.value)}
              placeholder="Paste modified text here..."
            />
          </div>
        </div>

        <div className="compare-actions">
          <button className="compare-btn" onClick={handleCompare}>
            <ArrowRightLeft size={20} />
            Compare Text
          </button>
        </div>

        {hasCompared && (
          <div className="results-section">
            <div className="results-header">
              <h2>Comparison Results</h2>
              <p className="results-subtitle">
                Unified view showing all text with differences highlighted
              </p>
            </div>
            <div className="diff-viewer">
              <div className="diff-unified">
                {diffs.map((part, index) => {
                  if (part.removed) {
                    return (
                      <del key={index} className="diff-deleted">
                        {part.value}
                      </del>
                    );
                  } else if (part.added) {
                    return (
                      <ins key={index} className="diff-added">
                        {part.value}
                      </ins>
                    );
                  } else {
                    return (
                      <span key={index} className="diff-unchanged">
                        {part.value}
                      </span>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
