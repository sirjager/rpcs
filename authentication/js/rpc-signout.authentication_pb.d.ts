import * as jspb from 'google-protobuf'



export class AuthenticationSignoutRequest extends jspb.Message {
  getSessionsList(): Array<string>;
  setSessionsList(value: Array<string>): AuthenticationSignoutRequest;
  clearSessionsList(): AuthenticationSignoutRequest;
  addSessions(value: string, index?: number): AuthenticationSignoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationSignoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationSignoutRequest): AuthenticationSignoutRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationSignoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationSignoutRequest;
  static deserializeBinaryFromReader(message: AuthenticationSignoutRequest, reader: jspb.BinaryReader): AuthenticationSignoutRequest;
}

export namespace AuthenticationSignoutRequest {
  export type AsObject = {
    sessionsList: Array<string>,
  }
}

export class AuthenticationSignoutResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthenticationSignoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationSignoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationSignoutResponse): AuthenticationSignoutResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationSignoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationSignoutResponse;
  static deserializeBinaryFromReader(message: AuthenticationSignoutResponse, reader: jspb.BinaryReader): AuthenticationSignoutResponse;
}

export namespace AuthenticationSignoutResponse {
  export type AsObject = {
    message: string,
  }
}

