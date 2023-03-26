import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getUsername(): string;
  setUsername(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getSalt(): string;
  setSalt(value: string): User;

  getFirstname(): string;
  setFirstname(value: string): User;

  getLastname(): string;
  setLastname(value: string): User;

  getVerified(): boolean;
  setVerified(value: boolean): User;

  getBlocked(): boolean;
  setBlocked(value: boolean): User;

  getVerifyToken(): string;
  setVerifyToken(value: string): User;

  getLastVerifySentAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastVerifySentAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasLastVerifySentAt(): boolean;
  clearLastVerifySentAt(): User;

  getVerifyExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVerifyExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasVerifyExpiresAt(): boolean;
  clearVerifyExpiresAt(): User;

  getResetToken(): string;
  setResetToken(value: string): User;

  getLastResetSentAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastResetSentAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasLastResetSentAt(): boolean;
  clearLastResetSentAt(): User;

  getResetExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResetExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasResetExpiresAt(): boolean;
  clearResetExpiresAt(): User;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreatedAt(): boolean;
  clearCreatedAt(): User;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): User;

  getCreatedBy(): string;
  setCreatedBy(value: string): User;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    email: string,
    username: string,
    password: string,
    salt: string,
    firstname: string,
    lastname: string,
    verified: boolean,
    blocked: boolean,
    verifyToken: string,
    lastVerifySentAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    verifyExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resetToken: string,
    lastResetSentAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resetExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    updatedBy: string,
  }
}

