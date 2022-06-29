import { DataTypes } from "sequelize";
import db from '../tools/connection';


const vw_Empleados = db.define(
    "vw_Empleados",
    {
        empleadoId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        codigoEmpleado: {
            type: DataTypes.STRING,
        },
        nombres: {
            type: DataTypes.STRING,
        },
        apellidos: {
            type: DataTypes.STRING,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
        },
        fechaAlta: {
            type: DataTypes.DATE,
        },
        fechaBaja: {
            type: DataTypes.DATE,
        },
        estadoId: {
            type: DataTypes.INTEGER,
        },
        generoId: {
            type: DataTypes.INTEGER,
        },
        paisId: {
            type: DataTypes.INTEGER,
        },
        identificacionId: {
            type: DataTypes.INTEGER,
        },
        numeroIdentificacion: {
            type: DataTypes.INTEGER,
        },
        Pais: {
            type: DataTypes.STRING,
        },
        Identificacion: {
            type: DataTypes.STRING,
        },
        Genero: {
            type: DataTypes.STRING,
        },
        Estado: {
            type: DataTypes.STRING,
        },
        Foto: {
            type: DataTypes.STRING,
        },
        usuario: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        fechaEdicion: {
            type: DataTypes.DATE,
        },
        Habilitado: {
            type: DataTypes.BOOLEAN,
        },
    },
    { timestamps: false, freezeTableName: true }
);

export default vw_Empleados;