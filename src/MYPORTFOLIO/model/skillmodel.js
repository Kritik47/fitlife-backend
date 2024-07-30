import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
    skillname: {
        type: String,
        required: true,
    },
    skillimage: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Skill = mongoose.model('Skill', SkillSchema);

export default Skill;
