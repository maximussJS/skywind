import { join } from 'path';
import * as grpc from 'grpc';
import { Player } from "../interfaces";
import { bind, BindingScope } from '@loopback/core';

const {
    SERVICE_B_HOST = 'service.b',
    SERVICE_B_PORT = '3302'
} = process.env;

const getClient = () => {
    const protoPath: string = join(__dirname, '..', '..', 'proto', 'player.proto');
    const proto = grpc.load(protoPath)['player'] as grpc.GrpcObject;
    const client = proto.PlayerService as typeof grpc.Client;
    return new client(`${SERVICE_B_HOST}:${SERVICE_B_PORT}`, grpc.credentials.createInsecure())
};

const asyncCall = async (input: {
    client: grpc.Client;
    method: string;
    data: object;
}): Promise<Player> => {
    const client = input.client as any;
    return new Promise<Player>((resolve, reject) =>
        client[input.method](input.data, (err: Error | null, response: Player) => err ? reject(err) : resolve(response)))
};


@bind({scope: BindingScope.TRANSIENT})
export class PlayerService {
    public client: grpc.Client;

    constructor() {
        this.client = getClient();
    }

    getByName(name: string): Promise<Player> {
      console.log(`${SERVICE_B_HOST}:${SERVICE_B_PORT}`)
        return asyncCall({
            client: this.client,
            method: 'getByName',
            data: {
                name
            }
        })
    }
}
