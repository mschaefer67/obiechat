import { db } from "../config/database";
import { RowDataPacket } from "mysql2";

export interface Message {
  id?: number;
  username: string;
  message: string;
  timestamp?: Date;
}

//Get a list of all messages in the database
export const getAllMessages = (): Promise<Message[]> => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM MESSAGE ORDER BY timestamp DESC",
      (err, results) => {
        if (err) return reject(err);
        resolve(results as Message[]);
      }
    );
  });
};

//Add a message to the database
export const createMessage = (newMessage: Message): Promise<Message> => {
  return new Promise((resolve, reject) => {
    const { username, message } = newMessage;
    db.query(
        'INSERT INTO message (username, message) VALUES (?,?)',
        [username, message],
        (err, result) => {
            if(err) return reject(err);
            resolve({id: (result as any).insertId, username, message})
        }
    )
  });
};
