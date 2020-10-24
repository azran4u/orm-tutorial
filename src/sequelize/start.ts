import { Node } from './entity/node.model';
import { sequelize } from './sequelize';
import { Sync } from './entity/sync.model';

export async function start() {
  try {
    await Node.sync({ force: false });
    await Sync.sync({ force: false });

    await Node.upsert<Node>({ id: 1, name: 'eyal1' });
    await Node.upsert<Node>({ id: 2, name: 'eyal2' });
    await Node.upsert<Node>({ id: 3, name: 'eyal3' });
    await Node.upsert<Node>({ id: 4, name: 'eyal4' });

    await Sync.upsert<Sync>({ entityName: 'structures1', dataVersion: 'dv1' });
    await Sync.upsert<Sync>({ entityName: 'structures1', dataVersion: 'dv2' });
    await Sync.upsert<Sync>({ entityName: 'structures3', dataVersion: 'dv3' });
    await Sync.upsert<Sync>({ entityName: 'structures4', dataVersion: 'dv4' });

    const res = await sequelize.query('select * from myschema.nodes');
    debugger;
    console.log('done');
  } catch (error) {
    console.error(error);
  }
}
