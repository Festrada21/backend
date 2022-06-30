"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connection_1 = __importDefault(require("../tools/connection"));
const Usuario = connection_1.default.define("Usuario", {
    usuarioId: {
        type: sequelize_1.DataTypes.UUID.toString().toLowerCase(),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    empleadoId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING.toString().toLowerCase(),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING.toString().toLowerCase(),
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fechaEdicion: {
        type: sequelize_1.DataTypes.DATE,
    },
    Habilitado: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
}, {
    timestamps: false,
    hooks: {
        beforeCreate: (Usuario) => {
            Usuario.contraseña = generateHash(Usuario);
        },
        beforeUpdate: (Usuario) => {
            Usuario.contraseña = generateHash(Usuario);
        },
    }
});
Usuario.prototype.validPassword = function (password) {
    return bcryptjs_1.default.compareSync(password, this.contraseña);
};
function generateHash(Usuario) {
    if (Usuario === null) {
        throw new Error('No found user');
    }
    else if (!Usuario.changed('contraseña'))
        return Usuario.contraseña;
    else {
        let salt = bcryptjs_1.default.genSaltSync();
        return Usuario.contraseña = bcryptjs_1.default.hashSync(Usuario.contraseña, salt);
    }
}
exports.default = Usuario;
//# sourceMappingURL=usuarios.js.map