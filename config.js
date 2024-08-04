import { Sequelize } from 'sequelize';

const isProduction = process.env.NODE_ENV === 'production';

let sequelize;

if (isProduction) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
} else {
    sequelize = new Sequelize('gubqcsxq', 'gubqcsxq', '2mUagw83C77Soq4j0PyX5BBJtR-78kcX', {
        host: 'isabelle.db.elephantsql.com',
        dialect: 'postgres'
    });
}

export default sequelize;
