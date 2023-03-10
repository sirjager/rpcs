import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class UtilsHealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsHealthRequest): UtilsHealthRequest.AsObject;
  static serializeBinaryToWriter(message: UtilsHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsHealthRequest;
  static deserializeBinaryFromReader(message: UtilsHealthRequest, reader: jspb.BinaryReader): UtilsHealthRequest;
}

export namespace UtilsHealthRequest {
  export type AsObject = {
  }
}

export class UtilsHealthResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): UtilsHealthResponse;

  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): UtilsHealthResponse;
  hasUptime(): boolean;
  clearUptime(): UtilsHealthResponse;

  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): UtilsHealthResponse;
  hasStarted(): boolean;
  clearStarted(): UtilsHealthResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): UtilsHealthResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): UtilsHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsHealthResponse): UtilsHealthResponse.AsObject;
  static serializeBinaryToWriter(message: UtilsHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsHealthResponse;
  static deserializeBinaryFromReader(message: UtilsHealthResponse, reader: jspb.BinaryReader): UtilsHealthResponse;
}

export namespace UtilsHealthResponse {
  export type AsObject = {
    status: string,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

