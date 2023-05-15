import * as jspb from 'google-protobuf'



export class AllowIPRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AllowIPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowIPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllowIPRequest): AllowIPRequest.AsObject;
  static serializeBinaryToWriter(message: AllowIPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowIPRequest;
  static deserializeBinaryFromReader(message: AllowIPRequest, reader: jspb.BinaryReader): AllowIPRequest;
}

export namespace AllowIPRequest {
  export type AsObject = {
    code: string,
  }
}

export class AllowIPResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AllowIPResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowIPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllowIPResponse): AllowIPResponse.AsObject;
  static serializeBinaryToWriter(message: AllowIPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowIPResponse;
  static deserializeBinaryFromReader(message: AllowIPResponse, reader: jspb.BinaryReader): AllowIPResponse;
}

export namespace AllowIPResponse {
  export type AsObject = {
    message: string,
  }
}

