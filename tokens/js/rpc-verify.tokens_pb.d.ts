import * as jspb from 'google-protobuf'

import * as payload_tokens_pb from './payload.tokens_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TokensVerifyRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokensVerifyRequest;

  getBuilder(): string;
  setBuilder(value: string): TokensVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokensVerifyRequest): TokensVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: TokensVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensVerifyRequest;
  static deserializeBinaryFromReader(message: TokensVerifyRequest, reader: jspb.BinaryReader): TokensVerifyRequest;
}

export namespace TokensVerifyRequest {
  export type AsObject = {
    token: string,
    builder: string,
  }
}

export class TokensVerifyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): TokensVerifyResponse;

  getIat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIat(value?: google_protobuf_timestamp_pb.Timestamp): TokensVerifyResponse;
  hasIat(): boolean;
  clearIat(): TokensVerifyResponse;

  getExpires(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpires(value?: google_protobuf_timestamp_pb.Timestamp): TokensVerifyResponse;
  hasExpires(): boolean;
  clearExpires(): TokensVerifyResponse;

  getPayload(): payload_tokens_pb.TokensPayloadData | undefined;
  setPayload(value?: payload_tokens_pb.TokensPayloadData): TokensVerifyResponse;
  hasPayload(): boolean;
  clearPayload(): TokensVerifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokensVerifyResponse): TokensVerifyResponse.AsObject;
  static serializeBinaryToWriter(message: TokensVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensVerifyResponse;
  static deserializeBinaryFromReader(message: TokensVerifyResponse, reader: jspb.BinaryReader): TokensVerifyResponse;
}

export namespace TokensVerifyResponse {
  export type AsObject = {
    id: string,
    iat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expires?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    payload?: payload_tokens_pb.TokensPayloadData.AsObject,
  }
}

