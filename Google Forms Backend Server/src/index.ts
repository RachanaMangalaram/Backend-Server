import express from 'express'
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;
const dbFilePath = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// /ping endpoint
app.get('/ping', (req, res) => {
    res.json(true);
});

// /submit endpoint
app.post('/submit', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const newSubmission = { name, email, phone, github_link, stopwatch_time };

    // Read the existing submissions
    const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

    // Add the new submission
    submissions.push(newSubmission);

    // Write back to the JSON file
    fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));

    res.status(201).json(newSubmission);
});

// /read endpoint
app.get('/read', (req, res) => {
    const index = parseInt(req.query.index as string, 10);

    if (isNaN(index)) {
        return res.status(400).json({ error: 'Invalid index' });
    }

    // Read the existing submissions
    const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

    if (index < 0 || index >= submissions.length) {
        return res.status(404).json({ error: 'Submission not found' });
    }

    res.json(submissions[index]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
