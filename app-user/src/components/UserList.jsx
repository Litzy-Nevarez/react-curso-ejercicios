import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip
} from "@mui/material";

export default function UserList({ users }) {
    return (
        <Box>
            {users.map(user => (
                <Card key={user.id}>
                    <CardContent>
                        <Typography variant='h6'>{user.name}</Typography>

                        {user.tasks.length === 0 ? (
                            <Typography color='text.secondary'>No hay tareas</Typography>
                        ) : (
                            user.tasks.map(task => (
                                <Box>
                                    <Typography variant='h6'>{task.title}</Typography>

                                    <Chip
                                        label={task.status}
                                        color={
                                            task.status === "Terminada"
                                                ? 'success'
                                                : task.status === "En proceso"
                                                ? "warning"
                                                : "default"
                                        }
                                        size='small'
                                    >
                                        
                                    </Chip>
                                </Box>
                            ))
                        )}
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}