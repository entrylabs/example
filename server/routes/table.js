import express from 'express';
import * as cont from '../controllers/table.js';
const router = express.Router();

router.get('/api/table', cont.getTable);

router.get('/api/table/search', cont.getTableBySearchTerm);

router.post('/api/table', cont.uploadTable);

export default router;
