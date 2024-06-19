const express = require('express');
const morgan = require('morgan');
const sequelize = require('./config/database');
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');
const historyMedicRoutes = require('./routes/historyMedics');
const assistantRoutes = require('./routes/assistants');
const appointmentRoutes = require('./routes/appointments');
const adminRoutes = require('./routes/admins');
const userRoutes = require('./routes/users'); // Agregar la ruta de users
// Importa las otras rutas según sea necesario

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/history-medics', historyMedicRoutes);
app.use('/assistants', assistantRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/admins', adminRoutes);
app.use('/users', userRoutes); // Usar la ruta de users
// Usa las otras rutas según sea necesario

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

