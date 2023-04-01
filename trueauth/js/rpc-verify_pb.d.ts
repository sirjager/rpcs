import * as jspb from 'google-protobuf'



export class VerifyEmailRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): VerifyEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailRequest): VerifyEmailRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailRequest;
  static deserializeBinaryFromReader(message: VerifyEmailRequest, reader: jspb.BinaryReader): VerifyEmailRequest;
}

export namespace VerifyEmailRequest {
  export type AsObject = {
    code: string,
  }
}

export class VerifyEmailResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): VerifyEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailResponse): VerifyEmailResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailResponse;
  static deserializeBinaryFromReader(message: VerifyEmailResponse, reader: jspb.BinaryReader): VerifyEmailResponse;
}

export namespace VerifyEmailResponse {
  export type AsObject = {
    message: string,
  }
}

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

