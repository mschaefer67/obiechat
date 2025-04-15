DROP DATABASE IF EXISTS ober_chat;
CREATE DATABASE ober_chat;
USE ober_chat;

CREATE TABLE message(
	id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE direct_message(
	id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(sender_id) REFERENCES users(id),
    FOREIGN KEY(receiver_id) REFERENCES users(id)
);

INSERT INTO message (username, message)
VALUES
('ILoveFries', 'French Fries are the greatest thing ever'),
('ILoveHamburgers', 'No Hamburgers are the greatest thing ever'),
('YallWrong', 'All of you are dead wrong, pizza is the best food ever');

INSERT INTO users (username, password_hash)
VALUES
('ILoveFries', 'fries4life'),
('ILoveHamburgers', 'burgers4life');

INSERT INTO direct_message (sender_id, receiver_id, message)
VALUES
(1, 2, 'Do you like fries'),
(2, 1, 'No, I like Hamburgers');