import * as jspb from 'google-protobuf'

import * as user_auth_pb from './user.auth_pb';


export class AuthRequestEmailVerificationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequestEmailVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequestEmailVerificationRequest): AuthRequestEmailVerificationRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRequestEmailVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequestEmailVerificationRequest;
  static deserializeBinaryFromReader(message: AuthRequestEmailVerificationRequest, reader: jspb.BinaryReader): AuthRequestEmailVerificationRequest;
}

export namespace AuthRequestEmailVerificationRequest {
  export type AsObject = {
  }
}

export class AuthRequestEmailVerificationResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthRequestEmailVerificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequestEmailVerificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequestEmailVerificationResponse): AuthRequestEmailVerificationResponse.AsObject;
  static serializeBinaryToWriter(message: AuthRequestEmailVerificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequestEmailVerificationResponse;
  static deserializeBinaryFromReader(message: AuthRequestEmailVerificationResponse, reader: jspb.BinaryReader): AuthRequestEmailVerificationResponse;
}

export namespace AuthRequestEmailVerificationResponse {
  export type AsObject = {
    message: string,
  }
}

export class AuthVerifyEmailRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AuthVerifyEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthVerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthVerifyEmailRequest): AuthVerifyEmailRequest.AsObject;
  static serializeBinaryToWriter(message: AuthVerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthVerifyEmailRequest;
  static deserializeBinaryFromReader(message: AuthVerifyEmailRequest, reader: jspb.BinaryReader): AuthVerifyEmailRequest;
}

export namespace AuthVerifyEmailRequest {
  export type AsObject = {
    code: string,
  }
}

export class AuthVerifyEmailResponse extends jspb.Message {
  getUser(): user_auth_pb.AuthUser | undefined;
  setUser(value?: user_auth_pb.AuthUser): AuthVerifyEmailResponse;
  hasUser(): boolean;
  clearUser(): AuthVerifyEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthVerifyEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthVerifyEmailResponse): AuthVerifyEmailResponse.AsObject;
  static serializeBinaryToWriter(message: AuthVerifyEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthVerifyEmailResponse;
  static deserializeBinaryFromReader(message: AuthVerifyEmailResponse, reader: jspb.BinaryReader): AuthVerifyEmailResponse;
}

export namespace AuthVerifyEmailResponse {
  export type AsObject = {
    user?: user_auth_pb.AuthUser.AsObject,
  }
}

