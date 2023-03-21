import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class WhisperNationMember extends jspb.Message {
  getId(): string;
  setId(value: string): WhisperNationMember;

  getUsername(): string;
  setUsername(value: string): WhisperNationMember;

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
    username: string,
  }
}

export class WhisperNationMessage extends jspb.Message {
  getContent(): string;
  setContent(value: string): WhisperNationMessage;

  getGroupId(): string;
  setGroupId(value: string): WhisperNationMessage;

  getUserId(): string;
  setUserId(value: string): WhisperNationMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationMessage): WhisperNationMessage.AsObject;
  static serializeBinaryToWriter(message: WhisperNationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationMessage;
  static deserializeBinaryFromReader(message: WhisperNationMessage, reader: jspb.BinaryReader): WhisperNationMessage;
}

export namespace WhisperNationMessage {
  export type AsObject = {
    content: string,
    groupId: string,
    userId: string,
  }
}

export class WhisperNationClient extends jspb.Message {
  getMessage(): WhisperNationMessage | undefined;
  setMessage(value?: WhisperNationMessage): WhisperNationClient;
  hasMessage(): boolean;
  clearMessage(): WhisperNationClient;

  getId(): string;
  setId(value: string): WhisperNationClient;

  getGroupId(): string;
  setGroupId(value: string): WhisperNationClient;

  getUserId(): string;
  setUserId(value: string): WhisperNationClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationClient.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationClient): WhisperNationClient.AsObject;
  static serializeBinaryToWriter(message: WhisperNationClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationClient;
  static deserializeBinaryFromReader(message: WhisperNationClient, reader: jspb.BinaryReader): WhisperNationClient;
}

export namespace WhisperNationClient {
  export type AsObject = {
    message?: WhisperNationMessage.AsObject,
    id: string,
    groupId: string,
    userId: string,
  }
}

export class WhisperNationGroup extends jspb.Message {
  getId(): string;
  setId(value: string): WhisperNationGroup;

  getName(): string;
  setName(value: string): WhisperNationGroup;

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
  }
}

