const express = require('express');
const app = express();
const port = 3000;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Virtual Assistant API! Vijayashree');
});

// Endpoint: GET /assistant/greet
app.get('/assistant/greet', (req, res) => {
    const userName = req.query.name;
    if (!userName) {
        return res.status(400).send({ message: 'Name query parameter is required' });
    }

    const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const welcomeMessage = `Hello, ${userName}!`;
    const cheerfulMessage = `Happy ${dayOfWeek}! It's a great day to achieve something amazing.`;

    res.send({
        welcomeMessage,
        cheerfulMessage,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});