import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class TokensHealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokensHealthRequest): TokensHealthRequest.AsObject;
  static serializeBinaryToWriter(message: TokensHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensHealthRequest;
  static deserializeBinaryFromReader(message: TokensHealthRequest, reader: jspb.BinaryReader): TokensHealthRequest;
}

export namespace TokensHealthRequest {
  export type AsObject = {
  }
}

export class TokensHealthResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): TokensHealthResponse;

  getProtected(): boolean;
  setProtected(value: boolean): TokensHealthResponse;

  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): TokensHealthResponse;
  hasUptime(): boolean;
  clearUptime(): TokensHealthResponse;

  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): TokensHealthResponse;
  hasStarted(): boolean;
  clearStarted(): TokensHealthResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TokensHealthResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): TokensHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokensHealthResponse): TokensHealthResponse.AsObject;
  static serializeBinaryToWriter(message: TokensHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensHealthResponse;
  static deserializeBinaryFromReader(message: TokensHealthResponse, reader: jspb.BinaryReader): TokensHealthResponse;
}

export namespace TokensHealthResponse {
  export type AsObject = {
    status: string,
    pb_protected: boolean,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

