import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb';


export class RegisterRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getUsername(): string;
  setUsername(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getFirstname(): string;
  setFirstname(value: string): RegisterRequest;

  getLastname(): string;
  setLastname(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    email: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): RegisterResponse;
  hasUser(): boolean;
  clearUser(): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject,
  }
}

