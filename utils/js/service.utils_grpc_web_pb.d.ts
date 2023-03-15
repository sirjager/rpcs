import * as grpcWeb from 'grpc-web';

import * as rpc$health_utils_pb from './rpc-health.utils_pb';
import * as rpc$proxies_utils_pb from './rpc-proxies.utils_pb';
import * as rpc$useragent_utils_pb from './rpc-useragent.utils_pb';
import * as rpc$welcome_utils_pb from './rpc-welcome.utils_pb';


export class UtilsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  utilsWelcome(
    request: rpc$welcome_utils_pb.UtilsWelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$welcome_utils_pb.UtilsWelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$welcome_utils_pb.UtilsWelcomeResponse>;

  utilsHealth(
    request: rpc$health_utils_pb.UtilsHealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_utils_pb.UtilsHealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_utils_pb.UtilsHealthResponse>;

  utilsUserAgents(
    request: rpc$useragent_utils_pb.UtilsUserAgentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$useragent_utils_pb.UtilsUserAgentsResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$useragent_utils_pb.UtilsUserAgentsResponse>;

  utilsUserAgentsPool(
    request: rpc$useragent_utils_pb.UtilsUserAgentsPoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$useragent_utils_pb.UtilsUserAgentsPoolResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$useragent_utils_pb.UtilsUserAgentsPoolResponse>;

  utilsUserAgentsPoolNames(
    request: rpc$useragent_utils_pb.UtilsUserAgentsPoolNamesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$useragent_utils_pb.UtilsUserAgentsPoolNamesResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$useragent_utils_pb.UtilsUserAgentsPoolNamesResponse>;

  utilsProxies(
    request: rpc$proxies_utils_pb.UtilsProxiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$proxies_utils_pb.UtilsProxiesResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$proxies_utils_pb.UtilsProxiesResponse>;

}

export class UtilsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  utilsWelcome(
    request: rpc$welcome_utils_pb.UtilsWelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$welcome_utils_pb.UtilsWelcomeResponse>;

  utilsHealth(
    request: rpc$health_utils_pb.UtilsHealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_utils_pb.UtilsHealthResponse>;

  utilsUserAgents(
    request: rpc$useragent_utils_pb.UtilsUserAgentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$useragent_utils_pb.UtilsUserAgentsResponse>;

  utilsUserAgentsPool(
    request: rpc$useragent_utils_pb.UtilsUserAgentsPoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$useragent_utils_pb.UtilsUserAgentsPoolResponse>;

  utilsUserAgentsPoolNames(
    request: rpc$useragent_utils_pb.UtilsUserAgentsPoolNamesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$useragent_utils_pb.UtilsUserAgentsPoolNamesResponse>;

  utilsProxies(
    request: rpc$proxies_utils_pb.UtilsProxiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$proxies_utils_pb.UtilsProxiesResponse>;

}

