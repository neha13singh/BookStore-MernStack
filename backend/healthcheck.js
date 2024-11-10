import express from 'express';
const healthApp = express();

healthApp.get('/', (req, res) => {
    res.status(200).send('OK');
});

healthApp.listen(3000, '0.0.0.0', () => {
    console.log('Health check server running on port 3000');
});

export default healthApp; 