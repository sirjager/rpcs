import * as jspb from 'google-protobuf'

import * as user_authentication_pb from './user.authentication_pb';


export class AuthenticationUsersRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): AuthenticationUsersRequest;

  getPage(): number;
  setPage(value: number): AuthenticationUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationUsersRequest): AuthenticationUsersRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationUsersRequest;
  static deserializeBinaryFromReader(message: AuthenticationUsersRequest, reader: jspb.BinaryReader): AuthenticationUsersRequest;
}

export namespace AuthenticationUsersRequest {
  export type AsObject = {
    limit: number,
    page: number,
  }
}

export class AuthenticationUsersResponse extends jspb.Message {
  getUsersList(): Array<user_authentication_pb.AuthenticationUser>;
  setUsersList(value: Array<user_authentication_pb.AuthenticationUser>): AuthenticationUsersResponse;
  clearUsersList(): AuthenticationUsersResponse;
  addUsers(value?: user_authentication_pb.AuthenticationUser, index?: number): user_authentication_pb.AuthenticationUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationUsersResponse): AuthenticationUsersResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationUsersResponse;
  static deserializeBinaryFromReader(message: AuthenticationUsersResponse, reader: jspb.BinaryReader): AuthenticationUsersResponse;
}

export namespace AuthenticationUsersResponse {
  export type AsObject = {
    usersList: Array<user_authentication_pb.AuthenticationUser.AsObject>,
  }
}

export class AuthenticationUserRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): AuthenticationUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationUserRequest): AuthenticationUserRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationUserRequest;
  static deserializeBinaryFromReader(message: AuthenticationUserRequest, reader: jspb.BinaryReader): AuthenticationUserRequest;
}

export namespace AuthenticationUserRequest {
  export type AsObject = {
    identity: string,
  }
}

export class AuthenticationUserResponse extends jspb.Message {
  getUser(): user_authentication_pb.AuthenticationUser | undefined;
  setUser(value?: user_authentication_pb.AuthenticationUser): AuthenticationUserResponse;
  hasUser(): boolean;
  clearUser(): AuthenticationUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationUserResponse): AuthenticationUserResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationUserResponse;
  static deserializeBinaryFromReader(message: AuthenticationUserResponse, reader: jspb.BinaryReader): AuthenticationUserResponse;
}

export namespace AuthenticationUserResponse {
  export type AsObject = {
    user?: user_authentication_pb.AuthenticationUser.AsObject,
  }
}

