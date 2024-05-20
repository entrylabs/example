import express from 'express';
import * as cont from '../controllers/sound.js';
const router = express.Router();

router.get('/api/sound/categories/:main_category/:sub_category', cont.getSounds);

router.get('/api/sound/search', cont.getSoundsBySearchTerm);

router.post('/api/sound', cont.uploadSoundAsset);

export default router;
