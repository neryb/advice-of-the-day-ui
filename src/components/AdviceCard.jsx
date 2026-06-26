export function AdviceCard({ slip }) {
  if (!slip) return <div className="card" />;
  return (
    <div className="card">
      <p>"{slip.advice}"</p>
      <span className="history-id">#{slip.id}</span>
    </div>
  );
}
