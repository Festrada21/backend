//TODO: se crea la carpeta contenedora de los archivos de la base de datos
//TODO: se crea la clase del servidor y se debe de crear el constructor
import express, { Application } from "express";
import userRouter from "../routes/catalogopais_routes";
import cors from "cors";
import morgan from "morgan";

import db from "./connection";

class Server {
private app: Application;
private port: string;
  //TODO configuracion del endpoint del api
private apiPaths = {
    catalogopais: "/api/catalogopais",
};

constructor() {
    this.app = express();
    //TODO || es el operador or
    this.port = process.env.PORT || "3000";

    this.dbConnection();
    //TODO: metodos iniciales
    this.middlewares();
    //TODO: definir mis rutas
    this.routes();
}

//TODO: coneccion a la base de datos
async dbConnection() {
    try {

        await db.authenticate();
        console.log("Connection has been established successfully.");

    } catch (error) {
        throw new Error("Unable to connect to the database:");
        console.log(error);
    }
}

  //TODO crear Middlewares , que se ejecutan antes de otros procedimientos para el parceo del body, lectura

middlewares() {
    //cors
    this.app.use(cors());

    //morgan
    this.app.use(morgan('dev'));

    //lectura de body
    this.app.use(express.json());

    //carpeta publica
    // this.app.use(express.static("public"));
}

routes() {
    this.app.use(this.apiPaths.catalogopais, userRouter);
}
  //TODO: metodo para escuchar el puerto
listen() {
    this.app.listen(this.port, () => {
console.log("Server on port", this.port);
    });
}
}

export default Server;