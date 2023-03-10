import * as jspb from 'google-protobuf'

import * as user_auth_pb from './user.auth_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class AuthSigninRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): AuthSigninRequest;

  getPassword(): string;
  setPassword(value: string): AuthSigninRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthSigninRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthSigninRequest): AuthSigninRequest.AsObject;
  static serializeBinaryToWriter(message: AuthSigninRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthSigninRequest;
  static deserializeBinaryFromReader(message: AuthSigninRequest, reader: jspb.BinaryReader): AuthSigninRequest;
}

export namespace AuthSigninRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class AuthSigninResponse extends jspb.Message {
  getUser(): user_auth_pb.AuthUser | undefined;
  setUser(value?: user_auth_pb.AuthUser): AuthSigninResponse;
  hasUser(): boolean;
  clearUser(): AuthSigninResponse;

  getSessionId(): string;
  setSessionId(value: string): AuthSigninResponse;

  getAccessToken(): string;
  setAccessToken(value: string): AuthSigninResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): AuthSigninResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthSigninResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): AuthSigninResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthSigninResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): AuthSigninResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthSigninResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthSigninResponse): AuthSigninResponse.AsObject;
  static serializeBinaryToWriter(message: AuthSigninResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthSigninResponse;
  static deserializeBinaryFromReader(message: AuthSigninResponse, reader: jspb.BinaryReader): AuthSigninResponse;
}

export namespace AuthSigninResponse {
  export type AsObject = {
    user?: user_auth_pb.AuthUser.AsObject,
    sessionId: string,
    accessToken: string,
    refreshToken: string,
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

