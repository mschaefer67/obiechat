import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import { db } from "./config/database";
import { getAllMessages } from "./models/MessageModel";
import messageRoutes from './routes/MessageRouter'

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());

// API routes
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the Node.js TypeScript API!" });
});

app.use(express.static(path.join(__dirname, "../../client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Database Routes
app.use('/messages', messageRoutes)
