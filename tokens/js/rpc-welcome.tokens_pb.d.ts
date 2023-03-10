import * as jspb from 'google-protobuf'



export class TokensWelcomeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensWelcomeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokensWelcomeRequest): TokensWelcomeRequest.AsObject;
  static serializeBinaryToWriter(message: TokensWelcomeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensWelcomeRequest;
  static deserializeBinaryFromReader(message: TokensWelcomeRequest, reader: jspb.BinaryReader): TokensWelcomeRequest;
}

export namespace TokensWelcomeRequest {
  export type AsObject = {
  }
}

export class TokensWelcomeResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): TokensWelcomeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensWelcomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokensWelcomeResponse): TokensWelcomeResponse.AsObject;
  static serializeBinaryToWriter(message: TokensWelcomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensWelcomeResponse;
  static deserializeBinaryFromReader(message: TokensWelcomeResponse, reader: jspb.BinaryReader): TokensWelcomeResponse;
}

export namespace TokensWelcomeResponse {
  export type AsObject = {
    message: string,
  }
}

