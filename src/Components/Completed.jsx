// Completed.jsx

import React from 'react';

function Completed({ compList }) {
  return (
    <div>
      <h2>Completed List</h2>
      <ul>
        {compList.map((completedTask) => (
          <li key={completedTask}>{completedTask}</li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
