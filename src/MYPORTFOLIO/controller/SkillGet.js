import Skill from '../model/skillmodel.js'; // Ensure the path and extension are correct

const SkillGet = async (req, res) => {
    try {
        const m = await Skill.find({});
        res.send({ msg: "SkillGetting.....", DATA: m });
    } catch (e) {
        res.send({ msg: "SkillGet Error...." });
    }
}

export default SkillGet;
