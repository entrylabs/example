import express from 'express';
import * as cont from '../controllers/sprites.js';
const router = express.Router();

router.get('/api/sprites/categories/:main_category/:sub_category', function (req, res) {
    const { main_category, sub_category } = req.params;
    res.send(
        cont.getSprites({
            main_category,
            sub_category,
        })
    );
});

router.get('/api/sprites/search', function (req, res) {
    const query = req.query.query;

    if (!query) {
        return res.status(400).send('Query parameter is required');
    }

    res.send(
        cont.getSpritesBySearchTerm({
            query,
        })
    );
});

router.post('/api/sprites', function (req, res) {
    res.send(cont.uploadSpriteAsset());
});

export default router;
