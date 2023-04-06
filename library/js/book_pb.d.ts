import * as jspb from 'google-protobuf'



export class Book extends jspb.Message {
  getId(): string;
  setId(value: string): Book;

  getTitle(): string;
  setTitle(value: string): Book;

  getVolumeInfo(): string;
  setVolumeInfo(value: string): Book;

  getSeries(): string;
  setSeries(value: string): Book;

  getPeriodical(): string;
  setPeriodical(value: string): Book;

  getAuthor(): string;
  setAuthor(value: string): Book;

  getYear(): string;
  setYear(value: string): Book;

  getEdition(): string;
  setEdition(value: string): Book;

  getPublisher(): string;
  setPublisher(value: string): Book;

  getCity(): string;
  setCity(value: string): Book;

  getPages(): string;
  setPages(value: string): Book;

  getLanguage(): string;
  setLanguage(value: string): Book;

  getTopic(): string;
  setTopic(value: string): Book;

  getLibrary(): string;
  setLibrary(value: string): Book;

  getIssue(): string;
  setIssue(value: string): Book;

  getIdentifier(): string;
  setIdentifier(value: string): Book;

  getIssn(): string;
  setIssn(value: string): Book;

  getAsin(): string;
  setAsin(value: string): Book;

  getUdc(): string;
  setUdc(value: string): Book;

  getLbc(): string;
  setLbc(value: string): Book;

  getDdc(): string;
  setDdc(value: string): Book;

  getLcc(): string;
  setLcc(value: string): Book;

  getDoi(): string;
  setDoi(value: string): Book;

  getGoogleBookId(): string;
  setGoogleBookId(value: string): Book;

  getOpenlibraryId(): string;
  setOpenlibraryId(value: string): Book;

  getCommentary(): string;
  setCommentary(value: string): Book;

  getDpi(): string;
  setDpi(value: string): Book;

  getColor(): string;
  setColor(value: string): Book;

  getCleaned(): string;
  setCleaned(value: string): Book;

  getOrientation(): string;
  setOrientation(value: string): Book;

  getPaginated(): string;
  setPaginated(value: string): Book;

  getScanned(): string;
  setScanned(value: string): Book;

  getBookmarked(): string;
  setBookmarked(value: string): Book;

  getSearchable(): string;
  setSearchable(value: string): Book;

  getFilesize(): string;
  setFilesize(value: string): Book;

  getExtension(): string;
  setExtension(value: string): Book;

  getMd5(): string;
  setMd5(value: string): Book;

  getGeneric(): string;
  setGeneric(value: string): Book;

  getVisible(): string;
  setVisible(value: string): Book;

  getLocator(): string;
  setLocator(value: string): Book;

  getLocal(): string;
  setLocal(value: string): Book;

  getTimeAdded(): string;
  setTimeAdded(value: string): Book;

  getTimeLastModified(): string;
  setTimeLastModified(value: string): Book;

  getCoverUrl(): string;
  setCoverUrl(value: string): Book;

  getIdentifierWodash(): string;
  setIdentifierWodash(value: string): Book;

  getTags(): string;
  setTags(value: string): Book;

  getPagesInFile(): string;
  setPagesInFile(value: string): Book;

  getDescription(): string;
  setDescription(value: string): Book;

  getTableOfContents(): string;
  setTableOfContents(value: string): Book;

  getSha1(): string;
  setSha1(value: string): Book;

  getSha256(): string;
  setSha256(value: string): Book;

  getCrc32(): string;
  setCrc32(value: string): Book;

  getEd2k(): string;
  setEd2k(value: string): Book;

  getAich(): string;
  setAich(value: string): Book;

  getTth(): string;
  setTth(value: string): Book;

  getIpfscid(): string;
  setIpfscid(value: string): Book;

  getBtih(): string;
  setBtih(value: string): Book;

  getTorrent(): string;
  setTorrent(value: string): Book;

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
    volumeInfo: string,
    series: string,
    periodical: string,
    author: string,
    year: string,
    edition: string,
    publisher: string,
    city: string,
    pages: string,
    language: string,
    topic: string,
    library: string,
    issue: string,
    identifier: string,
    issn: string,
    asin: string,
    udc: string,
    lbc: string,
    ddc: string,
    lcc: string,
    doi: string,
    googleBookId: string,
    openlibraryId: string,
    commentary: string,
    dpi: string,
    color: string,
    cleaned: string,
    orientation: string,
    paginated: string,
    scanned: string,
    bookmarked: string,
    searchable: string,
    filesize: string,
    extension: string,
    md5: string,
    generic: string,
    visible: string,
    locator: string,
    local: string,
    timeAdded: string,
    timeLastModified: string,
    coverUrl: string,
    identifierWodash: string,
    tags: string,
    pagesInFile: string,
    description: string,
    tableOfContents: string,
    sha1: string,
    sha256: string,
    crc32: string,
    ed2k: string,
    aich: string,
    tth: string,
    ipfscid: string,
    btih: string,
    torrent: string,
  }
}

