import { Application as CoreApplication } from '@loopback/core';
import { RestComponent } from '@loopback/rest';
import { GrpcComponent } from '@loopback/grpc';
import { ApplicationConfig } from '@loopback/core';
import { RepositoryMixin } from '@loopback/repository';
import { MemdbDataSource } from './datasources';
import { PlayerController } from './controllers';
import { PlayerRepository } from './repositories';


export { ApplicationConfig }

export class Application extends RepositoryMixin(CoreApplication) {
    constructor(options: ApplicationConfig) {
        super(options);
        this.component(RestComponent);
        this.component(GrpcComponent);
        this.dataSource(MemdbDataSource);
        this.repository(PlayerRepository);
        this.controller(PlayerController);
    }
}
