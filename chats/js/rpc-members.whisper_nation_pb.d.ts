import * as jspb from 'google-protobuf'

import * as whisper_nation_pb from './whisper_nation_pb';


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

