import React from 'react';
import { Task as TaskModel } from '../Task';

interface TaskListProps {
    tasks: TaskModel[];
    toggleTask: (task: TaskModel) => void;
    deleteTask: (task: TaskModel) => void;
}

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    toggleTask,
    deleteTask,
}) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                        }}
                        onClick={() => toggleTask(task)}
                    >
                        {task.title}
                    </span>
                    <button onClick={() => deleteTask(task)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
