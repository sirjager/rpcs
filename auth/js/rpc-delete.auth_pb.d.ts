import * as jspb from 'google-protobuf'



export class AuthDeleteAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthDeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthDeleteAccountRequest): AuthDeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: AuthDeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthDeleteAccountRequest;
  static deserializeBinaryFromReader(message: AuthDeleteAccountRequest, reader: jspb.BinaryReader): AuthDeleteAccountRequest;
}

export namespace AuthDeleteAccountRequest {
  export type AsObject = {
  }
}

export class AuthDeleteAccountResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthDeleteAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthDeleteAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthDeleteAccountResponse): AuthDeleteAccountResponse.AsObject;
  static serializeBinaryToWriter(message: AuthDeleteAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthDeleteAccountResponse;
  static deserializeBinaryFromReader(message: AuthDeleteAccountResponse, reader: jspb.BinaryReader): AuthDeleteAccountResponse;
}

export namespace AuthDeleteAccountResponse {
  export type AsObject = {
    message: string,
  }
}

