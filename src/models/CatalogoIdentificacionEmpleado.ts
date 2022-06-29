import { DataTypes } from "sequelize";
import db from "../tools/connection";


const CatalogoIdentificacionEmpleado = db.define(
    "CatalogoIdentificacionEmpleado",
    {
        IdentificacionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        fechaEdicion: {
            type: DataTypes.DATE,
        },
        Habilitado: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

export default CatalogoIdentificacionEmpleado;