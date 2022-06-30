"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../tools/connection"));
const UsuarioEnPerfiles = connection_1.default.define("UsuarioEnPerfiles", {
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    perfilId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    usuarioId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    fechaEdicion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        unique: true,
    },
    Habilitado: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
}, { timestamps: false });
exports.default = UsuarioEnPerfiles;
//# sourceMappingURL=usuarioenperfiles.js.map