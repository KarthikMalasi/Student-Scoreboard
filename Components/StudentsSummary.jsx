
function StudentsSummary({ students }) {
  const total = students.length
  const passed = students.filter(s => s.score >= 40).length
  const avg = total > 0 ? Math.round(students.reduce((sum, s) => sum + Number(s.score), 0) / total) : 0

  return (
    <div className="summary">
      <div className="summary__card">
        <span className="summary__label">TOTAL</span>
        <span className="summary__value">{total}</span>
        <span className="summary__bar"></span>
      </div>
      <div className="summary__card">
        <span className="summary__label">PASSED</span>
        <span className="summary__value">{passed}</span>
        <span className="summary__bar"></span>
      </div>
      <div className="summary__card">
        <span className="summary__label">AVG SCORE</span>
        <span className="summary__value">{avg}</span>
        <span className="summary__bar"></span>
      </div>
    </div>
  )
}

export default StudentsSummary

