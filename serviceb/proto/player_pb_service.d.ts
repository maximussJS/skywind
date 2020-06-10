// package: player
// file: player.proto

import * as player_pb from "./player_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PlayerServicegetByName = {
  readonly methodName: string;
  readonly service: typeof PlayerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof player_pb.Body;
  readonly responseType: typeof player_pb.Player;
};

export class PlayerService {
  static readonly serviceName: string;
  static readonly getByName: PlayerServicegetByName;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class PlayerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getByName(
    requestMessage: player_pb.Body,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: player_pb.Player|null) => void
  ): UnaryResponse;
  getByName(
    requestMessage: player_pb.Body,
    callback: (error: ServiceError|null, responseMessage: player_pb.Player|null) => void
  ): UnaryResponse;
}

