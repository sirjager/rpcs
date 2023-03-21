import * as jspb from 'google-protobuf'

import * as user_authentication_pb from './user.authentication_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class AuthenticationSigninRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): AuthenticationSigninRequest;

  getPassword(): string;
  setPassword(value: string): AuthenticationSigninRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationSigninRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationSigninRequest): AuthenticationSigninRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationSigninRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationSigninRequest;
  static deserializeBinaryFromReader(message: AuthenticationSigninRequest, reader: jspb.BinaryReader): AuthenticationSigninRequest;
}

export namespace AuthenticationSigninRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class AuthenticationSigninResponse extends jspb.Message {
  getUser(): user_authentication_pb.AuthenticationUser | undefined;
  setUser(value?: user_authentication_pb.AuthenticationUser): AuthenticationSigninResponse;
  hasUser(): boolean;
  clearUser(): AuthenticationSigninResponse;

  getSessionId(): string;
  setSessionId(value: string): AuthenticationSigninResponse;

  getAccessToken(): string;
  setAccessToken(value: string): AuthenticationSigninResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): AuthenticationSigninResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationSigninResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): AuthenticationSigninResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationSigninResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): AuthenticationSigninResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationSigninResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationSigninResponse): AuthenticationSigninResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationSigninResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationSigninResponse;
  static deserializeBinaryFromReader(message: AuthenticationSigninResponse, reader: jspb.BinaryReader): AuthenticationSigninResponse;
}

export namespace AuthenticationSigninResponse {
  export type AsObject = {
    user?: user_authentication_pb.AuthenticationUser.AsObject,
    sessionId: string,
    accessToken: string,
    refreshToken: string,
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

