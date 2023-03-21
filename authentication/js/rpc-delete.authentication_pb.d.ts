import * as jspb from 'google-protobuf'



export class AuthenticationDeleteAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationDeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationDeleteAccountRequest): AuthenticationDeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationDeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationDeleteAccountRequest;
  static deserializeBinaryFromReader(message: AuthenticationDeleteAccountRequest, reader: jspb.BinaryReader): AuthenticationDeleteAccountRequest;
}

export namespace AuthenticationDeleteAccountRequest {
  export type AsObject = {
  }
}

export class AuthenticationDeleteAccountResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthenticationDeleteAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationDeleteAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationDeleteAccountResponse): AuthenticationDeleteAccountResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationDeleteAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationDeleteAccountResponse;
  static deserializeBinaryFromReader(message: AuthenticationDeleteAccountResponse, reader: jspb.BinaryReader): AuthenticationDeleteAccountResponse;
}

export namespace AuthenticationDeleteAccountResponse {
  export type AsObject = {
    message: string,
  }
}

