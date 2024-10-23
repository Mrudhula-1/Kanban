// src/components/KanbanBoard.js
import React, { useState } from 'react';
import TaskCard from './TaskCard';
import SortAndGroupComponent from './SortAndGroupComponent';
import '../styles/styles.css'; // Import the CSS file



const KanbanBoard = () => {
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  const [tasks] = useState([
    { id: 1, title: 'Add Multi-Language Support', description: 'Enable multi-language support.', priority: 'High', status: 'To Do', type: 'Feature Request' },
    { id: 2, title: 'Implement Email Notification System', description: 'Set up email notifications.', priority: 'Medium', status: 'To Do', type: 'Feature Request' },
    { id: 3, title: 'Optimize Database Queries', description: 'Improve query performance.', priority: 'Low', status: 'In Progress', type: 'Feature Request' },
    { id: 4, title: 'Enhance Search Functionality', description: 'Upgrade search with advanced filters.', priority: 'High', status: 'Done', type: 'Feature Request' },
    { id: 5, title: 'Integrate Third-Party Payment Gateway', description: 'Add payment gateway support.', priority: 'Medium', status: 'Done', type: 'Feature Request' },
  ]);

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="kanban-board">
      {/* Sort and Group Component */}
      <SortAndGroupComponent setGrouping={setGrouping} setOrdering={setOrdering} />

      {/* Kanban Columns */}
      <div className="kanban-column">
        <h3>To Do</h3>
        {getTasksByStatus('To Do').map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <div className="kanban-column">
        <h3>In Progress</h3>
        {getTasksByStatus('In Progress').map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <div className="kanban-column">
        <h3>Done</h3>
        {getTasksByStatus('Done').map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;