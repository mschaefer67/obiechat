import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());

// API routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Node.js TypeScript API!' });
});

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 