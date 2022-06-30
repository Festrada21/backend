"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../tools/connection"));
const CatalogoRutas = connection_1.default.define("CatalogoRutas", {
    IdRuta: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    perfilId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Nivel: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Ruta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Icon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false });
exports.default = CatalogoRutas;
//# sourceMappingURL=CatalogoRutas.js.map