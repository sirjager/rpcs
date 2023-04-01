import * as grpcWeb from 'grpc-web';

import * as rpc$verify_pb from './rpc-verify_pb';
import * as rpc$health_pb from './rpc-health_pb';
import * as rpc$login_pb from './rpc-login_pb';
import * as rpc$register_pb from './rpc-register_pb';
import * as rpc$welcome_pb from './rpc-welcome_pb';


export class TrueAuthClient {
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

  register(
    request: rpc$register_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$register_pb.RegisterResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$register_pb.RegisterResponse>;

  login(
    request: rpc$login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$login_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$login_pb.LoginResponse>;

  verifyEmail(
    request: rpc$verify_pb.VerifyEmailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$verify_pb.VerifyEmailResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$verify_pb.VerifyEmailResponse>;

  allowIPAddress(
    request: rpc$verify_pb.AllowIPAddressRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$verify_pb.AllowIPAddressResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$verify_pb.AllowIPAddressResponse>;

}

export class TrueAuthPromiseClient {
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

  register(
    request: rpc$register_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$register_pb.RegisterResponse>;

  login(
    request: rpc$login_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$login_pb.LoginResponse>;

  verifyEmail(
    request: rpc$verify_pb.VerifyEmailRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$verify_pb.VerifyEmailResponse>;

  allowIPAddress(
    request: rpc$verify_pb.AllowIPAddressRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$verify_pb.AllowIPAddressResponse>;

}

