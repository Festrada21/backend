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
//TODO: se crea la carpeta contenedora de los archivos de la base de datos
//TODO: se crea la clase del servidor y se debe de crear el constructor
const express_1 = __importDefault(require("express"));
const CatalogoPais_1 = __importDefault(require("../routes/CatalogoPais"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const connection_1 = __importDefault(require("./connection"));
class Server {
    constructor() {
        //TODO configuracion del endpoint del api
        this.apiPaths = {
            catalogopais: "/api/catalogopais",
        };
        this.app = (0, express_1.default)();
        //TODO || es el operador or
        this.port = process.env.PORT || "3000";
        this.dbConnection();
        //TODO: metodos iniciales
        this.middlewares();
        //TODO: definir mis rutas
        this.routes();
    }
    //TODO: coneccion a la base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Connection has been established successfully.");
            }
            catch (error) {
                throw new Error("Unable to connect to the database:");
                console.log(error);
            }
        });
    }
    //TODO crear Middlewares , que se ejecutan antes de otros procedimientos para el parceo del body, lectura
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //morgan
        this.app.use((0, morgan_1.default)('dev'));
        //lectura de body
        this.app.use(express_1.default.json());
        //carpeta publica
        // this.app.use(express.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.catalogopais, CatalogoPais_1.default);
    }
    //TODO: metodo para escuchar el puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server on port", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map