import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});