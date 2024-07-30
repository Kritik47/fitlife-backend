import Skill from '../model/skillmodel.js'; // Ensure the path and extension are correct

const SkillPost = async (req, res) => {
    try {
        let m = await Skill.create(req.body);
        m = await m.save();
        res.send({ msg: "SkillPosting.....", DATA: m });
    } catch (e) {
        res.send({ msg: "SkillPost Error...." });
    }
}

export default SkillPost;
