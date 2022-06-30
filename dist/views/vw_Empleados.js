"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../tools/connection"));
const vw_Empleados = connection_1.default.define("vw_Empleados", {
    empleadoId: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    codigoEmpleado: {
        type: sequelize_1.DataTypes.STRING,
    },
    nombres: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING,
    },
    fechaNacimiento: {
        type: sequelize_1.DataTypes.DATE,
    },
    fechaAlta: {
        type: sequelize_1.DataTypes.DATE,
    },
    fechaBaja: {
        type: sequelize_1.DataTypes.DATE,
    },
    estadoId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    generoId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    paisId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    identificacionId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    numeroIdentificacion: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Pais: {
        type: sequelize_1.DataTypes.STRING,
    },
    Identificacion: {
        type: sequelize_1.DataTypes.STRING,
    },
    Genero: {
        type: sequelize_1.DataTypes.STRING,
    },
    Estado: {
        type: sequelize_1.DataTypes.STRING,
    },
    Foto: {
        type: sequelize_1.DataTypes.STRING,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    fechaEdicion: {
        type: sequelize_1.DataTypes.DATE,
    },
    Habilitado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, { timestamps: false, freezeTableName: true });
exports.default = vw_Empleados;
//# sourceMappingURL=vw_Empleados.js.map