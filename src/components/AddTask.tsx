import React, { useState } from 'react';
import { Task } from '../Task';

interface AddTaskProps {
    addTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.trim()) return;

        addTask(new Task(title));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTask;
