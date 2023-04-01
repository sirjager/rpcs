import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as user_pb from './user_pb';


export class LoginRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    identity: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): LoginResponse;
  hasUser(): boolean;
  clearUser(): LoginResponse;

  getSessionId(): string;
  setSessionId(value: string): LoginResponse;

  getAccessToken(): string;
  setAccessToken(value: string): LoginResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): LoginResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): LoginResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject,
    sessionId: string,
    accessToken: string,
    refreshToken: string,
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

