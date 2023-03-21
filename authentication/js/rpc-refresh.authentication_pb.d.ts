import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class AuthenticationRefreshTokenRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): AuthenticationRefreshTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationRefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationRefreshTokenRequest): AuthenticationRefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationRefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationRefreshTokenRequest;
  static deserializeBinaryFromReader(message: AuthenticationRefreshTokenRequest, reader: jspb.BinaryReader): AuthenticationRefreshTokenRequest;
}

export namespace AuthenticationRefreshTokenRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

export class AuthenticationRefreshTokenResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AuthenticationRefreshTokenResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationRefreshTokenResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): AuthenticationRefreshTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationRefreshTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationRefreshTokenResponse): AuthenticationRefreshTokenResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationRefreshTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationRefreshTokenResponse;
  static deserializeBinaryFromReader(message: AuthenticationRefreshTokenResponse, reader: jspb.BinaryReader): AuthenticationRefreshTokenResponse;
}

export namespace AuthenticationRefreshTokenResponse {
  export type AsObject = {
    accessToken: string,
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

