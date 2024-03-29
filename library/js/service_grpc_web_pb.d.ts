import * as grpcWeb from 'grpc-web';

import * as rpc$health_pb from './rpc-health_pb';
import * as rpc$search_pb from './rpc-search_pb';
import * as rpc$welcome_pb from './rpc-welcome_pb';


export class LibraryClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  welcome(
    request: rpc$welcome_pb.WelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$welcome_pb.WelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$welcome_pb.WelcomeResponse>;

  health(
    request: rpc$health_pb.HealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_pb.HealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_pb.HealthResponse>;

  search(
    request: rpc$search_pb.SearchRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$search_pb.SearchResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$search_pb.SearchResponse>;

}

export class LibraryPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  welcome(
    request: rpc$welcome_pb.WelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$welcome_pb.WelcomeResponse>;

  health(
    request: rpc$health_pb.HealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_pb.HealthResponse>;

  search(
    request: rpc$search_pb.SearchRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$search_pb.SearchResponse>;

}

