import express from 'express';
import * as cont from '../controllers/picture.js';
const router = express.Router();

router.get('/api/picture/categories/:main_category/:sub_category', cont.getPictures);

router.get('/api/picture/search', cont.getPicturesBySearchTerm);

router.post('/api/picture', cont.uploadPictureAsset);

export default router;
