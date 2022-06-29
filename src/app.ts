import dotenv from 'dotenv'
import Server from './tools/server';
//para usar la configuracion por defecto y usar todas las variables de entorno
dotenv.config();

//TODO: aca se instancia el servidor
const server = new Server();

server.listen();