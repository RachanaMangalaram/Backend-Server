# Backend Server

## Description
This is a backend server for managing submissions, built using Express and TypeScript. The server uses a JSON file (`db.json`) as a database to store submissions. It provides the following endpoints:

- **/ping**: A GET request that always returns true.
- **/submit**: A POST request to submit new entries.
- **/read**: A GET request to read existing entries.

## Installation and Setup

1.**Install Node.js**
   Ensure that Node.js is installed on your machine. You can download it from [Node.js Downloads](https://nodejs.org/).

2.**Clone the Repository**
   Clone this repository to your local machine.

3.**Install Dependencies**
   Navigate to the project directory and run:
   ```bash
   npm install
