import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class WhisperNationMember extends jspb.Message {
  getId(): string;
  setId(value: string): WhisperNationMember;

  getName(): string;
  setName(value: string): WhisperNationMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationMember.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationMember): WhisperNationMember.AsObject;
  static serializeBinaryToWriter(message: WhisperNationMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationMember;
  static deserializeBinaryFromReader(message: WhisperNationMember, reader: jspb.BinaryReader): WhisperNationMember;
}

export namespace WhisperNationMember {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class WhisperNationMessage extends jspb.Message {
  getId(): string;
  setId(value: string): WhisperNationMessage;

  getContent(): string;
  setContent(value: string): WhisperNationMessage;

  getGroupId(): string;
  setGroupId(value: string): WhisperNationMessage;

  getUserId(): string;
  setUserId(value: string): WhisperNationMessage;

  getSentAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSentAt(value?: google_protobuf_timestamp_pb.Timestamp): WhisperNationMessage;
  hasSentAt(): boolean;
  clearSentAt(): WhisperNationMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationMessage): WhisperNationMessage.AsObject;
  static serializeBinaryToWriter(message: WhisperNationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationMessage;
  static deserializeBinaryFromReader(message: WhisperNationMessage, reader: jspb.BinaryReader): WhisperNationMessage;
}

export namespace WhisperNationMessage {
  export type AsObject = {
    id: string,
    content: string,
    groupId: string,
    userId: string,
    sentAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class WhisperNationGroup extends jspb.Message {
  getId(): string;
  setId(value: string): WhisperNationGroup;

  getName(): string;
  setName(value: string): WhisperNationGroup;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): WhisperNationGroup;
  hasCreatedAt(): boolean;
  clearCreatedAt(): WhisperNationGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationGroup.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationGroup): WhisperNationGroup.AsObject;
  static serializeBinaryToWriter(message: WhisperNationGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationGroup;
  static deserializeBinaryFromReader(message: WhisperNationGroup, reader: jspb.BinaryReader): WhisperNationGroup;
}

export namespace WhisperNationGroup {
  export type AsObject = {
    id: string,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

