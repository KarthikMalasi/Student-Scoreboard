import { useState } from "react"


function AddStudent({students, setStudents}) {

  const [newStudent, setNewStudent] = useState({ id:"", name:"", score:"" })

  const handleNameChange = (value) => {
    setNewStudent(s => ({ ...s, id: students.length + 1, name: value }))
  }

  const handleScoreChange = (value) => {
    setNewStudent(s => ({ ...s, score: value }))
  }

  const submitStudent = () => {
    setStudents(prev => [...prev, { ...newStudent, id: prev.length + 1, score: Number(newStudent.score) }])
    setNewStudent({ id:"", name:"", score:"" })
  }

  return (
    <div className="add-student">
      <div className="add-student__header">
        <div className="add-student__header-left">
          <span className="add-student__dot"></span>
          <h4>Register Student</h4>
        </div>
        <span className="add-student__label">NEW ENTRY</span>
      </div>

      <div className="add-student__fields">
        <input
          type="text"
          placeholder="STUDENT NAME"
          value={newStudent.name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="SCORE (0-100)"
          value={newStudent.score}
          onChange={(e) => handleScoreChange(e.target.value)}
        />
        <button onClick={submitStudent}>+ ADD</button>
      </div>
    </div>
  )
}

export default AddStudent