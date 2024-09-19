import React from "react";

interface TaskProps {
    task: {
        id: string;
        text: string;
        completed: boolean;
    };
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete, onToggle }) => {
    return (
        <div className="task">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>

    );
};

export default Task;