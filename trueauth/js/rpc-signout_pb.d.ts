import * as jspb from 'google-protobuf'



export class SignoutRequest extends jspb.Message {
  getSessionsList(): Array<string>;
  setSessionsList(value: Array<string>): SignoutRequest;
  clearSessionsList(): SignoutRequest;
  addSessions(value: string, index?: number): SignoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignoutRequest): SignoutRequest.AsObject;
  static serializeBinaryToWriter(message: SignoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignoutRequest;
  static deserializeBinaryFromReader(message: SignoutRequest, reader: jspb.BinaryReader): SignoutRequest;
}

export namespace SignoutRequest {
  export type AsObject = {
    sessionsList: Array<string>,
  }
}

export class SignoutResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SignoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignoutResponse): SignoutResponse.AsObject;
  static serializeBinaryToWriter(message: SignoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignoutResponse;
  static deserializeBinaryFromReader(message: SignoutResponse, reader: jspb.BinaryReader): SignoutResponse;
}

export namespace SignoutResponse {
  export type AsObject = {
    message: string,
  }
}

