import * as jspb from 'google-protobuf'



export class Book extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Book;

  getSeries(): string;
  setSeries(value: string): Book;

  getAuthorsList(): Array<string>;
  setAuthorsList(value: Array<string>): Book;
  clearAuthorsList(): Book;
  addAuthors(value: string, index?: number): Book;

  getYear(): number;
  setYear(value: number): Book;

  getEdition(): string;
  setEdition(value: string): Book;

  getPublisher(): string;
  setPublisher(value: string): Book;

  getPages(): number;
  setPages(value: number): Book;

  getLanguage(): string;
  setLanguage(value: string): Book;

  getCoverurl(): string;
  setCoverurl(value: string): Book;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Book;
  clearTagsList(): Book;
  addTags(value: string, index?: number): Book;

  getDescription(): string;
  setDescription(value: string): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    title: string,
    series: string,
    authorsList: Array<string>,
    year: number,
    edition: string,
    publisher: string,
    pages: number,
    language: string,
    coverurl: string,
    tagsList: Array<string>,
    description: string,
  }
}

