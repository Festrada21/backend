//TODO importar la conexion a base de datos y se configura
import { Sequelize } from "sequelize";

const db = new Sequelize('DBTest', 'sa', 'abc123**',
{
    host:       'localhost',
    dialect:    'mssql'
});

export default db;