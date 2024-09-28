import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
const app: Application = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port:string | number = process.env.PORT || 8000;
const host: string = process.env.APP_HOST || 'localhost';
const api_version: string | number = process.env.API_VERSION || '/api/v1/';
app.get(`${api_version}test/`, (req: Request, res:Response) => {
 res.send("<h1>API is working properly....</h1>")
});
app.listen(port, () => {
    console.log(`Server is running on port ${port} on ${host} and on /api/${api_version}/...`)
});
