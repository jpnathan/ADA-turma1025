import express, { Request, Response } from "express";
import { userController } from "../controllers";

const routes = express.Router();

routes.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await userController.findAll();

        return res.status(200).json(users);
    } catch (err) {
        console.log(err);
    };
});

// routes.get('/users/:id', (req: Request, res: Response) => { });
// routes.post('/users/', (req: Request, res: Response) => { });
// routes.put('/users/:id', (req: Request, res: Response) => { });
// routes.post('/users/:id/posts', (req: Request, res: Response) => { });

export default routes;

