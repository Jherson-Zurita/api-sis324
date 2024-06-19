const Admin = require('../models/Admin');

const getAllAdmins = async () => {
  return await Admin.findAll();
};

const getAdminById = async (id) => {
  return await Admin.findByPk(id);
};

const createAdmin = async (adminData) => {
  return await Admin.create(adminData);
};

const updateAdmin = async (id, adminData) => {
  const admin = await Admin.findByPk(id);
  if (admin) {
    return await admin.update(adminData);
  }
  return null;
};

const deleteAdmin = async (id) => {
  const admin = await Admin.findByPk(id);
  if (admin) {
    await admin.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin
};
