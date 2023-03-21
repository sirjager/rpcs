import * as jspb from 'google-protobuf'



export class AuthenticationWelcomeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationWelcomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationWelcomeRequest): AuthenticationWelcomeRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationWelcomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationWelcomeRequest;
  static deserializeBinaryFromReader(message: AuthenticationWelcomeRequest, reader: jspb.BinaryReader): AuthenticationWelcomeRequest;
}

export namespace AuthenticationWelcomeRequest {
  export type AsObject = {
  }
}

export class AuthenticationWelcomeResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthenticationWelcomeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationWelcomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationWelcomeResponse): AuthenticationWelcomeResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationWelcomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationWelcomeResponse;
  static deserializeBinaryFromReader(message: AuthenticationWelcomeResponse, reader: jspb.BinaryReader): AuthenticationWelcomeResponse;
}

export namespace AuthenticationWelcomeResponse {
  export type AsObject = {
    message: string,
  }
}

