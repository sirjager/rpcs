import * as jspb from 'google-protobuf'



export class RecoveryRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): RecoveryRequest;

  getEmail(): string;
  setEmail(value: string): RecoveryRequest;

  getLogoutAll(): boolean;
  setLogoutAll(value: boolean): RecoveryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecoveryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecoveryRequest): RecoveryRequest.AsObject;
  static serializeBinaryToWriter(message: RecoveryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecoveryRequest;
  static deserializeBinaryFromReader(message: RecoveryRequest, reader: jspb.BinaryReader): RecoveryRequest;
}

export namespace RecoveryRequest {
  export type AsObject = {
    code: string,
    email: string,
    logoutAll: boolean,
  }
}

export class RecoveryResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): RecoveryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecoveryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecoveryResponse): RecoveryResponse.AsObject;
  static serializeBinaryToWriter(message: RecoveryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecoveryResponse;
  static deserializeBinaryFromReader(message: RecoveryResponse, reader: jspb.BinaryReader): RecoveryResponse;
}

export namespace RecoveryResponse {
  export type AsObject = {
    message: string,
  }
}

