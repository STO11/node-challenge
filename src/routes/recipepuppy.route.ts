import express from 'express';
import { RECIPEROUTE } from '../routes/routes';
const app = express.Router();
app.get(RECIPEROUTE, (req, res) => {
    res.json({
        message: process.env.GIPHY_KEY,
    });
});

export default app;