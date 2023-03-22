import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class HealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthRequest): HealthRequest.AsObject;
  static serializeBinaryToWriter(message: HealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthRequest;
  static deserializeBinaryFromReader(message: HealthRequest, reader: jspb.BinaryReader): HealthRequest;
}

export namespace HealthRequest {
  export type AsObject = {
  }
}

export class HealthResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): HealthResponse;

  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): HealthResponse;
  hasUptime(): boolean;
  clearUptime(): HealthResponse;

  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): HealthResponse;
  hasStarted(): boolean;
  clearStarted(): HealthResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): HealthResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): HealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthResponse): HealthResponse.AsObject;
  static serializeBinaryToWriter(message: HealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthResponse;
  static deserializeBinaryFromReader(message: HealthResponse, reader: jspb.BinaryReader): HealthResponse;
}

export namespace HealthResponse {
  export type AsObject = {
    status: string,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

