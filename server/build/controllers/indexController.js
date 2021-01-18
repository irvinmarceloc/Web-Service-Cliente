"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gamesController_1 = __importDefault(require("./gamesController"));
class IndexController {
    index(req, res) {
        res.json({ text: 'API Is /api/games' });
    }
}
const indexController = new IndexController();
exports.default = gamesController_1.default;
