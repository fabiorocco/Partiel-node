const express = require('express');
const app = express();
const bikesRoutes = require('./routes/bikes');
const port = process.env.PORT = 3000;

// Middleware
app.use(express.json());
app.use('/api/bikes', bikesRoutes);

app.listen(port, () => console.log(`listening on port http://localhost:${port}`));
