import { Request, Response } from 'express';
import * as MessageModel from '../models/MessageModel';

// GET /messages
export const getAllMessages = async (req: Request, res: Response) => {
  try {
    const messages = await MessageModel.getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

// POST /messages
export const createMessage = async (req: Request, res: Response) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: 'username and message are required' });
  }

  try {
    const newMessage = await MessageModel.createMessage({ username, message });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to create message' });
  }
};