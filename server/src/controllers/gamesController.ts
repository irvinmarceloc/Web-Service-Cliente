import express, {Request, Response  } from 'express';
import pool from '../database';

class GamesController{

    public index (req: Request, res: Response) {
        res.json({text: 'Listing games'});
    } 

    public async list (req: Request, res: Response) {
        pool.query('SELECT * FROM games', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public  getOne (req: Request, res: Response){
        const { id } = req.params;
        pool.query('SELECT * FROM games WHERE id=?',[id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    } 

    public  create (req: Request, res: Response){
        pool.query('INSERT INTO games set ?',[req.body]);
        res.json({message: 'Game Saved'});
    }

    public delete(req: Request, res: Response){
        const { id } = req.params;
        pool.query('DELETE  FROM games WHERE id=?',[id], function(err, result, fields) {
            if (err) throw err;
        });
        res.json({message: "The Game was deleted"});
    }

    public update(req: Request, res: Response){
        const { id } = req.params;
        pool.query('UPDATE games set ? WHERE id=?',[req.body, id], function(err, result, fields) {
            if (err) throw err;
        });
        res.json({message: "The Game was updated"});
    }

}

const gamesController = new GamesController();
export default gamesController;