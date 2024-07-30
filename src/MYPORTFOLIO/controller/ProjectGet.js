import Project from '../model/projectmodel.js'; // Ensure the path and extension are correct

const ProjectGet = async (req, res) => {
    try {
        const m = await Project.find({});
        res.send({ msg: "Project Getting....", DATA: m });
    } catch (e) {
        res.send({ msg: "ProjectGetting Error...." });
    }
}

export default ProjectGet;
