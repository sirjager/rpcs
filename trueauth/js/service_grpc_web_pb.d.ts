import * as grpcWeb from 'grpc-web';

import * as rpc$ip_pb from './rpc-ip_pb';
import * as rpc$delete_pb from './rpc-delete_pb';
import * as rpc$forgot_pb from './rpc-forgot_pb';
import * as rpc$health_pb from './rpc-health_pb';
import * as rpc$login_pb from './rpc-login_pb';
import * as rpc$logout_pb from './rpc-logout_pb';
import * as rpc$refresh_pb from './rpc-refresh_pb';
import * as rpc$register_pb from './rpc-register_pb';
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

  verifyEmail(
    request: rpc$verify_pb.VerifyEmailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$verify_pb.VerifyEmailResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$verify_pb.VerifyEmailResponse>;

  logout(
    request: rpc$logout_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$logout_pb.LogoutResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$logout_pb.LogoutResponse>;

  refreshToken(
    request: rpc$refresh_pb.RefreshTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$refresh_pb.RefreshTokenResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$refresh_pb.RefreshTokenResponse>;

  forgotPassword(
    request: rpc$forgot_pb.ForgotPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$forgot_pb.ForgotPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$forgot_pb.ForgotPasswordResponse>;

  resetPassword(
    request: rpc$forgot_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$forgot_pb.ResetPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$forgot_pb.ResetPasswordResponse>;

  deleteAccount(
    request: rpc$delete_pb.DeleteAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$delete_pb.DeleteAccountResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$delete_pb.DeleteAccountResponse>;

  allowIPAddress(
    request: rpc$ip_pb.AllowIPAddressRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$ip_pb.AllowIPAddressResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$ip_pb.AllowIPAddressResponse>;

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

  logout(
    request: rpc$logout_pb.LogoutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$logout_pb.LogoutResponse>;

  refreshToken(
    request: rpc$refresh_pb.RefreshTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$refresh_pb.RefreshTokenResponse>;

  forgotPassword(
    request: rpc$forgot_pb.ForgotPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$forgot_pb.ForgotPasswordResponse>;

  resetPassword(
    request: rpc$forgot_pb.ResetPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$forgot_pb.ResetPasswordResponse>;

  deleteAccount(
    request: rpc$delete_pb.DeleteAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$delete_pb.DeleteAccountResponse>;

  allowIPAddress(
    request: rpc$ip_pb.AllowIPAddressRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$ip_pb.AllowIPAddressResponse>;

}

