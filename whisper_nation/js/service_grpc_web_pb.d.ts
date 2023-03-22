import * as grpcWeb from 'grpc-web';

import * as rpc$groups_pb from './rpc-groups_pb';
import * as rpc$health_pb from './rpc-health_pb';
import * as rpc$welcome_pb from './rpc-welcome_pb';


export class WhisperNationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  whisperNationWelcome(
    request: rpc$welcome_pb.WhisperNationWelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$welcome_pb.WhisperNationWelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$welcome_pb.WhisperNationWelcomeResponse>;

  whisperNationHealth(
    request: rpc$health_pb.WhisperNationHealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_pb.WhisperNationHealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_pb.WhisperNationHealthResponse>;

  whisperNationCreateGroup(
    request: rpc$groups_pb.WhisperNationCreateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_pb.WhisperNationCreateGroupResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_pb.WhisperNationCreateGroupResponse>;

  whisperNationListGroups(
    request: rpc$groups_pb.WhisperNationListGroupsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_pb.WhisperNationListGroupsResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_pb.WhisperNationListGroupsResponse>;

  whisperNationListGroupMembers(
    request: rpc$groups_pb.WhisperNationListGroupMembersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_pb.WhisperNationListGroupMembersResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_pb.WhisperNationListGroupMembersResponse>;

}

export class WhisperNationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  whisperNationWelcome(
    request: rpc$welcome_pb.WhisperNationWelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$welcome_pb.WhisperNationWelcomeResponse>;

  whisperNationHealth(
    request: rpc$health_pb.WhisperNationHealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_pb.WhisperNationHealthResponse>;

  whisperNationCreateGroup(
    request: rpc$groups_pb.WhisperNationCreateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_pb.WhisperNationCreateGroupResponse>;

  whisperNationListGroups(
    request: rpc$groups_pb.WhisperNationListGroupsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_pb.WhisperNationListGroupsResponse>;

  whisperNationListGroupMembers(
    request: rpc$groups_pb.WhisperNationListGroupMembersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_pb.WhisperNationListGroupMembersResponse>;

}

