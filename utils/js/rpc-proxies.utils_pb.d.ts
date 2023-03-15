import * as jspb from 'google-protobuf'



export class UtilsProxy extends jspb.Message {
  getHost(): string;
  setHost(value: string): UtilsProxy;

  getPort(): string;
  setPort(value: string): UtilsProxy;

  getSpeed(): number;
  setSpeed(value: number): UtilsProxy;

  getAnonymity(): number;
  setAnonymity(value: number): UtilsProxy;

  getUptime(): number;
  setUptime(value: number): UtilsProxy;

  getCity(): string;
  setCity(value: string): UtilsProxy;

  getCountry(): string;
  setCountry(value: string): UtilsProxy;

  getProtocol(): string;
  setProtocol(value: string): UtilsProxy;

  getScore(): number;
  setScore(value: number): UtilsProxy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsProxy.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsProxy): UtilsProxy.AsObject;
  static serializeBinaryToWriter(message: UtilsProxy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsProxy;
  static deserializeBinaryFromReader(message: UtilsProxy, reader: jspb.BinaryReader): UtilsProxy;
}

export namespace UtilsProxy {
  export type AsObject = {
    host: string,
    port: string,
    speed: number,
    anonymity: number,
    uptime: number,
    city: string,
    country: string,
    protocol: string,
    score: number,
  }
}

export class UtilsProxiesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsProxiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsProxiesRequest): UtilsProxiesRequest.AsObject;
  static serializeBinaryToWriter(message: UtilsProxiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsProxiesRequest;
  static deserializeBinaryFromReader(message: UtilsProxiesRequest, reader: jspb.BinaryReader): UtilsProxiesRequest;
}

export namespace UtilsProxiesRequest {
  export type AsObject = {
  }
}

export class UtilsProxiesResponse extends jspb.Message {
  getProxiesList(): Array<UtilsProxy>;
  setProxiesList(value: Array<UtilsProxy>): UtilsProxiesResponse;
  clearProxiesList(): UtilsProxiesResponse;
  addProxies(value?: UtilsProxy, index?: number): UtilsProxy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsProxiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsProxiesResponse): UtilsProxiesResponse.AsObject;
  static serializeBinaryToWriter(message: UtilsProxiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsProxiesResponse;
  static deserializeBinaryFromReader(message: UtilsProxiesResponse, reader: jspb.BinaryReader): UtilsProxiesResponse;
}

export namespace UtilsProxiesResponse {
  export type AsObject = {
    proxiesList: Array<UtilsProxy.AsObject>,
  }
}

