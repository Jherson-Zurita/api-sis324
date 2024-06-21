const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Importa cors
const sequelize = require('./config/database');
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');
const historyMedicRoutes = require('./routes/historyMedics');
const assistantRoutes = require('./routes/assistants');
const appointmentRoutes = require('./routes/appointments');
const adminRoutes = require('./routes/admins');
const userRoutes = require('./routes/users'); // Agrega la ruta de users
const initializeData = require('./initData'); // Importa el script de inicialización

const app = express();

app.use(cors()); // Habilita CORS para todas las solicitudes

app.use(morgan('dev'));
app.use(express.json());

// Define las rutas de tu API
app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/history-medics', historyMedicRoutes);
app.use('/assistants', assistantRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/admins', adminRoutes);
app.use('/users', userRoutes); // Usa la ruta de users
// Usa las otras rutas según sea necesario

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  initializeData().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

