import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as user_pb from './user_pb';


export class SigninRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): SigninRequest;

  getPassword(): string;
  setPassword(value: string): SigninRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigninRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SigninRequest): SigninRequest.AsObject;
  static serializeBinaryToWriter(message: SigninRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigninRequest;
  static deserializeBinaryFromReader(message: SigninRequest, reader: jspb.BinaryReader): SigninRequest;
}

export namespace SigninRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class SigninResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): SigninResponse;
  hasUser(): boolean;
  clearUser(): SigninResponse;

  getSessionId(): string;
  setSessionId(value: string): SigninResponse;

  getAccessToken(): string;
  setAccessToken(value: string): SigninResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): SigninResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): SigninResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): SigninResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): SigninResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): SigninResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigninResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SigninResponse): SigninResponse.AsObject;
  static serializeBinaryToWriter(message: SigninResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigninResponse;
  static deserializeBinaryFromReader(message: SigninResponse, reader: jspb.BinaryReader): SigninResponse;
}

export namespace SigninResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject,
    sessionId: string,
    accessToken: string,
    refreshToken: string,
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

