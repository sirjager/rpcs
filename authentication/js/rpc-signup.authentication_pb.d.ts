import * as jspb from 'google-protobuf'

import * as user_authentication_pb from './user.authentication_pb';


export class AuthenticationSignupRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AuthenticationSignupRequest;

  getUsername(): string;
  setUsername(value: string): AuthenticationSignupRequest;

  getPassword(): string;
  setPassword(value: string): AuthenticationSignupRequest;

  getFirstname(): string;
  setFirstname(value: string): AuthenticationSignupRequest;

  getLastname(): string;
  setLastname(value: string): AuthenticationSignupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationSignupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationSignupRequest): AuthenticationSignupRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationSignupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationSignupRequest;
  static deserializeBinaryFromReader(message: AuthenticationSignupRequest, reader: jspb.BinaryReader): AuthenticationSignupRequest;
}

export namespace AuthenticationSignupRequest {
  export type AsObject = {
    email: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
  }
}

export class AuthenticationSignupResponse extends jspb.Message {
  getUser(): user_authentication_pb.AuthenticationUser | undefined;
  setUser(value?: user_authentication_pb.AuthenticationUser): AuthenticationSignupResponse;
  hasUser(): boolean;
  clearUser(): AuthenticationSignupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationSignupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationSignupResponse): AuthenticationSignupResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationSignupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationSignupResponse;
  static deserializeBinaryFromReader(message: AuthenticationSignupResponse, reader: jspb.BinaryReader): AuthenticationSignupResponse;
}

export namespace AuthenticationSignupResponse {
  export type AsObject = {
    user?: user_authentication_pb.AuthenticationUser.AsObject,
  }
}

