import * as jspb from 'google-protobuf'



export class AuthenticationForgotPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AuthenticationForgotPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationForgotPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationForgotPasswordRequest): AuthenticationForgotPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationForgotPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationForgotPasswordRequest;
  static deserializeBinaryFromReader(message: AuthenticationForgotPasswordRequest, reader: jspb.BinaryReader): AuthenticationForgotPasswordRequest;
}

export namespace AuthenticationForgotPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class AuthenticationForgotPasswordResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthenticationForgotPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationForgotPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationForgotPasswordResponse): AuthenticationForgotPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationForgotPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationForgotPasswordResponse;
  static deserializeBinaryFromReader(message: AuthenticationForgotPasswordResponse, reader: jspb.BinaryReader): AuthenticationForgotPasswordResponse;
}

export namespace AuthenticationForgotPasswordResponse {
  export type AsObject = {
    message: string,
  }
}

export class AuthenticationResetPasswordRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AuthenticationResetPasswordRequest;

  getEmail(): string;
  setEmail(value: string): AuthenticationResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): AuthenticationResetPasswordRequest;

  getLogoutEverywhere(): boolean;
  setLogoutEverywhere(value: boolean): AuthenticationResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationResetPasswordRequest): AuthenticationResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationResetPasswordRequest;
  static deserializeBinaryFromReader(message: AuthenticationResetPasswordRequest, reader: jspb.BinaryReader): AuthenticationResetPasswordRequest;
}

export namespace AuthenticationResetPasswordRequest {
  export type AsObject = {
    code: string,
    email: string,
    newPassword: string,
    logoutEverywhere: boolean,
  }
}

export class AuthenticationResetPasswordResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthenticationResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationResetPasswordResponse): AuthenticationResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationResetPasswordResponse;
  static deserializeBinaryFromReader(message: AuthenticationResetPasswordResponse, reader: jspb.BinaryReader): AuthenticationResetPasswordResponse;
}

export namespace AuthenticationResetPasswordResponse {
  export type AsObject = {
    message: string,
  }
}

