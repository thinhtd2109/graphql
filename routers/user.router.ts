import express, { Request, Response } from 'express';
import { UserController } from '../src/users/user.controller';
import 'reflect-metadata';
import Container from 'typedi';

const router = express.Router();
const userController = Container.get(UserController);

router.post('/signin', async (req: Request, res: Response) => {
    const result = await userController.signin(req, res);
    return res.json(result)
});

export default router;
