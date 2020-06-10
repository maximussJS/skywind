import { config } from 'dotenv';

config();

import {ApplicationConfig, Application} from './application';

export * from './application';

export  const main = async (options: ApplicationConfig = {}) => {
  const app = new Application(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
};

if (require.main === module) {
  const config = {
    rest: {
      port: +(process.env.PORT ?? 8082),
      host: process.env.HOST || '0.0.0.0',
      openApiSpec: {
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
