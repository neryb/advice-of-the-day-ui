import { useState, useEffect } from 'react';
import { AdviceCard } from './components/AdviceCard';

export default function App() {
  const [slip, setSlip] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => setSlip(data.slip));
  }, []);

  const handleNewAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        if (slip) setHistory([slip, ...history]);
        setSlip(data.slip);
      });
  };

  return (
    <div className="container">
      <h1>Advice of the Day</h1>
      <AdviceCard slip={slip} />
      <button className="btn" onClick={handleNewAdvice}>
        Get New Advice
      </button>
      {history.length > 0 && (
        <div className="history">
          <div className="history-header">
            <h3>Previous Advice</h3>
            <button className="clear-btn" onClick={() => { setHistory([]); setSlip(null); }}>
              Clear History
            </button>
          </div>
          {history.map((item) => (
            <div className="history-card">
              <p className="history-advice">"{item.advice}"</p>
              <span className="history-id">#{item.id}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
