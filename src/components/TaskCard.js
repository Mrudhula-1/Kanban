// src/components/TaskCard.js
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Assigned To:</strong> {task.assigned_to}</p>
    </div>
  );
};

export default TaskCard;
