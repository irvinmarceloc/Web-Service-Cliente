"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    index(req, res) {
        res.json({ text: 'Listing games' });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM games', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        const { id } = req.params;
        database_1.default.query('SELECT * FROM games WHERE id=?', [id], function (err, result, fields) {
            if (err)
                throw err;
            res.json(result);
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO games set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    }
    delete(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE  FROM games WHERE id=?', [id], function (err, result, fields) {
            if (err)
                throw err;
        });
        res.json({ message: "The Game was deleted" });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE games set ? WHERE id=?', [req.body, id], function (err, result, fields) {
            if (err)
                throw err;
        });
        res.json({ message: "The Game was updated" });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
