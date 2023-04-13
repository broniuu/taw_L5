import bodyParser from 'body-parser';
import config from '../config.js';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// Instancja serwera
const app = express();
app.use(express.static(__dirname + '/public'));

// middleware (funkcje) developerskie
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

// cors - mechanizm umożliwiający współdzielenie zasobów pomiędzy serwerami znajdującymi się w różnych domenach
app.use(cors());

routes(app);

// uruchomienie serwera
app.listen(config.port, function () {
  console.info(`Server is running at ${config.port}`)
});
