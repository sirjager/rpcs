import * as grpcWeb from 'grpc-web';

import * as rpc$health_emails_pb from './rpc-health.emails_pb';
import * as rpc$send_emails_pb from './rpc-send.emails_pb';


export class EmailsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  emailsHealth(
    request: rpc$health_emails_pb.EmailsHealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_emails_pb.EmailsHealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_emails_pb.EmailsHealthResponse>;

  emailsSendMail(
    request: rpc$send_emails_pb.EmailsSendMailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$send_emails_pb.EmailsSendMailResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$send_emails_pb.EmailsSendMailResponse>;

}

export class EmailsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  emailsHealth(
    request: rpc$health_emails_pb.EmailsHealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_emails_pb.EmailsHealthResponse>;

  emailsSendMail(
    request: rpc$send_emails_pb.EmailsSendMailRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$send_emails_pb.EmailsSendMailResponse>;

}

