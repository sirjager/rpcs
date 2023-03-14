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

export class UtilsUserAgentPool extends jspb.Message {
  getName(): string;
  setName(value: string): UtilsUserAgentPool;

  getUseragentsList(): Array<UtilsUserAgent>;
  setUseragentsList(value: Array<UtilsUserAgent>): UtilsUserAgentPool;
  clearUseragentsList(): UtilsUserAgentPool;
  addUseragents(value?: UtilsUserAgent, index?: number): UtilsUserAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentPool.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentPool): UtilsUserAgentPool.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentPool;
  static deserializeBinaryFromReader(message: UtilsUserAgentPool, reader: jspb.BinaryReader): UtilsUserAgentPool;
}

export namespace UtilsUserAgentPool {
  export type AsObject = {
    name: string,
    useragentsList: Array<UtilsUserAgent.AsObject>,
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

export class UtilsUserAgentsPoolNamesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsPoolNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsPoolNamesRequest): UtilsUserAgentsPoolNamesRequest.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsPoolNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsPoolNamesRequest;
  static deserializeBinaryFromReader(message: UtilsUserAgentsPoolNamesRequest, reader: jspb.BinaryReader): UtilsUserAgentsPoolNamesRequest;
}

export namespace UtilsUserAgentsPoolNamesRequest {
  export type AsObject = {
  }
}

export class UtilsUserAgentsPoolNamesResponse extends jspb.Message {
  getPoolsList(): Array<string>;
  setPoolsList(value: Array<string>): UtilsUserAgentsPoolNamesResponse;
  clearPoolsList(): UtilsUserAgentsPoolNamesResponse;
  addPools(value: string, index?: number): UtilsUserAgentsPoolNamesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsPoolNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsPoolNamesResponse): UtilsUserAgentsPoolNamesResponse.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsPoolNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsPoolNamesResponse;
  static deserializeBinaryFromReader(message: UtilsUserAgentsPoolNamesResponse, reader: jspb.BinaryReader): UtilsUserAgentsPoolNamesResponse;
}

export namespace UtilsUserAgentsPoolNamesResponse {
  export type AsObject = {
    poolsList: Array<string>,
  }
}

export class UtilsUserAgentsPoolRequest extends jspb.Message {
  getPool(): string;
  setPool(value: string): UtilsUserAgentsPoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsPoolRequest): UtilsUserAgentsPoolRequest.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsPoolRequest;
  static deserializeBinaryFromReader(message: UtilsUserAgentsPoolRequest, reader: jspb.BinaryReader): UtilsUserAgentsPoolRequest;
}

export namespace UtilsUserAgentsPoolRequest {
  export type AsObject = {
    pool: string,
  }
}

export class UtilsUserAgentsPoolResponse extends jspb.Message {
  getPool(): UtilsUserAgentPool | undefined;
  setPool(value?: UtilsUserAgentPool): UtilsUserAgentsPoolResponse;
  hasPool(): boolean;
  clearPool(): UtilsUserAgentsPoolResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsUserAgentsPoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsUserAgentsPoolResponse): UtilsUserAgentsPoolResponse.AsObject;
  static serializeBinaryToWriter(message: UtilsUserAgentsPoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsUserAgentsPoolResponse;
  static deserializeBinaryFromReader(message: UtilsUserAgentsPoolResponse, reader: jspb.BinaryReader): UtilsUserAgentsPoolResponse;
}

export namespace UtilsUserAgentsPoolResponse {
  export type AsObject = {
    pool?: UtilsUserAgentPool.AsObject,
  }
}

