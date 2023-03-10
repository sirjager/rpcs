import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class AuthRefreshTokenRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): AuthRefreshTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRefreshTokenRequest): AuthRefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRefreshTokenRequest;
  static deserializeBinaryFromReader(message: AuthRefreshTokenRequest, reader: jspb.BinaryReader): AuthRefreshTokenRequest;
}

export namespace AuthRefreshTokenRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

export class AuthRefreshTokenResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AuthRefreshTokenResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthRefreshTokenResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): AuthRefreshTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRefreshTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRefreshTokenResponse): AuthRefreshTokenResponse.AsObject;
  static serializeBinaryToWriter(message: AuthRefreshTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRefreshTokenResponse;
  static deserializeBinaryFromReader(message: AuthRefreshTokenResponse, reader: jspb.BinaryReader): AuthRefreshTokenResponse;
}

export namespace AuthRefreshTokenResponse {
  export type AsObject = {
    accessToken: string,
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

