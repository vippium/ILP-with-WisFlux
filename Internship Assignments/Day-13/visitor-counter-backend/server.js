const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
const port = 5000;

// From here, we have created the Redis client which is used to connect.
const client = redis.createClient();

client.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

(async () => {
    await client.connect();
    console.log('Connected to Redis');
})();

// It is the Middleware
app.use(cors());

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

// Increment Visitor Count
app.get('/api/visit', async (req, res) => {
    try {
        const count = await client.incr('visitorCount');
        res.json({ count });
    } catch (err) {
        console.error('Error incrementing visitor count:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Redis have to be properly shutdown on server exit
process.on('SIGINT', async () => {
    await client.quit();
    console.log('Redis client disconnected');
    process.exit(0);
});

// From here, the server will start.
app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
