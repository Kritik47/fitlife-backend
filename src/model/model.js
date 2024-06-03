import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    experience: { type: String, required: true },
    company: { type: String, required: true }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;
