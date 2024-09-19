import React, { useState } from "react";

interface AddTaskFormProps {
    onAdd: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
    const [currentTask, setCurrentTask] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(e.target.value);
    };

    const handleAddClick = () => {
        if (currentTask.trim()) {
            onAdd(currentTask);
            setCurrentTask('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={currentTask}
                onChange={handleInputChange}
                placeholder="Enter the task"
            />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default AddTaskForm;


