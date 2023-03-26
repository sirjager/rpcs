import * as grpcWeb from 'grpc-web';

import * as rpc$health_pb from './rpc-health_pb';
import * as rpc$reset_pb from './rpc-reset_pb';
import * as rpc$signin_pb from './rpc-signin_pb';
import * as rpc$signout_pb from './rpc-signout_pb';
import * as rpc$signup_pb from './rpc-signup_pb';
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

  signup(
    request: rpc$signup_pb.SignupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signup_pb.SignupResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signup_pb.SignupResponse>;

  signin(
    request: rpc$signin_pb.SigninRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signin_pb.SigninResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signin_pb.SigninResponse>;

  signout(
    request: rpc$signout_pb.SignoutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signout_pb.SignoutResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signout_pb.SignoutResponse>;

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

  users(
    request: rpc$users_pb.UsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$users_pb.UsersResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$users_pb.UsersResponse>;

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

  signup(
    request: rpc$signup_pb.SignupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signup_pb.SignupResponse>;

  signin(
    request: rpc$signin_pb.SigninRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signin_pb.SigninResponse>;

  signout(
    request: rpc$signout_pb.SignoutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signout_pb.SignoutResponse>;

  verify(
    request: rpc$verify_pb.VerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$verify_pb.VerifyResponse>;

  reset(
    request: rpc$reset_pb.ResetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$reset_pb.ResetResponse>;

  users(
    request: rpc$users_pb.UsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_pb.UsersResponse>;

  user(
    request: rpc$users_pb.UserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_pb.UserResponse>;

}

