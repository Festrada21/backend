import { DataTypes } from "sequelize";
import db from "../tools/connection";


const UsuarioEnPerfiles = db.define(
    "UsuarioEnPerfiles",
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        perfilId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        usuarioId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        fechaEdicion: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: true,
        },
        Habilitado: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
    },
    { timestamps: false }
);

export default UsuarioEnPerfiles;