import React, { useState } from 'react'
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box
} from "@mui/material";

export default function TaskForm({ onCreate, users }) {

    const [task, setTask] = useState({
        title: "",
        status: "En proceso",
        user_id: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(task);
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}
        >
            <TextField
                label="Nueva tarea"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
            />

            <FormControl>
                <InputLabel>Estado</InputLabel>
                <Select
                    value={task.status}
                    label="Estado"
                    onChange={(e) => setTask({ ...task, status: e.target.value })}
                >
                    <MenuItem value="Pendiente">Pediente</MenuItem>
                    <MenuItem value="En proceso">En proceso</MenuItem>
                    <MenuItem value="Terminada">Termianda</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel>Usuario</InputLabel>
                <Select
                    value={task.user_id}
                    label="Usuario"
                    onChange={(e) => setTask({ ...task, user_id: e.target.value })}
                >
                    <MenuItem value="">Selecciona usuario</MenuItem>
                    {users.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                            {user.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button type='submit' variant='contained'>
                Crear
            </Button>

        </Box>
    )
}
