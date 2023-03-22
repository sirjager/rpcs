import * as jspb from 'google-protobuf'



export class WelcomeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WelcomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WelcomeRequest): WelcomeRequest.AsObject;
  static serializeBinaryToWriter(message: WelcomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WelcomeRequest;
  static deserializeBinaryFromReader(message: WelcomeRequest, reader: jspb.BinaryReader): WelcomeRequest;
}

export namespace WelcomeRequest {
  export type AsObject = {
  }
}

export class WelcomeResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): WelcomeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WelcomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WelcomeResponse): WelcomeResponse.AsObject;
  static serializeBinaryToWriter(message: WelcomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WelcomeResponse;
  static deserializeBinaryFromReader(message: WelcomeResponse, reader: jspb.BinaryReader): WelcomeResponse;
}

export namespace WelcomeResponse {
  export type AsObject = {
    message: string,
  }
}

