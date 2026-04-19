
function StudentTable({ students, onSave, onDelete }) {
  return (
    <div className="card">
      <h2>Student List</h2>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty">
                No students available
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                rank={index + 1}
                onSave={onSave}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
