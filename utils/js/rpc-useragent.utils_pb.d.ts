import * as jspb from 'google-protobuf'



export class UtilsUserAgent extends jspb.Message {
  getUa(): string;
  setUa(value: string): UtilsUserAgent;

  getInfo(): string;
  setInfo(value: string): UtilsUserAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgent.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgent): UtilsUserAgent.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgent;
  static deserializeBinaryFromReader(message: UtilsUserAgent, reader: jspb.BinaryReader): UtilsUserAgent;
}

export namespace UtilsUserAgent {
  export type AsObject = {
    ua: string,
    info: string,
  }
}

export class UtilsUserAgentGroup extends jspb.Message {
  getName(): string;
  setName(value: string): UtilsUserAgentGroup;

  getAgentsList(): Array<UtilsUserAgent>;
  setAgentsList(value: Array<UtilsUserAgent>): UtilsUserAgentGroup;
  clearAgentsList(): UtilsUserAgentGroup;
  addAgents(value?: UtilsUserAgent, index?: number): UtilsUserAgent;

  getGroupsList(): Array<UtilsUserAgentGroup>;
  setGroupsList(value: Array<UtilsUserAgentGroup>): UtilsUserAgentGroup;
  clearGroupsList(): UtilsUserAgentGroup;
  addGroups(value?: UtilsUserAgentGroup, index?: number): UtilsUserAgentGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentGroup.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentGroup): UtilsUserAgentGroup.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentGroup;
  static deserializeBinaryFromReader(message: UtilsUserAgentGroup, reader: jspb.BinaryReader): UtilsUserAgentGroup;
}

export namespace UtilsUserAgentGroup {
  export type AsObject = {
    name: string,
    agentsList: Array<UtilsUserAgent.AsObject>,
    groupsList: Array<UtilsUserAgentGroup.AsObject>,
  }
}

export class UtilsUserAgentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsRequest): UtilsUserAgentsRequest.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsRequest;
  static deserializeBinaryFromReader(message: UtilsUserAgentsRequest, reader: jspb.BinaryReader): UtilsUserAgentsRequest;
}

export namespace UtilsUserAgentsRequest {
  export type AsObject = {
  }
}

export class UtilsUserAgentsResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UtilsUserAgentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsResponse): UtilsUserAgentsResponse.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsResponse;
  static deserializeBinaryFromReader(message: UtilsUserAgentsResponse, reader: jspb.BinaryReader): UtilsUserAgentsResponse;
}

export namespace UtilsUserAgentsResponse {
  export type AsObject = {
    message: string,
  }
}

export class UtilsUserAgentsGroupNamesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsGroupNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsGroupNamesRequest): UtilsUserAgentsGroupNamesRequest.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsGroupNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsGroupNamesRequest;
  static deserializeBinaryFromReader(message: UtilsUserAgentsGroupNamesRequest, reader: jspb.BinaryReader): UtilsUserAgentsGroupNamesRequest;
}

export namespace UtilsUserAgentsGroupNamesRequest {
  export type AsObject = {
  }
}

export class UtilsUserAgentsGroupNamesResponse extends jspb.Message {
  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): UtilsUserAgentsGroupNamesResponse;
  clearGroupsList(): UtilsUserAgentsGroupNamesResponse;
  addGroups(value: string, index?: number): UtilsUserAgentsGroupNamesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsGroupNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsGroupNamesResponse): UtilsUserAgentsGroupNamesResponse.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsGroupNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsGroupNamesResponse;
  static deserializeBinaryFromReader(message: UtilsUserAgentsGroupNamesResponse, reader: jspb.BinaryReader): UtilsUserAgentsGroupNamesResponse;
}

export namespace UtilsUserAgentsGroupNamesResponse {
  export type AsObject = {
    groupsList: Array<string>,
  }
}

export class UtilsUserAgentsGroupsRequest extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): UtilsUserAgentsGroupsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsGroupsRequest): UtilsUserAgentsGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsGroupsRequest;
  static deserializeBinaryFromReader(message: UtilsUserAgentsGroupsRequest, reader: jspb.BinaryReader): UtilsUserAgentsGroupsRequest;
}

export namespace UtilsUserAgentsGroupsRequest {
  export type AsObject = {
    group: string,
  }
}

export class UtilsUserAgentsGroupsResponse extends jspb.Message {
  getGroup(): UtilsUserAgentGroup | undefined;
  setGroup(value?: UtilsUserAgentGroup): UtilsUserAgentsGroupsResponse;
  hasGroup(): boolean;
  clearGroup(): UtilsUserAgentsGroupsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsGroupsResponse): UtilsUserAgentsGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsGroupsResponse;
  static deserializeBinaryFromReader(message: UtilsUserAgentsGroupsResponse, reader: jspb.BinaryReader): UtilsUserAgentsGroupsResponse;
}

export namespace UtilsUserAgentsGroupsResponse {
  export type AsObject = {
    group?: UtilsUserAgentGroup.AsObject,
  }
}

