import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import UserList from './components/UserList';
import { useEffect, useState } from 'react';
import { getUsers, createTask } from './api';
import { create } from 'axios';
import { Container, Typography, Box } from "@mui/material";

function App() {

	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		const data = await getUsers();
		setUsers(data);
	}

	const handleCreateTask = async (task) => {
		await createTask(task)
		loadUsers();
	}

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<Container maxWidth="md">
			<Box mt={4}>
				<Typography variant='h4'>Gestor de tareas</Typography>

				<TaskForm onCreate={handleCreateTask} users={users} />
				<UserList users={users} />
			</Box>
		</Container>
	);
}

export default App;
