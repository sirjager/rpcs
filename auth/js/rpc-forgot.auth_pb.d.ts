import * as jspb from 'google-protobuf'



export class AuthForgotPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AuthForgotPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthForgotPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthForgotPasswordRequest): AuthForgotPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: AuthForgotPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthForgotPasswordRequest;
  static deserializeBinaryFromReader(message: AuthForgotPasswordRequest, reader: jspb.BinaryReader): AuthForgotPasswordRequest;
}

export namespace AuthForgotPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class AuthForgotPasswordResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthForgotPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthForgotPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthForgotPasswordResponse): AuthForgotPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: AuthForgotPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthForgotPasswordResponse;
  static deserializeBinaryFromReader(message: AuthForgotPasswordResponse, reader: jspb.BinaryReader): AuthForgotPasswordResponse;
}

export namespace AuthForgotPasswordResponse {
  export type AsObject = {
    message: string,
  }
}

export class AuthResetPasswordRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AuthResetPasswordRequest;

  getEmail(): string;
  setEmail(value: string): AuthResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): AuthResetPasswordRequest;

  getLogoutEverywhere(): boolean;
  setLogoutEverywhere(value: boolean): AuthResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResetPasswordRequest): AuthResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: AuthResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResetPasswordRequest;
  static deserializeBinaryFromReader(message: AuthResetPasswordRequest, reader: jspb.BinaryReader): AuthResetPasswordRequest;
}

export namespace AuthResetPasswordRequest {
  export type AsObject = {
    code: string,
    email: string,
    newPassword: string,
    logoutEverywhere: boolean,
  }
}

export class AuthResetPasswordResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResetPasswordResponse): AuthResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: AuthResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResetPasswordResponse;
  static deserializeBinaryFromReader(message: AuthResetPasswordResponse, reader: jspb.BinaryReader): AuthResetPasswordResponse;
}

export namespace AuthResetPasswordResponse {
  export type AsObject = {
    message: string,
  }
}

