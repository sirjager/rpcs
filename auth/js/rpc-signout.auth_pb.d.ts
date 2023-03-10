import * as jspb from 'google-protobuf'



export class AuthSignoutRequest extends jspb.Message {
  getSessionsList(): Array<string>;
  setSessionsList(value: Array<string>): AuthSignoutRequest;
  clearSessionsList(): AuthSignoutRequest;
  addSessions(value: string, index?: number): AuthSignoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthSignoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthSignoutRequest): AuthSignoutRequest.AsObject;
  static serializeBinaryToWriter(message: AuthSignoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthSignoutRequest;
  static deserializeBinaryFromReader(message: AuthSignoutRequest, reader: jspb.BinaryReader): AuthSignoutRequest;
}

export namespace AuthSignoutRequest {
  export type AsObject = {
    sessionsList: Array<string>,
  }
}

export class AuthSignoutResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthSignoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthSignoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthSignoutResponse): AuthSignoutResponse.AsObject;
  static serializeBinaryToWriter(message: AuthSignoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthSignoutResponse;
  static deserializeBinaryFromReader(message: AuthSignoutResponse, reader: jspb.BinaryReader): AuthSignoutResponse;
}

export namespace AuthSignoutResponse {
  export type AsObject = {
    message: string,
  }
}

