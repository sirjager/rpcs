import * as jspb from 'google-protobuf'



export class UtilsWelcomeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsWelcomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsWelcomeRequest): UtilsWelcomeRequest.AsObject;
  static serializeBinaryToWriter(message: UtilsWelcomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsWelcomeRequest;
  static deserializeBinaryFromReader(message: UtilsWelcomeRequest, reader: jspb.BinaryReader): UtilsWelcomeRequest;
}

export namespace UtilsWelcomeRequest {
  export type AsObject = {
  }
}

export class UtilsWelcomeResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UtilsWelcomeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtilsWelcomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UtilsWelcomeResponse): UtilsWelcomeResponse.AsObject;
  static serializeBinaryToWriter(message: UtilsWelcomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtilsWelcomeResponse;
  static deserializeBinaryFromReader(message: UtilsWelcomeResponse, reader: jspb.BinaryReader): UtilsWelcomeResponse;
}

export namespace UtilsWelcomeResponse {
  export type AsObject = {
    message: string,
  }
}

