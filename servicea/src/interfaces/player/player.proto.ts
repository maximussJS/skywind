export namespace player {
    export interface PlayerService {
        getByName(name: Body): Promise<Player>;
    }
    export namespace getByName {
        export const PROTO_NAME: string = 'player.proto';
        export const PROTO_PACKAGE: string = 'player';
        export const SERVICE_NAME: string = 'PlayerService';
        export const METHOD_NAME: string = 'getByName';
        export const REQUEST_STREAM: boolean = false;
        export const RESPONSE_STREAM: boolean = false;
    }
}
export interface Body {
    name: string;
}
export interface Player {
    name: string;
}