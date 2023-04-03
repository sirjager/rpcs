import * as jspb from 'google-protobuf'



export class AllowIPAddressRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AllowIPAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowIPAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllowIPAddressRequest): AllowIPAddressRequest.AsObject;
  static serializeBinaryToWriter(message: AllowIPAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowIPAddressRequest;
  static deserializeBinaryFromReader(message: AllowIPAddressRequest, reader: jspb.BinaryReader): AllowIPAddressRequest;
}

export namespace AllowIPAddressRequest {
  export type AsObject = {
    code: string,
  }
}

export class AllowIPAddressResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AllowIPAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowIPAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllowIPAddressResponse): AllowIPAddressResponse.AsObject;
  static serializeBinaryToWriter(message: AllowIPAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowIPAddressResponse;
  static deserializeBinaryFromReader(message: AllowIPAddressResponse, reader: jspb.BinaryReader): AllowIPAddressResponse;
}

export namespace AllowIPAddressResponse {
  export type AsObject = {
    message: string,
  }
}

