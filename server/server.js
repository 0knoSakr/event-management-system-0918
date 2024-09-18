const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/customers', customerRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
