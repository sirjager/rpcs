import * as jspb from 'google-protobuf'

import * as book_pb from './book_pb';


export class SearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchRequest;

  getPerpage(): number;
  setPerpage(value: number): SearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    query: string,
    perpage: number,
  }
}

export class SearchResponse extends jspb.Message {
  getBooksList(): Array<book_pb.Book>;
  setBooksList(value: Array<book_pb.Book>): SearchResponse;
  clearBooksList(): SearchResponse;
  addBooks(value?: book_pb.Book, index?: number): book_pb.Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    booksList: Array<book_pb.Book.AsObject>,
  }
}

