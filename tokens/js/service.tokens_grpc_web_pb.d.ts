import * as grpcWeb from 'grpc-web';

import * as rpc$create_tokens_pb from './rpc-create.tokens_pb';
import * as rpc$health_tokens_pb from './rpc-health.tokens_pb';
import * as rpc$verify_tokens_pb from './rpc-verify.tokens_pb';
import * as rpc$welcome_tokens_pb from './rpc-welcome.tokens_pb';


export class TokensClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  tokensWelcome(
    request: rpc$welcome_tokens_pb.TokensWelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$welcome_tokens_pb.TokensWelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$welcome_tokens_pb.TokensWelcomeResponse>;

  tokensHealth(
    request: rpc$health_tokens_pb.TokensHealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_tokens_pb.TokensHealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_tokens_pb.TokensHealthResponse>;

  tokensCreate(
    request: rpc$create_tokens_pb.TokensCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$create_tokens_pb.TokensCreateResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$create_tokens_pb.TokensCreateResponse>;

  tokensVerify(
    request: rpc$verify_tokens_pb.TokensVerifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$verify_tokens_pb.TokensVerifyResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$verify_tokens_pb.TokensVerifyResponse>;

}

export class TokensPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  tokensWelcome(
    request: rpc$welcome_tokens_pb.TokensWelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$welcome_tokens_pb.TokensWelcomeResponse>;

  tokensHealth(
    request: rpc$health_tokens_pb.TokensHealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_tokens_pb.TokensHealthResponse>;

  tokensCreate(
    request: rpc$create_tokens_pb.TokensCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$create_tokens_pb.TokensCreateResponse>;

  tokensVerify(
    request: rpc$verify_tokens_pb.TokensVerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$verify_tokens_pb.TokensVerifyResponse>;

}

