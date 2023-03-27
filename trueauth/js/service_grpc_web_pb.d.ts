import * as grpcWeb from 'grpc-web';

import * as rpc$users_pb from './rpc-users_pb';
import * as rpc$health_pb from './rpc-health_pb';
import * as rpc$login_pb from './rpc-login_pb';
import * as rpc$logout_pb from './rpc-logout_pb';
import * as rpc$register_pb from './rpc-register_pb';
import * as rpc$reset_pb from './rpc-reset_pb';
import * as rpc$verify_pb from './rpc-verify_pb';
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

  logout(
    request: rpc$logout_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$logout_pb.LogoutResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$logout_pb.LogoutResponse>;

  verify(
    request: rpc$verify_pb.VerifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$verify_pb.VerifyResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$verify_pb.VerifyResponse>;

  reset(
    request: rpc$reset_pb.ResetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$reset_pb.ResetResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$reset_pb.ResetResponse>;

  listUsers(
    request: rpc$users_pb.ListUsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$users_pb.ListUsersResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$users_pb.ListUsersResponse>;

  getUser(
    request: rpc$users_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$users_pb.GetUserResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$users_pb.GetUserResponse>;

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

  logout(
    request: rpc$logout_pb.LogoutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$logout_pb.LogoutResponse>;

  verify(
    request: rpc$verify_pb.VerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$verify_pb.VerifyResponse>;

  reset(
    request: rpc$reset_pb.ResetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$reset_pb.ResetResponse>;

  listUsers(
    request: rpc$users_pb.ListUsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_pb.ListUsersResponse>;

  getUser(
    request: rpc$users_pb.GetUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_pb.GetUserResponse>;

}

