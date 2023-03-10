import * as jspb from 'google-protobuf'

import * as payload_tokens_pb from './payload.tokens_pb';


export class TokensCreateRequest extends jspb.Message {
  getData(): string;
  setData(value: string): TokensCreateRequest;

  getBuilder(): string;
  setBuilder(value: string): TokensCreateRequest;

  getSecs(): number;
  setSecs(value: number): TokensCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokensCreateRequest): TokensCreateRequest.AsObject;
  static serializeBinaryToWriter(message: TokensCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensCreateRequest;
  static deserializeBinaryFromReader(message: TokensCreateRequest, reader: jspb.BinaryReader): TokensCreateRequest;
}

export namespace TokensCreateRequest {
  export type AsObject = {
    data: string,
    builder: string,
    secs: number,
  }
}

export class TokensCreateResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokensCreateResponse;

  getPayload(): payload_tokens_pb.TokensPayload | undefined;
  setPayload(value?: payload_tokens_pb.TokensPayload): TokensCreateResponse;
  hasPayload(): boolean;
  clearPayload(): TokensCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokensCreateResponse): TokensCreateResponse.AsObject;
  static serializeBinaryToWriter(message: TokensCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensCreateResponse;
  static deserializeBinaryFromReader(message: TokensCreateResponse, reader: jspb.BinaryReader): TokensCreateResponse;
}

export namespace TokensCreateResponse {
  export type AsObject = {
    token: string,
    payload?: payload_tokens_pb.TokensPayload.AsObject,
  }
}

