import * as jspb from 'google-protobuf'



export class WhisperNationWelcomeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationWelcomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationWelcomeRequest): WhisperNationWelcomeRequest.AsObject;
  static serializeBinaryToWriter(message: WhisperNationWelcomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationWelcomeRequest;
  static deserializeBinaryFromReader(message: WhisperNationWelcomeRequest, reader: jspb.BinaryReader): WhisperNationWelcomeRequest;
}

export namespace WhisperNationWelcomeRequest {
  export type AsObject = {
  }
}

export class WhisperNationWelcomeResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): WhisperNationWelcomeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhisperNationWelcomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WhisperNationWelcomeResponse): WhisperNationWelcomeResponse.AsObject;
  static serializeBinaryToWriter(message: WhisperNationWelcomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhisperNationWelcomeResponse;
  static deserializeBinaryFromReader(message: WhisperNationWelcomeResponse, reader: jspb.BinaryReader): WhisperNationWelcomeResponse;
}

export namespace WhisperNationWelcomeResponse {
  export type AsObject = {
    message: string,
  }
}

