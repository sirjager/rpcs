import * as jspb from 'google-protobuf'



export class ResetRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): ResetRequest;

  getEmail(): string;
  setEmail(value: string): ResetRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetRequest): ResetRequest.AsObject;
  static serializeBinaryToWriter(message: ResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetRequest;
  static deserializeBinaryFromReader(message: ResetRequest, reader: jspb.BinaryReader): ResetRequest;
}

export namespace ResetRequest {
  export type AsObject = {
    code: string,
    email: string,
    newPassword: string,
  }
}

export class ResetResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ResetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetResponse): ResetResponse.AsObject;
  static serializeBinaryToWriter(message: ResetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetResponse;
  static deserializeBinaryFromReader(message: ResetResponse, reader: jspb.BinaryReader): ResetResponse;
}

export namespace ResetResponse {
  export type AsObject = {
    message: string,
  }
}

