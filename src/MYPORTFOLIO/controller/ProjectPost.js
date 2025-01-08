import Project from '../model/projectmodel.js'; // Ensure the path and extension are correct

const ProjectPost = async (req, res) => {
    try {
        let m = await Project.create(req.body);
        m = await m.save();
        res.send({ msg: "Project Posting....", DATA: m });
    } catch (e) {
        res.send({ msg: "ProjectPosting Error...." });
    }
}

export default ProjectPost;
