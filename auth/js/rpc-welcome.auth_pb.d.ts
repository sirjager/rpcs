import * as jspb from 'google-protobuf'



export class AuthWelcomeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthWelcomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthWelcomeRequest): AuthWelcomeRequest.AsObject;
  static serializeBinaryToWriter(message: AuthWelcomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthWelcomeRequest;
  static deserializeBinaryFromReader(message: AuthWelcomeRequest, reader: jspb.BinaryReader): AuthWelcomeRequest;
}

export namespace AuthWelcomeRequest {
  export type AsObject = {
  }
}

export class AuthWelcomeResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthWelcomeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthWelcomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthWelcomeResponse): AuthWelcomeResponse.AsObject;
  static serializeBinaryToWriter(message: AuthWelcomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthWelcomeResponse;
  static deserializeBinaryFromReader(message: AuthWelcomeResponse, reader: jspb.BinaryReader): AuthWelcomeResponse;
}

export namespace AuthWelcomeResponse {
  export type AsObject = {
    message: string,
  }
}

