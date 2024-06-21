const sequelize = require('./config/database');
const { Admin, Doctor, Patient, Assistant, User, Appointment } = require('./models');

const initializeData = async () => {
  try {
    await sequelize.sync({ force: true });

    // Crear admins de ejemplo
    await Admin.create({
      nombre: 'Admin',
      apellido: 'Admin',
      email: 'admin@example.com',
      telefono: '555-0001'
    });

    // Crear doctores de ejemplo
    await Doctor.create({
      nombre: 'Dr. Smith',
      apellido: 'Johnson',
      especialidad: 'Cardiologist',
      telefono: '555-1234',
      email: 'smith.johnson@example.com'
    });

    // Crear pacientes de ejemplo
    await Patient.create({
      nombre: 'John',
      apellido: 'Doe',
      fechanacimiento: '1980-01-01',
      direccion: '123 Main St',
      telefono: '555-5555',
      email: 'john.doe@example.com',
      idHistoryMedic: 101
    });

    // Crear asistentes de ejemplo
    await Assistant.create({
      nombre: 'Jane',
      apellido: 'Smith',
      email: 'jane.smith@example.com',
      telefono: '555-6789'
    });

    // Crear usuarios de ejemplo
    await User.create({
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
      roleId: 1
    });

    await User.create({
      email: 'smith.johnson@example.com',
      password: 'doctor123',
      role: 'doctor',
      roleId: 1
    });

    await User.create({
      email: 'john.doe@example.com',
      password: 'patient123',
      role: 'patient',
      roleId: 1
    });

    await User.create({
      email: 'jane.smith@example.com',
      password: 'assistant123',
      role: 'assistant',
      roleId: 1
    });

    // Crear citas de ejemplo
    await Appointment.create({
      date: '2024-06-25',
      time: '10:00:00',
      clientId: 1,
      doctorId: 1,
      status: 'pending',
      medicalInfo: 'Patient complaining of headaches and fever.'
    });

    console.log('Datos iniciales insertados');
  } catch (error) {
    console.error('Error al insertar datos iniciales:', error);
  }
};

module.exports = initializeData;
