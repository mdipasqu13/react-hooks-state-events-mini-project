import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import { CATEGORIES, TASKS } from '../data';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState('All');

  const handleSelectedCategoryChange = (category) => {
    setFilter(category);
  };

  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter(task => {
    return filter === 'All' || task.category === filter;
  });

  const onDeleteTask = (text) => {
    setTasks(tasks.filter(task => task.text !== text));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onSelectedCategoryChange={handleSelectedCategoryChange} />
      <NewTaskForm onTaskFormSubmit={handleTaskSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;