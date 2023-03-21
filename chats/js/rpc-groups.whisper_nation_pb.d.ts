import * as jspb from 'google-protobuf'

import * as whisper_nation_pb from './whisper_nation_pb';


export class WhisperNationListGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationListGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationListGroupsRequest): WhisperNationListGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: WhisperNationListGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationListGroupsRequest;
  static deserializeBinaryFromReader(message: WhisperNationListGroupsRequest, reader: jspb.BinaryReader): WhisperNationListGroupsRequest;
}

export namespace WhisperNationListGroupsRequest {
  export type AsObject = {
  }
}

export class WhisperNationListGroupsResponse extends jspb.Message {
  getGroupsList(): Array<whisper_nation_pb.WhisperNationGroup>;
  setGroupsList(value: Array<whisper_nation_pb.WhisperNationGroup>): WhisperNationListGroupsResponse;
  clearGroupsList(): WhisperNationListGroupsResponse;
  addGroups(value?: whisper_nation_pb.WhisperNationGroup, index?: number): whisper_nation_pb.WhisperNationGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationListGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationListGroupsResponse): WhisperNationListGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: WhisperNationListGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationListGroupsResponse;
  static deserializeBinaryFromReader(message: WhisperNationListGroupsResponse, reader: jspb.BinaryReader): WhisperNationListGroupsResponse;
}

export namespace WhisperNationListGroupsResponse {
  export type AsObject = {
    groupsList: Array<whisper_nation_pb.WhisperNationGroup.AsObject>,
  }
}

export class WhisperNationCreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): WhisperNationCreateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationCreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationCreateGroupRequest): WhisperNationCreateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: WhisperNationCreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationCreateGroupRequest;
  static deserializeBinaryFromReader(message: WhisperNationCreateGroupRequest, reader: jspb.BinaryReader): WhisperNationCreateGroupRequest;
}

export namespace WhisperNationCreateGroupRequest {
  export type AsObject = {
    name: string,
  }
}

export class WhisperNationCreateGroupResponse extends jspb.Message {
  getGroup(): whisper_nation_pb.WhisperNationGroup | undefined;
  setGroup(value?: whisper_nation_pb.WhisperNationGroup): WhisperNationCreateGroupResponse;
  hasGroup(): boolean;
  clearGroup(): WhisperNationCreateGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationCreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationCreateGroupResponse): WhisperNationCreateGroupResponse.AsObject;
  static serializeBinaryToWriter(message: WhisperNationCreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationCreateGroupResponse;
  static deserializeBinaryFromReader(message: WhisperNationCreateGroupResponse, reader: jspb.BinaryReader): WhisperNationCreateGroupResponse;
}

export namespace WhisperNationCreateGroupResponse {
  export type AsObject = {
    group?: whisper_nation_pb.WhisperNationGroup.AsObject,
  }
}

export class WhisperNationJoinGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): WhisperNationJoinGroupRequest;

  getUserId(): string;
  setUserId(value: string): WhisperNationJoinGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationJoinGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationJoinGroupRequest): WhisperNationJoinGroupRequest.AsObject;
  static serializeBinaryToWriter(message: WhisperNationJoinGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationJoinGroupRequest;
  static deserializeBinaryFromReader(message: WhisperNationJoinGroupRequest, reader: jspb.BinaryReader): WhisperNationJoinGroupRequest;
}

export namespace WhisperNationJoinGroupRequest {
  export type AsObject = {
    groupId: string,
    userId: string,
  }
}

export class WhisperNationJoinGroupResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): WhisperNationJoinGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationJoinGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationJoinGroupResponse): WhisperNationJoinGroupResponse.AsObject;
  static serializeBinaryToWriter(message: WhisperNationJoinGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationJoinGroupResponse;
  static deserializeBinaryFromReader(message: WhisperNationJoinGroupResponse, reader: jspb.BinaryReader): WhisperNationJoinGroupResponse;
}

export namespace WhisperNationJoinGroupResponse {
  export type AsObject = {
    message: string,
  }
}

