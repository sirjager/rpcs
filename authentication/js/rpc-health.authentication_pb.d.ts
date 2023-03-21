import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class AuthenticationHealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationHealthRequest): AuthenticationHealthRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationHealthRequest;
  static deserializeBinaryFromReader(message: AuthenticationHealthRequest, reader: jspb.BinaryReader): AuthenticationHealthRequest;
}

export namespace AuthenticationHealthRequest {
  export type AsObject = {
  }
}

export class AuthenticationHealthResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): AuthenticationHealthResponse;

  getUnsafe(): boolean;
  setUnsafe(value: boolean): AuthenticationHealthResponse;

  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): AuthenticationHealthResponse;
  hasUptime(): boolean;
  clearUptime(): AuthenticationHealthResponse;

  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationHealthResponse;
  hasStarted(): boolean;
  clearStarted(): AuthenticationHealthResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationHealthResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): AuthenticationHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationHealthResponse): AuthenticationHealthResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationHealthResponse;
  static deserializeBinaryFromReader(message: AuthenticationHealthResponse, reader: jspb.BinaryReader): AuthenticationHealthResponse;
}

export namespace AuthenticationHealthResponse {
  export type AsObject = {
    status: string,
    unsafe: boolean,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

