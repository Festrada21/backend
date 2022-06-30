import { DataTypes } from "sequelize";
import db from '../tools/connection';

const Pais = db.define(
    "CatalogoPais",
    {
        PaisId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
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

export default Pais;