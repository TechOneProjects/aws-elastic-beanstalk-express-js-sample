const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("UK was here,You're welcome. Frankly my dear, I don't give a damn!"));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
