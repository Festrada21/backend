import { DataTypes } from "sequelize";
import db from "../tools/connection";


const Perfil = db.define(
    "Perfil",
    {
        perfilId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
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

export default Perfil;
