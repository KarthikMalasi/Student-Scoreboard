import { useEffect, useState } from "react";


function AllDetails({ students, updateScore }) {

  const [inputs, setInputs] = useState(students.map(s => s.score))

  const handleChange = (index, value) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
  }

  useEffect(() => {
    setInputs(students.map(s => s.score))
  }, [students])

  return (
    <div className="all-details">
      <div className="all-details__header">
        <span>STUDENT RECORDS</span>
        <span>{students.length} Entries</span>
      </div>
      <table className="all-details__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td>
                {item.score >= 40
                  ? <div className="badge badge--pass"><span className="badge__dot"></span><span>Pass</span></div>
                  : <div className="badge badge--fail"><span className="badge__dot"></span><span>Fail</span></div>
                }
              </td>
              <td>
                <div className="update-cell">
                  <input
                    type="text"
                    value={inputs[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                  <button onClick={() => updateScore(index, inputs[index])}>Save</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllDetails;