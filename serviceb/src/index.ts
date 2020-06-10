import { config } from 'dotenv';

config();

import { ApplicationConfig, Application as App } from './application';

export const main = async (options: ApplicationConfig = {}) => {

  const app = new App(options);

  await app.start();

  console.log(`Server is running at:`, 8081);

  return app;
};


if (require.main === module) {
  const config = {
      rest: {
        port: +(process.env.PORT ?? 8081),
        host: process.env.HOST || '0.0.0.0',
      },
      grpc: {
          port: process.env.GRPC_PORT || 3302
      }
  };
  console.log(config)
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
