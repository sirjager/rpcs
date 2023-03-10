import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class AuthHealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthHealthRequest): AuthHealthRequest.AsObject;
  static serializeBinaryToWriter(message: AuthHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthHealthRequest;
  static deserializeBinaryFromReader(message: AuthHealthRequest, reader: jspb.BinaryReader): AuthHealthRequest;
}

export namespace AuthHealthRequest {
  export type AsObject = {
  }
}

export class AuthHealthResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): AuthHealthResponse;

  getUnsafe(): boolean;
  setUnsafe(value: boolean): AuthHealthResponse;

  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): AuthHealthResponse;
  hasUptime(): boolean;
  clearUptime(): AuthHealthResponse;

  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): AuthHealthResponse;
  hasStarted(): boolean;
  clearStarted(): AuthHealthResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): AuthHealthResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): AuthHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthHealthResponse): AuthHealthResponse.AsObject;
  static serializeBinaryToWriter(message: AuthHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthHealthResponse;
  static deserializeBinaryFromReader(message: AuthHealthResponse, reader: jspb.BinaryReader): AuthHealthResponse;
}

export namespace AuthHealthResponse {
  export type AsObject = {
    status: string,
    unsafe: boolean,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

