import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class EmailsHealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailsHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailsHealthRequest): EmailsHealthRequest.AsObject;
  static serializeBinaryToWriter(message: EmailsHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailsHealthRequest;
  static deserializeBinaryFromReader(message: EmailsHealthRequest, reader: jspb.BinaryReader): EmailsHealthRequest;
}

export namespace EmailsHealthRequest {
  export type AsObject = {
  }
}

export class EmailsHealthResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): EmailsHealthResponse;

  getUnsafe(): boolean;
  setUnsafe(value: boolean): EmailsHealthResponse;

  getProtected(): boolean;
  setProtected(value: boolean): EmailsHealthResponse;

  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): EmailsHealthResponse;
  hasUptime(): boolean;
  clearUptime(): EmailsHealthResponse;

  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): EmailsHealthResponse;
  hasStarted(): boolean;
  clearStarted(): EmailsHealthResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): EmailsHealthResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): EmailsHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailsHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmailsHealthResponse): EmailsHealthResponse.AsObject;
  static serializeBinaryToWriter(message: EmailsHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailsHealthResponse;
  static deserializeBinaryFromReader(message: EmailsHealthResponse, reader: jspb.BinaryReader): EmailsHealthResponse;
}

export namespace EmailsHealthResponse {
  export type AsObject = {
    status: string,
    unsafe: boolean,
    pb_protected: boolean,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

