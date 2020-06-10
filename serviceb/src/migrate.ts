import { Application } from './application';

export const migrate = async (args: string[]) => {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  console.log('Migrating schemas (%s existing schema)', existingSchema);

  const app = new Application({});
  await app.migrateSchema({existingSchema});

  return process.exit(0);
};

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
