import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): Account;

  getEmail(): string;
  setEmail(value: string): Account;

  getUsername(): string;
  setUsername(value: string): Account;

  getPassword(): string;
  setPassword(value: string): Account;

  getFirstname(): string;
  setFirstname(value: string): Account;

  getLastname(): string;
  setLastname(value: string): Account;

  getVerified(): boolean;
  setVerified(value: boolean): Account;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Account;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Account;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Account;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    email: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    verified: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

