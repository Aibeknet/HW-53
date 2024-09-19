import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './App.css';

interface ITask {
    id: string;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([
        {id: '1', text: 'Buy milk', completed: false},
        {id: '2', text: 'Walk with dog', completed: false},
        {id: '3', text: 'Do homework', completed: false},
    ]);

    const addTask = (text: string) => {
        const newTask: ITask = {
            id: Date.now().toString(), text,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleTask = (id: string) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );

        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <AddTaskForm onAdd={addTask}/>
            <div>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onToggle={toggleTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
