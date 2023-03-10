import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class AuthUser extends jspb.Message {
  getId(): string;
  setId(value: string): AuthUser;

  getEmail(): string;
  setEmail(value: string): AuthUser;

  getUsername(): string;
  setUsername(value: string): AuthUser;

  getPassword(): string;
  setPassword(value: string): AuthUser;

  getFirstname(): string;
  setFirstname(value: string): AuthUser;

  getLastname(): string;
  setLastname(value: string): AuthUser;

  getVerified(): boolean;
  setVerified(value: boolean): AuthUser;

  getBlocked(): boolean;
  setBlocked(value: boolean): AuthUser;

  getVerifyToken(): string;
  setVerifyToken(value: string): AuthUser;

  getLastVerifySentAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastVerifySentAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthUser;
  hasLastVerifySentAt(): boolean;
  clearLastVerifySentAt(): AuthUser;

  getVerifyExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVerifyExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthUser;
  hasVerifyExpiresAt(): boolean;
  clearVerifyExpiresAt(): AuthUser;

  getResetToken(): string;
  setResetToken(value: string): AuthUser;

  getLastResetSentAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastResetSentAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthUser;
  hasLastResetSentAt(): boolean;
  clearLastResetSentAt(): AuthUser;

  getResetExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResetExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthUser;
  hasResetExpiresAt(): boolean;
  clearResetExpiresAt(): AuthUser;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthUser;
  hasCreatedAt(): boolean;
  clearCreatedAt(): AuthUser;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthUser;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): AuthUser;

  getCreatedBy(): string;
  setCreatedBy(value: string): AuthUser;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): AuthUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUser.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUser): AuthUser.AsObject;
  static serializeBinaryToWriter(message: AuthUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUser;
  static deserializeBinaryFromReader(message: AuthUser, reader: jspb.BinaryReader): AuthUser;
}

export namespace AuthUser {
  export type AsObject = {
    id: string,
    email: string,
    username: string,
    password: string,
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

