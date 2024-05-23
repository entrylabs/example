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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
loadRoutes(routesPath);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
