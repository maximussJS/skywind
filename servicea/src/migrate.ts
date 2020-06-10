import { Application } from './application';

export async function migrate(args: string[]) {
  const app = new Application();
  await app.boot();

  return process.exit(0);
}

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
