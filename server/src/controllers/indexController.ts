import express, {Request, Response  } from 'express';
import gamesController from './gamesController';

class IndexController{

    public index (req: Request, res: Response) {
        res.json({text: 'API Is /api/games'})
    } 

}

const indexController = new IndexController();
export default gamesController;