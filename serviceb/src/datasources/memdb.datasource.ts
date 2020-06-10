import { juggler } from '@loopback/repository';
import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';

const {
    DB_NAME,
    DB_PORT,
    DB_URL,
    DB_HOST,
    DB_USER,
    DB_PASSWORD
} = process.env;

const config = {
  url: DB_URL,
};

@lifeCycleObserver('datasource')
export class MemdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'memdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.memdb', {optional: true})
      dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
