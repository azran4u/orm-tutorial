import { start as sequelizeStart } from './sequelize/start';
import { start as typeOrmStart } from './typeorm/start';
(async () => {
  // await sequelizeStart();
  await typeOrmStart();
})();
