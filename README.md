# Obiechat

Obiechat is a full-stack chat application built with a Vue.js frontend and a Node.js backend.

## Project Structure

The project is organized into two main directories:

-   `client`: Contains the Vue.js frontend application.
-   `server`: Contains the Node.js backend application.

## Prerequisites

Before running the application, ensure you have the following installed:

-   Node.js (and npm)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd obiechat
    ```

2.  **Install dependencies:**

    ```bash
    npm run install:all
    ```

    This command will install dependencies for both the server and client.

## Running Locally

### Development

1.  **Start the server:**

    ```bash
    npm run dev:server
    ```

    This will start the Node.js server in development mode.

2.  **Start the client:**

    ```bash
    npm run dev:client
    ```

    This will start the Vue.js development server.

    The client application should be accessible at `http://localhost:8080` (or similar, depending on your setup). The server will run on a port defined in the server's `.env` file or default to a standard port.

## Scripts

The `package.json` file contains the following scripts:

-   `dev:server`: Starts the Node.js server in development mode.
-   `dev:client`: Starts the Vue.js development server.
-   `build:server`: Builds the Node.js server for production.
-   `build:client`: Builds the Vue.js client for production.
-   `build`: Builds both the server and client for production.
-   `start`: Starts the Node.js server in production mode.
-   `install:all`: Installs dependencies for both the server and client.
