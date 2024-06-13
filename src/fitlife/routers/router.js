import express from 'express';
import { UserSignup,UserLogin } from '../controller/SignupandLogin.js';
import CreateContact from '../controller/Contact.js';
const router=express.Router();
router.use(express.json());
router.post('/fitlife/signup',UserSignup);
router.post('/fitlife/login',UserLogin);
router.post('/fitlife/contact',CreateContact);
export default router;