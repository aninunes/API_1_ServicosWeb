import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

const Filme = sequelize.define('Filme', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ano_lancamento: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    genero_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'genero',
            key: 'id'
        },
        allowNull: false
    }
}, {
    tableName: 'filme',
    timestamps: false
});

export default Filme;
