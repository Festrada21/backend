import { DataTypes } from "sequelize";
import db from "../tools/connection";


const Empleados = db.define(
    "Empleados",
    {
        empleadoId: {
            type: DataTypes.UUID.toString().toLowerCase(),
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        paisId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codigoEmpleado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Ingrese el codigo del empleado.'
                }
            }
        },
        identificacionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Ingrese la identificación del empleado.'
                }
            }
        },
        numeroIdentificacion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Ingrese el número de identificación del empleado.'
                }
            }
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Ingrese los nombres del empleado.'
                }
            }
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Ingrese los apellidos del empleado.'
                }
            }
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechaAlta: {
            type: DataTypes.STRING,
        },
        fechaBaja: {
            type: DataTypes.STRING,
        },
        estadoId: {
            type: DataTypes.INTEGER,
        },
        generoId: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

export default Empleados;