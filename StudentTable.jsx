import { useState } from 'react';

function StudentRow({ student, rank, onSave, onDelete }) {
  const [inputVal, setInputVal] = useState(student.score);

  let statusClass = 'fail-badge';
  let statusText = 'Fail';

  if (student.score >= 40) {
    statusClass = 'pass-badge';
    statusText = 'Pass';
  }

  function handleChange(e) {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) { val = 0; }
    if (val < 0) { val = 0; }
    if (val > 100) { val = 100; }
    setInputVal(val);
  }

  function handleSave() {
    onSave(student.id, inputVal);
  }

  function handleDelete() {
    onDelete(student.id);
  }

  return (
    <tr>
      <td>{rank}</td>
      <td>{student.name}</td>
      <td>
        <input
          className="score-input"
          type="number"
          min="0"
          max="100"
          value={inputVal}
          onChange={handleChange}
        />
      </td>
      <td>
        <span className={statusClass}>{statusText}</span>
      </td>
      <td>
        <div className="actions">
          <button className="btn-save" onClick={handleSave}>Save</button>
          <button className="btn-delete" onClick={handleDelete}>Remove</button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;
