const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');


const cors = require('cors');
const isConnected = require('./middlewares/auth');

const app = express();

dotenv.config();

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/' + process.env.DB
).then(() => {
  console.log('Connexion à MongoDB réussie');
}).catch((error) => {
  console.log('Erreur de connexion à MongoDB :', error.message);
});

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);


// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
