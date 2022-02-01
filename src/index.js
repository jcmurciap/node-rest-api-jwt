import app from "./app";
import './database';

const PORT = 4000;
app.listen(PORT);

console.log(`Server listening on port http://localhost:${PORT}`);
