import express from 'express';
import * as MessageController from '../controllers/MessageController';

const router = express.Router();

// get message
router.get('/all', MessageController.getAllMessages);

// add message
router.post('/add', MessageController.createMessage);

export default router;