import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import petRoutes from './routes/petRoutes';

const app: Application = express(); 
const PORT = 3000; 

app.use(cors()); 
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Bem-vindo à API de Adoção de Pets! 🐾')
});

app.use('/pets', petRoutes); 

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
