import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import ScoreStats from './components/ScoreStats';

const initialStudents = [
  { id: 1, name: 'Prachi', score: 88 },
  { id: 2, name: 'kartavya', score: 86 },
  { id: 3, name: 'prachi sharma', score: 95 },
  { id: 4, name: 'satakshi gupta', score: 72 },
  { id: 5, name: 'palak', score: 63 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [nextId, setNextId] = useState(6);

  function addStudent(newStudent) {
    let newEntry = { id: nextId, name: newStudent.name, score: newStudent.score };
    let updated = students.concat([newEntry]);
    setStudents(updated);
    setNextId(nextId + 1);
  }

  function handleSave(id, newScore) {
    let updated = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        let updatedStudent = { id: students[i].id, name: students[i].name, score: newScore };
        updated.push(updatedStudent);
      } else {
        updated.push(students[i]);
      }
    }
    setStudents(updated);
  }

  function handleDelete(id) {
    let updated = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].id !== id) {
        updated.push(students[i]);
      }
    }
    setStudents(updated);
  }

  return (
    <>
      <Header />
      <main className="container">
        <AddStudentForm onAdd={addStudent} />
        <ScoreStats students={students} />
        <StudentTable
          students={students}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      </main>
      <footer>
        <p> </p>
      </footer>
    </>
  );
}

export default App;
