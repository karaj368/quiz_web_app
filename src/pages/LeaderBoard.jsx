import { useState, useEffect } from "react";

function LeaderBoard() {
const [data, setData] = useState([]);

useEffect(() =>{
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setData(stored)
}, [])

const clearBoard = () =>{
    localStorage.removeItem("leaderboard");
    setData([]);
}

  return (
   <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
        {data.length === 0 ? (
            <p className="text-muted">No Scroe yet! Play the Quiz.</p>
        ) : (
                <table className="table table-striped shadow">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
               {data.map((entry, index) => (
                 <tr>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.score}</td>
                    <td>{entry.percentage}</td>
                    <td>{entry.date}</td>
                </tr>
               )

            )}
               
            </tbody>
        </table>
        ) }
        
        <button
        onClick={clearBoard}
        className="btn btn-danger mt-3">Clear Leaderboard</button>
    </div>
  )
}

export default LeaderBoard
