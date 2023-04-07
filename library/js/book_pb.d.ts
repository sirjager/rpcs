import * as jspb from 'google-protobuf'



export class Book extends jspb.Message {
  getId(): string;
  setId(value: string): Book;

  getTitle(): string;
  setTitle(value: string): Book;

  getSeries(): string;
  setSeries(value: string): Book;

  getAuthorsList(): Array<string>;
  setAuthorsList(value: Array<string>): Book;
  clearAuthorsList(): Book;
  addAuthors(value: string, index?: number): Book;

  getYearsList(): Array<number>;
  setYearsList(value: Array<number>): Book;
  clearYearsList(): Book;
  addYears(value: number, index?: number): Book;

  getEdition(): string;
  setEdition(value: string): Book;

  getPublisher(): string;
  setPublisher(value: string): Book;

  getPages(): number;
  setPages(value: number): Book;

  getLanguage(): string;
  setLanguage(value: string): Book;

  getGooglebookId(): string;
  setGooglebookId(value: string): Book;

  getOpenlibraryId(): string;
  setOpenlibraryId(value: string): Book;

  getFilesize(): number;
  setFilesize(value: number): Book;

  getExtension(): string;
  setExtension(value: string): Book;

  getMd5(): string;
  setMd5(value: string): Book;

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
    id: string,
    title: string,
    series: string,
    authorsList: Array<string>,
    yearsList: Array<number>,
    edition: string,
    publisher: string,
    pages: number,
    language: string,
    googlebookId: string,
    openlibraryId: string,
    filesize: number,
    extension: string,
    md5: string,
    coverurl: string,
    tagsList: Array<string>,
    description: string,
  }
}

