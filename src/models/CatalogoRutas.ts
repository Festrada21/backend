import { DataTypes } from "sequelize";
import db from "../tools/connection";


const CatalogoRutas = db.define(
    "CatalogoRutas",
    {
        IdRuta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        perfilId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Nivel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Ruta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Icon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default CatalogoRutas;