import express from 'express';
import { Connection } from './Database/db.js';
import dotenv from 'dotenv';
import Router from './Routes/Route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);
const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URI=process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@file.hng0fkz.mongodb.net/?retryWrites=true&w=majority&appName=file`
Connection(URI);
app.get('/', (req, res) => {
    res.send('Hello World');
    }
);
app.get('/signup', (req, res) => {
    res.send('Hello World');
    }
);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);