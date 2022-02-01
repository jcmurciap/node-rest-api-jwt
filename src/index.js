import express from "express";

const PORT = 3000;
const app = express(PORT);
app.listen(PORT);

console.log(`Server listening on port http://localhost:${PORT}`);
