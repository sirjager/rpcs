import * as jspb from 'google-protobuf'

import * as user_auth_pb from './user.auth_pb';


export class AuthSignupRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AuthSignupRequest;

  getUsername(): string;
  setUsername(value: string): AuthSignupRequest;

  getPassword(): string;
  setPassword(value: string): AuthSignupRequest;

  getFirstname(): string;
  setFirstname(value: string): AuthSignupRequest;

  getLastname(): string;
  setLastname(value: string): AuthSignupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthSignupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthSignupRequest): AuthSignupRequest.AsObject;
  static serializeBinaryToWriter(message: AuthSignupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthSignupRequest;
  static deserializeBinaryFromReader(message: AuthSignupRequest, reader: jspb.BinaryReader): AuthSignupRequest;
}

export namespace AuthSignupRequest {
  export type AsObject = {
    email: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
  }
}

export class AuthSignupResponse extends jspb.Message {
  getUser(): user_auth_pb.AuthUser | undefined;
  setUser(value?: user_auth_pb.AuthUser): AuthSignupResponse;
  hasUser(): boolean;
  clearUser(): AuthSignupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthSignupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthSignupResponse): AuthSignupResponse.AsObject;
  static serializeBinaryToWriter(message: AuthSignupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthSignupResponse;
  static deserializeBinaryFromReader(message: AuthSignupResponse, reader: jspb.BinaryReader): AuthSignupResponse;
}

export namespace AuthSignupResponse {
  export type AsObject = {
    user?: user_auth_pb.AuthUser.AsObject,
  }
}

