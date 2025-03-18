import React from "react";
import { Container, Box, Paper, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import '../stylesheets/home.css'
const appointments = [
    { id: 1, name: "John Doe", email: "john@example.com", date: "2025-03-20", time: "10:00 AM" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", date: "2025-03-21", time: "02:00 PM" },
    { id: 3, name: "Robert Brown", email: "robert@example.com", date: "2025-03-22", time: "11:30 AM" },
];

const upcomingAppointments = [
    { id: 1, patient: "Michael Johnson", date: "2025-03-25", time: "09:00 AM", notes: "General Check-up" },
    { id: 2, patient: "Sarah Williams", date: "2025-03-26", time: "01:30 PM", notes: "Follow-up Visit" },
];

const AppointmentsTable = () => (
    <Box sx={{ width: "100%", mb: 4 }}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);

const UpcomingAppointments = () => (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} sx={{ width: "48%", boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="body1"><strong>Patient:</strong> {appointment.patient}</Typography>
                    <Typography variant="body1"><strong>Date:</strong> {appointment.date}</Typography>
                    <Typography variant="body1"><strong>Time:</strong> {appointment.time}</Typography>
                    <Typography variant="body2"><strong>Notes:</strong> {appointment.notes}</Typography>
                </CardContent>
            </Card>
        ))}
    </Box>
);

const Home = () => {
    return (
        <div className="dashboard">
            <h2>Welcome Dr. Farra</h2>
            <h4 className="patientstitle">Upcoming Appointments</h4>
            <AppointmentsTable />
            <h4>Your next appointment</h4>
            <UpcomingAppointments />
        </div>
    );
};

export default Home;