import express from 'express';
import cors from 'cors';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routesPath = path.join(__dirname, 'routes');

async function loadRoutes(directory) {
    try {
        const files = await readdir(directory);
        for (const file of files) {
            if (path.extname(file) === '.js') {
                const { default: route } = await import(path.join(directory, file));
                app.use(route);
            }
        }
    } catch (err) {
        console.error('Error loading routes:', err);
    }
}

var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// app.use((req, res, ) => {

// }));
// app.use(cors(corsOptions));
app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (origin) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }

    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    express.static(path.join(__dirname, 'public'), {
        maxAge: '1d', // 캐시 만료 시간 설정
    })
);

loadRoutes(routesPath);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
