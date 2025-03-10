import { useState } from 'react';

const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState('');

	const addTask = () => {
		if (!task.trim()) return;
		setTasks([...tasks, task]);
		setTask('');
	};

	const removeTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div>
			<input value={task} onChange={(e) => setTask(e.target.value)} placeholder='Nueva tarea...' />
			<button onClick={addTask}>➕ Agregar</button>

			<ul>
				{tasks.map((t, index) => (
					<li key={index}>
						{t} <button onClick={() => removeTask(index)}>❌</button>
					</li>
				))}
			</ul>
		</div>
	);
};
export default TaskList;
