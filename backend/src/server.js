const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB inside Docker container!'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/health', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
    res.json({ 
        status: "Healthy", 
        message: "Hello from the optimized Dockerized Backend API!",
        database_status: dbStatus
    });
});

app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
});