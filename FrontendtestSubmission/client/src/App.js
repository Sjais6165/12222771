import React, { useState } from 'react';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl }),
      });

      if (!response.ok) throw new Error('Failed to shorten URL');

      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🔗 URL Shortener</h1>
        <p className="subtitle">Paste your long URL and get a short one instantly</p>

        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Enter a long URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Shortening...' : 'Shorten'}
          </button>
        </form>

        {shortUrl && (
          <div className="shortened">
            <span>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </span>
            <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
          </div>
        )}

        {error && <p className="error">❌ {error}</p>}
      </div>
    </div>
  );
}

export default App;
