import * as jspb from 'google-protobuf'

import * as user_authentication_pb from './user.authentication_pb';


export class AuthenticationRequestEmailVerificationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationRequestEmailVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationRequestEmailVerificationRequest): AuthenticationRequestEmailVerificationRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationRequestEmailVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationRequestEmailVerificationRequest;
  static deserializeBinaryFromReader(message: AuthenticationRequestEmailVerificationRequest, reader: jspb.BinaryReader): AuthenticationRequestEmailVerificationRequest;
}

export namespace AuthenticationRequestEmailVerificationRequest {
  export type AsObject = {
  }
}

export class AuthenticationRequestEmailVerificationResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AuthenticationRequestEmailVerificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationRequestEmailVerificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationRequestEmailVerificationResponse): AuthenticationRequestEmailVerificationResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationRequestEmailVerificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationRequestEmailVerificationResponse;
  static deserializeBinaryFromReader(message: AuthenticationRequestEmailVerificationResponse, reader: jspb.BinaryReader): AuthenticationRequestEmailVerificationResponse;
}

export namespace AuthenticationRequestEmailVerificationResponse {
  export type AsObject = {
    message: string,
  }
}

export class AuthenticationVerifyEmailRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AuthenticationVerifyEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationVerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationVerifyEmailRequest): AuthenticationVerifyEmailRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationVerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationVerifyEmailRequest;
  static deserializeBinaryFromReader(message: AuthenticationVerifyEmailRequest, reader: jspb.BinaryReader): AuthenticationVerifyEmailRequest;
}

export namespace AuthenticationVerifyEmailRequest {
  export type AsObject = {
    code: string,
  }
}

export class AuthenticationVerifyEmailResponse extends jspb.Message {
  getUser(): user_authentication_pb.AuthenticationUser | undefined;
  setUser(value?: user_authentication_pb.AuthenticationUser): AuthenticationVerifyEmailResponse;
  hasUser(): boolean;
  clearUser(): AuthenticationVerifyEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationVerifyEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationVerifyEmailResponse): AuthenticationVerifyEmailResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationVerifyEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationVerifyEmailResponse;
  static deserializeBinaryFromReader(message: AuthenticationVerifyEmailResponse, reader: jspb.BinaryReader): AuthenticationVerifyEmailResponse;
}

export namespace AuthenticationVerifyEmailResponse {
  export type AsObject = {
    user?: user_authentication_pb.AuthenticationUser.AsObject,
  }
}

