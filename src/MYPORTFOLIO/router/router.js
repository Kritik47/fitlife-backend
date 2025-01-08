import express from 'express';
import SkillPost from '../controller/SkillPost.js'; // Ensure the path and extension are correct
import SkillGet from '../controller/SkillGet.js'; // Ensure the path and extension are correct
import ProjectGet from '../controller/ProjectGet.js'; // Ensure the path and extension are correct
import ProjectPost from '../controller/ProjectPost.js'; // Ensure the path and extension are correct

const router = express.Router();

router.use(express.json());

// API FOR SKILL
router.post("/skillmyportfolio", SkillPost);
router.get('/skillmyportfolio', SkillGet);

// API FOR PROJECT
router.post("/projectmyportfolio", ProjectPost);
router.get("/projectmyportfolio", ProjectGet);

export default router;
