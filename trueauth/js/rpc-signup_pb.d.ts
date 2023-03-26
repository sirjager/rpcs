import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb';


export class SignupRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): SignupRequest;

  getUsername(): string;
  setUsername(value: string): SignupRequest;

  getPassword(): string;
  setPassword(value: string): SignupRequest;

  getFirstname(): string;
  setFirstname(value: string): SignupRequest;

  getLastname(): string;
  setLastname(value: string): SignupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignupRequest): SignupRequest.AsObject;
  static serializeBinaryToWriter(message: SignupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignupRequest;
  static deserializeBinaryFromReader(message: SignupRequest, reader: jspb.BinaryReader): SignupRequest;
}

export namespace SignupRequest {
  export type AsObject = {
    email: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
  }
}

export class SignupResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): SignupResponse;
  hasUser(): boolean;
  clearUser(): SignupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignupResponse): SignupResponse.AsObject;
  static serializeBinaryToWriter(message: SignupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignupResponse;
  static deserializeBinaryFromReader(message: SignupResponse, reader: jspb.BinaryReader): SignupResponse;
}

export namespace SignupResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject,
  }
}

