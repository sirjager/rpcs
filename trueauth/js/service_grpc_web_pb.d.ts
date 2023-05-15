import * as grpcWeb from 'grpc-web';

import * as rpc$allowip_pb from './rpc-allowip_pb';
import * as rpc$delete_pb from './rpc-delete_pb';
import * as rpc$health_pb from './rpc-health_pb';
import * as rpc$login_pb from './rpc-login_pb';
import * as rpc$logout_pb from './rpc-logout_pb';
import * as rpc$recovery_pb from './rpc-recovery_pb';
import * as rpc$refresh_pb from './rpc-refresh_pb';
import * as rpc$register_pb from './rpc-register_pb';
import * as rpc$update_pb from './rpc-update_pb';
import * as rpc$users_pb from './rpc-users_pb';
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

  verify(
    request: rpc$verify_pb.VerifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$verify_pb.VerifyResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$verify_pb.VerifyResponse>;

  logout(
    request: rpc$logout_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$logout_pb.LogoutResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$logout_pb.LogoutResponse>;

  refresh(
    request: rpc$refresh_pb.RefreshRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$refresh_pb.RefreshResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$refresh_pb.RefreshResponse>;

  recovery(
    request: rpc$recovery_pb.RecoveryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$recovery_pb.RecoveryResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$recovery_pb.RecoveryResponse>;

  delete(
    request: rpc$delete_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$delete_pb.DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$delete_pb.DeleteResponse>;

  update(
    request: rpc$update_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$update_pb.UpdateResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$update_pb.UpdateResponse>;

  allowIP(
    request: rpc$allowip_pb.AllowIPRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$allowip_pb.AllowIPResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$allowip_pb.AllowIPResponse>;

  user(
    request: rpc$users_pb.UserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$users_pb.UserResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$users_pb.UserResponse>;

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

  verify(
    request: rpc$verify_pb.VerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$verify_pb.VerifyResponse>;

  logout(
    request: rpc$logout_pb.LogoutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$logout_pb.LogoutResponse>;

  refresh(
    request: rpc$refresh_pb.RefreshRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$refresh_pb.RefreshResponse>;

  recovery(
    request: rpc$recovery_pb.RecoveryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$recovery_pb.RecoveryResponse>;

  delete(
    request: rpc$delete_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$delete_pb.DeleteResponse>;

  update(
    request: rpc$update_pb.UpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$update_pb.UpdateResponse>;

  allowIP(
    request: rpc$allowip_pb.AllowIPRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$allowip_pb.AllowIPResponse>;

  user(
    request: rpc$users_pb.UserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_pb.UserResponse>;

}

