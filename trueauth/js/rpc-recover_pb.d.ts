import * as jspb from 'google-protobuf'



export class RecoverRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): RecoverRequest;

  getEmail(): string;
  setEmail(value: string): RecoverRequest;

  getLogoutAll(): boolean;
  setLogoutAll(value: boolean): RecoverRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecoverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecoverRequest): RecoverRequest.AsObject;
  static serializeBinaryToWriter(message: RecoverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecoverRequest;
  static deserializeBinaryFromReader(message: RecoverRequest, reader: jspb.BinaryReader): RecoverRequest;
}

export namespace RecoverRequest {
  export type AsObject = {
    code: string,
    email: string,
    logoutAll: boolean,
  }
}

export class RecoverResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): RecoverResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecoverResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecoverResponse): RecoverResponse.AsObject;
  static serializeBinaryToWriter(message: RecoverResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecoverResponse;
  static deserializeBinaryFromReader(message: RecoverResponse, reader: jspb.BinaryReader): RecoverResponse;
}

export namespace RecoverResponse {
  export type AsObject = {
    message: string,
  }
}

