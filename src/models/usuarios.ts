import { DataTypes } from 'sequelize';
import bcrypt from "bcryptjs";
import db from "../tools/connection";

const Usuario = db.define(
    "Usuario",
    {
        usuarioId: {
            type: DataTypes.UUID.toString().toLowerCase(),
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        empleadoId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usuario: {
            type: DataTypes.STRING.toString().toLowerCase(),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING.toString().toLowerCase(),
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
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

        hooks: {
            beforeCreate: (Usuario: any) => {
                Usuario.contraseña = generateHash(Usuario);
            },
            beforeUpdate: (Usuario: any) => {
                Usuario.contraseña = generateHash(Usuario);
            },

        }
    }
);

Usuario.prototype.validPassword = function (password: string): boolean {
    return bcrypt.compareSync(password, this.contraseña);
};

function generateHash(Usuario: any) {
    if (Usuario === null) {
        throw new Error('No found user');
    }
    else if (!Usuario.changed('contraseña')) return Usuario.contraseña;
    else {
        let salt = bcrypt.genSaltSync();
        return Usuario.contraseña = bcrypt.hashSync(Usuario.contraseña, salt);
    }
}

export default Usuario;