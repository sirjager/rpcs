import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb';


export class UpdateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UpdateRequest;

  getPassword(): string;
  setPassword(value: string): UpdateRequest;

  getFirstname(): string;
  setFirstname(value: string): UpdateRequest;

  getLastname(): string;
  setLastname(value: string): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
  }
}

export class UpdateResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UpdateResponse;
  hasUser(): boolean;
  clearUser(): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject,
  }
}

