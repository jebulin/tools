import { useState, useEffect, useRef } from 'react';
import { Copy, Trash2, Search, Check, AlertCircle, FileJson, ChevronDown, ChevronUp, X } from 'lucide-react';
import './JsonFormatter.css';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showFindReplace, setShowFindReplace] = useState(false);
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [copied, setCopied] = useState(false);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [totalMatches, setTotalMatches] = useState(0);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!input.trim()) {
      setOutput('');
      setError(null);
      return;
    }

    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  }, [input]);

  // Find matches
  useEffect(() => {
    if (!findText || !input) {
      setTotalMatches(0);
      setCurrentMatchIndex(0);
      return;
    }

    const flags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
    const matches = input.match(regex);
    setTotalMatches(matches ? matches.length : 0);
    setCurrentMatchIndex(matches && matches.length > 0 ? 1 : 0);
  }, [findText, input, caseSensitive]);

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
    setFindText('');
    setReplaceText('');
  };

  const findAndHighlight = (direction: 'next' | 'prev') => {
    if (!findText || !inputRef.current || totalMatches === 0) return;

    const flags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
    const matches = [...input.matchAll(regex)];

    if (matches.length === 0) return;

    let newIndex = currentMatchIndex;
    if (direction === 'next') {
      newIndex = currentMatchIndex >= totalMatches ? 1 : currentMatchIndex + 1;
    } else {
      newIndex = currentMatchIndex <= 1 ? totalMatches : currentMatchIndex - 1;
    }

    setCurrentMatchIndex(newIndex);

    const match = matches[newIndex - 1];
    if (match && match.index !== undefined) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(match.index, match.index + findText.length);
      inputRef.current.scrollTop = inputRef.current.scrollHeight * (match.index / input.length);
    }
  };

  const handleReplace = () => {
    if (!findText || totalMatches === 0 || !inputRef.current) return;

    const flags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
    const matches = [...input.matchAll(regex)];

    if (currentMatchIndex > 0 && matches[currentMatchIndex - 1]) {
      const match = matches[currentMatchIndex - 1];
      if (match.index !== undefined) {
        const newInput =
          input.substring(0, match.index) +
          replaceText +
          input.substring(match.index + findText.length);
        setInput(newInput);
      }
    }
  };

  const handleReplaceAll = () => {
    if (!findText) return;
    const flags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
    const newInput = input.replace(regex, replaceText);
    setInput(newInput);
    setFindText('');
  };

  return (
    <div className="json-formatter-container">
      <div className="json-header">
        <div className="header-title">
          <FileJson className="header-icon" />
          <h1>JSON Formatter & Validator</h1>
        </div>
        <div className="header-actions">
          <button
            className={`action-button ${showFindReplace ? 'active' : ''}`}
            onClick={() => setShowFindReplace(!showFindReplace)}
            title="Find and Replace"
          >
            <Search size={18} /> Find & Replace
          </button>
          <button className="action-button" onClick={handleClear} title="Clear All">
            <Trash2 size={18} /> Clear
          </button>
        </div>
      </div>

      {showFindReplace && (
        <div className="find-replace-bar">
          <div className="find-controls">
            <div className="input-group">
              <input
                type="text"
                placeholder="Find..."
                value={findText}
                onChange={(e) => setFindText(e.target.value)}
                className="find-input"
              />
              {totalMatches > 0 && (
                <span className="match-counter">
                  {currentMatchIndex}/{totalMatches}
                </span>
              )}
            </div>
            <div className="nav-buttons">
              <button
                onClick={() => findAndHighlight('prev')}
                disabled={totalMatches === 0}
                title="Previous match"
                className="nav-btn"
              >
                <ChevronUp size={16} />
              </button>
              <button
                onClick={() => findAndHighlight('next')}
                disabled={totalMatches === 0}
                title="Next match"
                className="nav-btn"
              >
                <ChevronDown size={16} />
              </button>
            </div>
            <label className="case-sensitive-toggle">
              <input
                type="checkbox"
                checked={caseSensitive}
                onChange={(e) => setCaseSensitive(e.target.checked)}
              />
              <span>Aa</span>
            </label>
            <button
              onClick={() => {
                setShowFindReplace(false);
                setFindText('');
                setReplaceText('');
              }}
              className="close-btn"
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
          <div className="replace-controls">
            <input
              type="text"
              placeholder="Replace with..."
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
              className="replace-input"
            />
            <button
              onClick={handleReplace}
              disabled={totalMatches === 0}
              className="replace-btn"
            >
              Replace
            </button>
            <button
              onClick={handleReplaceAll}
              disabled={totalMatches === 0}
              className="replace-all-btn"
            >
              Replace All
            </button>
          </div>
        </div>
      )}

      <div className="editor-container">
        <div className="editor-pane input-pane">
          <div className="pane-header">
            <span>Input</span>
            {error && <span className="status-badge error"><AlertCircle size={14} /> Invalid JSON</span>}
          </div>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
            spellCheck={false}
          />
          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="editor-pane output-pane">
          <div className="pane-header">
            <span>Output</span>
            <div className="pane-actions">
              {!error && input && <span className="status-badge success"><Check size={14} /> Valid JSON</span>}
              <button onClick={handleCopy} disabled={!output} title="Copy Output">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="Formatted JSON will appear here..."
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}

