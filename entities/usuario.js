import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

const Usuario = sequelize.define('Usuario', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.CHAR,
        allowNull: false,
        validate: {
            isIn: [['T', 'A', 'U']]
        }
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuarios',
    timestamps: false 
});

export default Usuario;
