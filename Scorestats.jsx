function ScoreStats({ students }) {
  let total = students.length;
  let passed = 0;
  let totalScore = 0;

  for (let i = 0; i < students.length; i++) {
    totalScore = totalScore + students[i].score;
    if (students[i].score >= 40) {
      passed = passed + 1;
    }
  }

  let avg = '—';
  if (total > 0) {
    avg = (totalScore / total).toFixed(1);
  }

  return (
    <div className="stats-card">
      <div className="stat-item">
        <span className="stat-label">Total Students</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="stat-label">Passed</span>
        <span className="stat-passed">{passed}</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="stat-label">Avg. Score</span>
        <span className="stat-value">{avg}</span>
      </div>
    </div>
  );
}

export default ScoreStats;
