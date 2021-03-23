import express from 'express';
import cors from 'cors';
import Controller from './Controller';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/trades', Controller.save);
app.get('/trades', Controller.list);
app.delete('/trades/:id', Controller.delete);

app.listen(3333, () => console.log('******** backend started ********'));
