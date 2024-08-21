"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const FinancialSituation = require('./src/models/financialSituationSchema');
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
mongoose_1.default
    .connect('mongodb+srv://gustavonobg:anurb24244@financycontrol.zukq0.mongodb.net/?retryWrites=true&w=majority&appName=FinancyControl')
    .then(() => console.log('Connected!'))
    .catch((err) => console.error('Connection error:', err));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/financy', async (req, res) => {
    try {
        const financy = await FinancialSituation.find({});
        res.status(200).json(financy);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post('/financialsituation', async (req, res) => {
    try {
        const situation = await FinancialSituation.create(req.body);
        console.log(req.body);
        res.status(200).json(situation);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
