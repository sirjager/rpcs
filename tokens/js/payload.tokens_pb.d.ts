import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TokensPayloadData extends jspb.Message {
  getData(): string;
  setData(value: string): TokensPayloadData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensPayloadData.AsObject;
  static toObject(includeInstance: boolean, msg: TokensPayloadData): TokensPayloadData.AsObject;
  static serializeBinaryToWriter(message: TokensPayloadData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensPayloadData;
  static deserializeBinaryFromReader(message: TokensPayloadData, reader: jspb.BinaryReader): TokensPayloadData;
}

export namespace TokensPayloadData {
  export type AsObject = {
    data: string,
  }
}

export class TokensPayload extends jspb.Message {
  getId(): string;
  setId(value: string): TokensPayload;

  getIat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIat(value?: google_protobuf_timestamp_pb.Timestamp): TokensPayload;
  hasIat(): boolean;
  clearIat(): TokensPayload;

  getExpires(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpires(value?: google_protobuf_timestamp_pb.Timestamp): TokensPayload;
  hasExpires(): boolean;
  clearExpires(): TokensPayload;

  getPayload(): TokensPayloadData | undefined;
  setPayload(value?: TokensPayloadData): TokensPayload;
  hasPayload(): boolean;
  clearPayload(): TokensPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensPayload.AsObject;
  static toObject(includeInstance: boolean, msg: TokensPayload): TokensPayload.AsObject;
  static serializeBinaryToWriter(message: TokensPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensPayload;
  static deserializeBinaryFromReader(message: TokensPayload, reader: jspb.BinaryReader): TokensPayload;
}

export namespace TokensPayload {
  export type AsObject = {
    id: string,
    iat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expires?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    payload?: TokensPayloadData.AsObject,
  }
}

