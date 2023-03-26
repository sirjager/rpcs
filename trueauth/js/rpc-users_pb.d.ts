import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb';


export class UsersRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): UsersRequest;

  getPage(): number;
  setPage(value: number): UsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsersRequest): UsersRequest.AsObject;
  static serializeBinaryToWriter(message: UsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersRequest;
  static deserializeBinaryFromReader(message: UsersRequest, reader: jspb.BinaryReader): UsersRequest;
}

export namespace UsersRequest {
  export type AsObject = {
    limit: number,
    page: number,
  }
}

export class UsersResponse extends jspb.Message {
  getUsersList(): Array<user_pb.User>;
  setUsersList(value: Array<user_pb.User>): UsersResponse;
  clearUsersList(): UsersResponse;
  addUsers(value?: user_pb.User, index?: number): user_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
  static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersResponse;
  static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
  export type AsObject = {
    usersList: Array<user_pb.User.AsObject>,
  }
}

export class UserRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): UserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    identity: string,
  }
}

export class UserResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UserResponse;
  hasUser(): boolean;
  clearUser(): UserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject,
  }
}

