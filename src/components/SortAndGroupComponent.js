// src/components/SortAndGroupComponent.js
import React from 'react';

const SortAndGroupComponent = ({ setGrouping, setOrdering }) => {
  return (
    <div className="sort-grouping">
      <label>Grouping: </label>
      <select onChange={(e) => setGrouping(e.target.value)}>
        <option value="status">Status</option>
        <option value="priority">Priority</option>
      </select>

      <label>Ordering: </label>
      <select onChange={(e) => setOrdering(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortAndGroupComponent;
