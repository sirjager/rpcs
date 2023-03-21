import * as grpcWeb from 'grpc-web';

import * as rpc$delete_authentication_pb from './rpc-delete.authentication_pb';
import * as rpc$health_authentication_pb from './rpc-health.authentication_pb';
import * as rpc$refresh_authentication_pb from './rpc-refresh.authentication_pb';
import * as rpc$signin_authentication_pb from './rpc-signin.authentication_pb';
import * as rpc$signout_authentication_pb from './rpc-signout.authentication_pb';
import * as rpc$signup_authentication_pb from './rpc-signup.authentication_pb';
import * as rpc$users_authentication_pb from './rpc-users.authentication_pb';
import * as rpc$welcome_authentication_pb from './rpc-welcome.authentication_pb';


export class AuthenticationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  authenticationWelcome(
    request: rpc$welcome_authentication_pb.AuthenticationWelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$welcome_authentication_pb.AuthenticationWelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$welcome_authentication_pb.AuthenticationWelcomeResponse>;

  authenticationHealth(
    request: rpc$health_authentication_pb.AuthenticationHealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_authentication_pb.AuthenticationHealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_authentication_pb.AuthenticationHealthResponse>;

  authenticationSignup(
    request: rpc$signup_authentication_pb.AuthenticationSignupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signup_authentication_pb.AuthenticationSignupResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signup_authentication_pb.AuthenticationSignupResponse>;

  authenticationSignin(
    request: rpc$signin_authentication_pb.AuthenticationSigninRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signin_authentication_pb.AuthenticationSigninResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signin_authentication_pb.AuthenticationSigninResponse>;

  authenticationSignout(
    request: rpc$signout_authentication_pb.AuthenticationSignoutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signout_authentication_pb.AuthenticationSignoutResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signout_authentication_pb.AuthenticationSignoutResponse>;

  authenticationRefreshToken(
    request: rpc$refresh_authentication_pb.AuthenticationRefreshTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$refresh_authentication_pb.AuthenticationRefreshTokenResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$refresh_authentication_pb.AuthenticationRefreshTokenResponse>;

  authenticationDeleteAccount(
    request: rpc$delete_authentication_pb.AuthenticationDeleteAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$delete_authentication_pb.AuthenticationDeleteAccountResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$delete_authentication_pb.AuthenticationDeleteAccountResponse>;

  authenticationUsers(
    request: rpc$users_authentication_pb.AuthenticationUsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$users_authentication_pb.AuthenticationUsersResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$users_authentication_pb.AuthenticationUsersResponse>;

  authenticationUser(
    request: rpc$users_authentication_pb.AuthenticationUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$users_authentication_pb.AuthenticationUserResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$users_authentication_pb.AuthenticationUserResponse>;

}

export class AuthenticationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  authenticationWelcome(
    request: rpc$welcome_authentication_pb.AuthenticationWelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$welcome_authentication_pb.AuthenticationWelcomeResponse>;

  authenticationHealth(
    request: rpc$health_authentication_pb.AuthenticationHealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_authentication_pb.AuthenticationHealthResponse>;

  authenticationSignup(
    request: rpc$signup_authentication_pb.AuthenticationSignupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signup_authentication_pb.AuthenticationSignupResponse>;

  authenticationSignin(
    request: rpc$signin_authentication_pb.AuthenticationSigninRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signin_authentication_pb.AuthenticationSigninResponse>;

  authenticationSignout(
    request: rpc$signout_authentication_pb.AuthenticationSignoutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signout_authentication_pb.AuthenticationSignoutResponse>;

  authenticationRefreshToken(
    request: rpc$refresh_authentication_pb.AuthenticationRefreshTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$refresh_authentication_pb.AuthenticationRefreshTokenResponse>;

  authenticationDeleteAccount(
    request: rpc$delete_authentication_pb.AuthenticationDeleteAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$delete_authentication_pb.AuthenticationDeleteAccountResponse>;

  authenticationUsers(
    request: rpc$users_authentication_pb.AuthenticationUsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_authentication_pb.AuthenticationUsersResponse>;

  authenticationUser(
    request: rpc$users_authentication_pb.AuthenticationUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_authentication_pb.AuthenticationUserResponse>;

}

