const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import all of our route files
const userRoutes = require('./routes/userRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const postRoutes = require('./routes/postRoutes'); // This line is crucial

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AgriQuest Brain is running.');
});

// Plug in all of our routes
app.use('/api/users', userRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/posts', postRoutes); // This line is crucial

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

