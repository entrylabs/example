import express from 'express';
import * as cont from '../controllers/sprite.js';
const router = express.Router();

router.get('/api/sprite/categories/:main_category/:sub_category', cont.getSprites);

router.get('/api/sprite/search', cont.getSpritesBySearchTerm);

router.post('/api/sprite', cont.uploadSpriteAsset);

export default router;
