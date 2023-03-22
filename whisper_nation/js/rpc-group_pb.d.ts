import * as jspb from 'google-protobuf'

import * as whisper_nation_pb from './whisper_nation_pb';


export class CreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateGroupResponse extends jspb.Message {
  getGroup(): whisper_nation_pb.Group | undefined;
  setGroup(value?: whisper_nation_pb.Group): CreateGroupResponse;
  hasGroup(): boolean;
  clearGroup(): CreateGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupResponse): CreateGroupResponse.AsObject;
  static serializeBinaryToWriter(message: CreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupResponse;
  static deserializeBinaryFromReader(message: CreateGroupResponse, reader: jspb.BinaryReader): CreateGroupResponse;
}

export namespace CreateGroupResponse {
  export type AsObject = {
    group?: whisper_nation_pb.Group.AsObject,
  }
}

export class ListGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsRequest): ListGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsRequest;
  static deserializeBinaryFromReader(message: ListGroupsRequest, reader: jspb.BinaryReader): ListGroupsRequest;
}

export namespace ListGroupsRequest {
  export type AsObject = {
  }
}

export class ListGroupsResponse extends jspb.Message {
  getGroupsList(): Array<whisper_nation_pb.Group>;
  setGroupsList(value: Array<whisper_nation_pb.Group>): ListGroupsResponse;
  clearGroupsList(): ListGroupsResponse;
  addGroups(value?: whisper_nation_pb.Group, index?: number): whisper_nation_pb.Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsResponse): ListGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: ListGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsResponse;
  static deserializeBinaryFromReader(message: ListGroupsResponse, reader: jspb.BinaryReader): ListGroupsResponse;
}

export namespace ListGroupsResponse {
  export type AsObject = {
    groupsList: Array<whisper_nation_pb.Group.AsObject>,
  }
}

export class ListGroupMembersRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): ListGroupMembersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupMembersRequest): ListGroupMembersRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupMembersRequest;
  static deserializeBinaryFromReader(message: ListGroupMembersRequest, reader: jspb.BinaryReader): ListGroupMembersRequest;
}

export namespace ListGroupMembersRequest {
  export type AsObject = {
    groupId: string,
  }
}

export class ListGroupMembersResponse extends jspb.Message {
  getMembersList(): Array<whisper_nation_pb.Member>;
  setMembersList(value: Array<whisper_nation_pb.Member>): ListGroupMembersResponse;
  clearMembersList(): ListGroupMembersResponse;
  addMembers(value?: whisper_nation_pb.Member, index?: number): whisper_nation_pb.Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupMembersResponse): ListGroupMembersResponse.AsObject;
  static serializeBinaryToWriter(message: ListGroupMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupMembersResponse;
  static deserializeBinaryFromReader(message: ListGroupMembersResponse, reader: jspb.BinaryReader): ListGroupMembersResponse;
}

export namespace ListGroupMembersResponse {
  export type AsObject = {
    membersList: Array<whisper_nation_pb.Member.AsObject>,
  }
}

