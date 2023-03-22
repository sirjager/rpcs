import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class WhisperNationHealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationHealthRequest): WhisperNationHealthRequest.AsObject;
  static serializeBinaryToWriter(message: WhisperNationHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationHealthRequest;
  static deserializeBinaryFromReader(message: WhisperNationHealthRequest, reader: jspb.BinaryReader): WhisperNationHealthRequest;
}

export namespace WhisperNationHealthRequest {
  export type AsObject = {
  }
}

export class WhisperNationHealthResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): WhisperNationHealthResponse;

  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): WhisperNationHealthResponse;
  hasUptime(): boolean;
  clearUptime(): WhisperNationHealthResponse;

  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): WhisperNationHealthResponse;
  hasStarted(): boolean;
  clearStarted(): WhisperNationHealthResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): WhisperNationHealthResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): WhisperNationHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationHealthResponse): WhisperNationHealthResponse.AsObject;
  static serializeBinaryToWriter(message: WhisperNationHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationHealthResponse;
  static deserializeBinaryFromReader(message: WhisperNationHealthResponse, reader: jspb.BinaryReader): WhisperNationHealthResponse;
}

export namespace WhisperNationHealthResponse {
  export type AsObject = {
    status: string,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

