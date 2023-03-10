import * as grpcWeb from 'grpc-web';

import * as rpc$delete_auth_pb from './rpc-delete.auth_pb';
import * as rpc$forgot_auth_pb from './rpc-forgot.auth_pb';
import * as rpc$health_auth_pb from './rpc-health.auth_pb';
import * as rpc$refresh_auth_pb from './rpc-refresh.auth_pb';
import * as rpc$verify_auth_pb from './rpc-verify.auth_pb';
import * as rpc$signin_auth_pb from './rpc-signin.auth_pb';
import * as rpc$signout_auth_pb from './rpc-signout.auth_pb';
import * as rpc$signup_auth_pb from './rpc-signup.auth_pb';
import * as rpc$users_auth_pb from './rpc-users.auth_pb';
import * as rpc$welcome_auth_pb from './rpc-welcome.auth_pb';


export class AuthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  authWelcome(
    request: rpc$welcome_auth_pb.AuthWelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$welcome_auth_pb.AuthWelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$welcome_auth_pb.AuthWelcomeResponse>;

  authHealth(
    request: rpc$health_auth_pb.AuthHealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_auth_pb.AuthHealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_auth_pb.AuthHealthResponse>;

  authSignup(
    request: rpc$signup_auth_pb.AuthSignupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signup_auth_pb.AuthSignupResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signup_auth_pb.AuthSignupResponse>;

  authSignin(
    request: rpc$signin_auth_pb.AuthSigninRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signin_auth_pb.AuthSigninResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signin_auth_pb.AuthSigninResponse>;

  authSignout(
    request: rpc$signout_auth_pb.AuthSignoutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$signout_auth_pb.AuthSignoutResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$signout_auth_pb.AuthSignoutResponse>;

  authRefreshToken(
    request: rpc$refresh_auth_pb.AuthRefreshTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$refresh_auth_pb.AuthRefreshTokenResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$refresh_auth_pb.AuthRefreshTokenResponse>;

  authRequestEmailVerification(
    request: rpc$verify_auth_pb.AuthRequestEmailVerificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$verify_auth_pb.AuthRequestEmailVerificationResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$verify_auth_pb.AuthRequestEmailVerificationResponse>;

  authVerifyEmail(
    request: rpc$verify_auth_pb.AuthVerifyEmailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$verify_auth_pb.AuthVerifyEmailResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$verify_auth_pb.AuthVerifyEmailResponse>;

  authForgotPassword(
    request: rpc$forgot_auth_pb.AuthForgotPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$forgot_auth_pb.AuthForgotPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$forgot_auth_pb.AuthForgotPasswordResponse>;

  authResetPassword(
    request: rpc$forgot_auth_pb.AuthResetPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$forgot_auth_pb.AuthResetPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$forgot_auth_pb.AuthResetPasswordResponse>;

  authDeleteAccount(
    request: rpc$delete_auth_pb.AuthDeleteAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$delete_auth_pb.AuthDeleteAccountResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$delete_auth_pb.AuthDeleteAccountResponse>;

  authUsers(
    request: rpc$users_auth_pb.AuthUsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$users_auth_pb.AuthUsersResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$users_auth_pb.AuthUsersResponse>;

  authUser(
    request: rpc$users_auth_pb.AuthUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$users_auth_pb.AuthUserResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$users_auth_pb.AuthUserResponse>;

}

export class AuthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  authWelcome(
    request: rpc$welcome_auth_pb.AuthWelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$welcome_auth_pb.AuthWelcomeResponse>;

  authHealth(
    request: rpc$health_auth_pb.AuthHealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_auth_pb.AuthHealthResponse>;

  authSignup(
    request: rpc$signup_auth_pb.AuthSignupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signup_auth_pb.AuthSignupResponse>;

  authSignin(
    request: rpc$signin_auth_pb.AuthSigninRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signin_auth_pb.AuthSigninResponse>;

  authSignout(
    request: rpc$signout_auth_pb.AuthSignoutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$signout_auth_pb.AuthSignoutResponse>;

  authRefreshToken(
    request: rpc$refresh_auth_pb.AuthRefreshTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$refresh_auth_pb.AuthRefreshTokenResponse>;

  authRequestEmailVerification(
    request: rpc$verify_auth_pb.AuthRequestEmailVerificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$verify_auth_pb.AuthRequestEmailVerificationResponse>;

  authVerifyEmail(
    request: rpc$verify_auth_pb.AuthVerifyEmailRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$verify_auth_pb.AuthVerifyEmailResponse>;

  authForgotPassword(
    request: rpc$forgot_auth_pb.AuthForgotPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$forgot_auth_pb.AuthForgotPasswordResponse>;

  authResetPassword(
    request: rpc$forgot_auth_pb.AuthResetPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$forgot_auth_pb.AuthResetPasswordResponse>;

  authDeleteAccount(
    request: rpc$delete_auth_pb.AuthDeleteAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$delete_auth_pb.AuthDeleteAccountResponse>;

  authUsers(
    request: rpc$users_auth_pb.AuthUsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_auth_pb.AuthUsersResponse>;

  authUser(
    request: rpc$users_auth_pb.AuthUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$users_auth_pb.AuthUserResponse>;

}

