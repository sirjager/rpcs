import * as jspb from 'google-protobuf'

import * as user_auth_pb from './user.auth_pb';


export class AuthUsersRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): AuthUsersRequest;

  getPage(): number;
  setPage(value: number): AuthUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUsersRequest): AuthUsersRequest.AsObject;
  static serializeBinaryToWriter(message: AuthUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUsersRequest;
  static deserializeBinaryFromReader(message: AuthUsersRequest, reader: jspb.BinaryReader): AuthUsersRequest;
}

export namespace AuthUsersRequest {
  export type AsObject = {
    limit: number,
    page: number,
  }
}

export class AuthUsersResponse extends jspb.Message {
  getUsersList(): Array<user_auth_pb.AuthUser>;
  setUsersList(value: Array<user_auth_pb.AuthUser>): AuthUsersResponse;
  clearUsersList(): AuthUsersResponse;
  addUsers(value?: user_auth_pb.AuthUser, index?: number): user_auth_pb.AuthUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUsersResponse): AuthUsersResponse.AsObject;
  static serializeBinaryToWriter(message: AuthUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUsersResponse;
  static deserializeBinaryFromReader(message: AuthUsersResponse, reader: jspb.BinaryReader): AuthUsersResponse;
}

export namespace AuthUsersResponse {
  export type AsObject = {
    usersList: Array<user_auth_pb.AuthUser.AsObject>,
  }
}

export class AuthUserRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): AuthUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUserRequest): AuthUserRequest.AsObject;
  static serializeBinaryToWriter(message: AuthUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUserRequest;
  static deserializeBinaryFromReader(message: AuthUserRequest, reader: jspb.BinaryReader): AuthUserRequest;
}

export namespace AuthUserRequest {
  export type AsObject = {
    identity: string,
  }
}

export class AuthUserResponse extends jspb.Message {
  getUser(): user_auth_pb.AuthUser | undefined;
  setUser(value?: user_auth_pb.AuthUser): AuthUserResponse;
  hasUser(): boolean;
  clearUser(): AuthUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUserResponse): AuthUserResponse.AsObject;
  static serializeBinaryToWriter(message: AuthUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUserResponse;
  static deserializeBinaryFromReader(message: AuthUserResponse, reader: jspb.BinaryReader): AuthUserResponse;
}

export namespace AuthUserResponse {
  export type AsObject = {
    user?: user_auth_pb.AuthUser.AsObject,
  }
}

