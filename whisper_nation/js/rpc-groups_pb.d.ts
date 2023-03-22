import * as jspb from 'google-protobuf'

import * as whisper_nation_pb from './whisper_nation_pb';


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

export class WhisperNationListGroupMembersRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): WhisperNationListGroupMembersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationListGroupMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationListGroupMembersRequest): WhisperNationListGroupMembersRequest.AsObject;
  static serializeBinaryToWriter(message: WhisperNationListGroupMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationListGroupMembersRequest;
  static deserializeBinaryFromReader(message: WhisperNationListGroupMembersRequest, reader: jspb.BinaryReader): WhisperNationListGroupMembersRequest;
}

export namespace WhisperNationListGroupMembersRequest {
  export type AsObject = {
    groupId: string,
  }
}

export class WhisperNationListGroupMembersResponse extends jspb.Message {
  getMembersList(): Array<whisper_nation_pb.WhisperNationMember>;
  setMembersList(value: Array<whisper_nation_pb.WhisperNationMember>): WhisperNationListGroupMembersResponse;
  clearMembersList(): WhisperNationListGroupMembersResponse;
  addMembers(value?: whisper_nation_pb.WhisperNationMember, index?: number): whisper_nation_pb.WhisperNationMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationListGroupMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationListGroupMembersResponse): WhisperNationListGroupMembersResponse.AsObject;
  static serializeBinaryToWriter(message: WhisperNationListGroupMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationListGroupMembersResponse;
  static deserializeBinaryFromReader(message: WhisperNationListGroupMembersResponse, reader: jspb.BinaryReader): WhisperNationListGroupMembersResponse;
}

export namespace WhisperNationListGroupMembersResponse {
  export type AsObject = {
    membersList: Array<whisper_nation_pb.WhisperNationMember.AsObject>,
  }
}

