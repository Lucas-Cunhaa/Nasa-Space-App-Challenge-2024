const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;
const key = process.env.API_KEY;

app.get('/api/exoplanets', async (req, res) => {
    try {
        const response = await axios.get('https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT * FROM pspec', {
            headers: { 'Authorization': `Bearer ${key}` } 
        });
        console.log(response)
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
