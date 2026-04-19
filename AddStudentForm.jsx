import { useState } from 'react';

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Please enter a student name.');
      return;
    }

    let parsedScore = parseInt(score, 10);

    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      alert('Score must be between 0 and 100.');
      return;
    }

    onAdd({ name: name.trim(), score: parsedScore });
    setName('');
    setScore('');
  }

  return (
    <div className="card">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Student Name</label>
            <input
              id="name"
              type="text"
              placeholder="e.g. PRACHI"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="score">Score (0–100)</label>
            <input
              id="score"
              type="number"
              placeholder="e.g. 88"
              min="0"
              max="100"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-add">Add Student</button>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;
