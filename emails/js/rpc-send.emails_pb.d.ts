import * as jspb from 'google-protobuf'



export class EmailsSendMailRequest extends jspb.Message {
  getSender(): string;
  setSender(value: string): EmailsSendMailRequest;

  getReceiver(): string;
  setReceiver(value: string): EmailsSendMailRequest;

  getSubject(): string;
  setSubject(value: string): EmailsSendMailRequest;

  getBody(): string;
  setBody(value: string): EmailsSendMailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailsSendMailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailsSendMailRequest): EmailsSendMailRequest.AsObject;
  static serializeBinaryToWriter(message: EmailsSendMailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailsSendMailRequest;
  static deserializeBinaryFromReader(message: EmailsSendMailRequest, reader: jspb.BinaryReader): EmailsSendMailRequest;
}

export namespace EmailsSendMailRequest {
  export type AsObject = {
    sender: string,
    receiver: string,
    subject: string,
    body: string,
  }
}

export class EmailsSendMailResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): EmailsSendMailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailsSendMailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmailsSendMailResponse): EmailsSendMailResponse.AsObject;
  static serializeBinaryToWriter(message: EmailsSendMailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailsSendMailResponse;
  static deserializeBinaryFromReader(message: EmailsSendMailResponse, reader: jspb.BinaryReader): EmailsSendMailResponse;
}

export namespace EmailsSendMailResponse {
  export type AsObject = {
    message: string,
  }
}

