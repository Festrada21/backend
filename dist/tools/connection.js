"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TODO importar la conexion a base de datos y se configura
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('DBTest', 'sa', 'abc123**', {
    host: 'localhost',
    dialect: 'mssql'
});
exports.default = db;
//# sourceMappingURL=connection.js.map