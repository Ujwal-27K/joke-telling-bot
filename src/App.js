import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { fetchRandomJoke } from './utils/jokeService';

function App() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Function to get and tell a joke
  const tellJoke = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const newJoke = await fetchRandomJoke();
      setJoke(newJoke);
    } catch (error) {
      console.error('Error telling joke:', error);
      setJoke('Sorry, I couldn\'t fetch a joke right now. Please try again!');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Only trigger if not in an input field
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'j':
        case ' ': // Spacebar
          if (!event.ctrlKey && !event.altKey && !event.metaKey) {
            event.preventDefault();
            tellJoke();
          }
          break;
        default:
          // No action for other keys
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [tellJoke]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>🤖 Joke Telling Bot</h1>
        <p>Click the button or press 'J' to get a random joke!</p>
      </header>

      <main className="App-main">
        {/* Joke Display */}
        <div className="joke-container">
          {joke && (
            <div className="joke-text">
              <p>{joke}</p>
            </div>
          )}
        </div>

        {/* Main Controls */}
        <div className="controls">
          <button 
            className="joke-button"
            onClick={tellJoke}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Tell Me a Joke!'}
          </button>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <h3>How to Use:</h3>
          <ul>
            <li>Click "Tell Me a Joke!" button</li>
            <li>Press 'J' key on your keyboard</li>
            <li>Press Spacebar for a quick joke</li>
          </ul>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>
          <strong>Keyboard Shortcuts:</strong> 
          J (Tell Joke) • Space (Tell Joke)
        </p>
        <p>Jokes provided by JokeAPI.dev • Last joke: {joke ? new Date().toLocaleTimeString() : 'None yet'}</p>
        <div className="footer-trademark">
          <p>
            Built by{" "}
            <a
              href="https://portfolio-eta-blush-qsq9j1ksqi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Ujwal Khairnar</strong>
            </a>
          </p>
          <p>© 2025 Ujwal Khairnar. All rights reserved.</p>
          <div className="footer-links">
            <a
              href="https://github.com/Ujwal-27K"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/ujwal-khairnar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a href="mailto:ujwal.khairnar.uk@gmail.com">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
