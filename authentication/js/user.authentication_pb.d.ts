import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class AuthenticationUser extends jspb.Message {
  getId(): string;
  setId(value: string): AuthenticationUser;

  getEmail(): string;
  setEmail(value: string): AuthenticationUser;

  getUsername(): string;
  setUsername(value: string): AuthenticationUser;

  getPassword(): string;
  setPassword(value: string): AuthenticationUser;

  getFirstname(): string;
  setFirstname(value: string): AuthenticationUser;

  getLastname(): string;
  setLastname(value: string): AuthenticationUser;

  getVerified(): boolean;
  setVerified(value: boolean): AuthenticationUser;

  getBlocked(): boolean;
  setBlocked(value: boolean): AuthenticationUser;

  getVerifyToken(): string;
  setVerifyToken(value: string): AuthenticationUser;

  getLastVerifySentAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastVerifySentAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationUser;
  hasLastVerifySentAt(): boolean;
  clearLastVerifySentAt(): AuthenticationUser;

  getVerifyExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVerifyExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationUser;
  hasVerifyExpiresAt(): boolean;
  clearVerifyExpiresAt(): AuthenticationUser;

  getResetToken(): string;
  setResetToken(value: string): AuthenticationUser;

  getLastResetSentAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastResetSentAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationUser;
  hasLastResetSentAt(): boolean;
  clearLastResetSentAt(): AuthenticationUser;

  getResetExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResetExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationUser;
  hasResetExpiresAt(): boolean;
  clearResetExpiresAt(): AuthenticationUser;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationUser;
  hasCreatedAt(): boolean;
  clearCreatedAt(): AuthenticationUser;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationUser;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): AuthenticationUser;

  getCreatedBy(): string;
  setCreatedBy(value: string): AuthenticationUser;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): AuthenticationUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationUser.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationUser): AuthenticationUser.AsObject;
  static serializeBinaryToWriter(message: AuthenticationUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationUser;
  static deserializeBinaryFromReader(message: AuthenticationUser, reader: jspb.BinaryReader): AuthenticationUser;
}

export namespace AuthenticationUser {
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

