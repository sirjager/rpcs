import * as grpcWeb from 'grpc-web';

import * as rpc$groups_pb from './rpc-groups_pb';
import * as rpc$health_pb from './rpc-health_pb';
import * as rpc$welcome_pb from './rpc-welcome_pb';


export class WhisperNationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  welcome(
    request: rpc$welcome_pb.WelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$welcome_pb.WelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$welcome_pb.WelcomeResponse>;

  health(
    request: rpc$health_pb.HealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_pb.HealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_pb.HealthResponse>;

  createGroup(
    request: rpc$groups_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_pb.CreateGroupResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_pb.CreateGroupResponse>;

  listGroups(
    request: rpc$groups_pb.ListGroupsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_pb.ListGroupsResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_pb.ListGroupsResponse>;

  listGroupMembers(
    request: rpc$groups_pb.ListGroupMembersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_pb.ListGroupMembersResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_pb.ListGroupMembersResponse>;

}

export class WhisperNationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  welcome(
    request: rpc$welcome_pb.WelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$welcome_pb.WelcomeResponse>;

  health(
    request: rpc$health_pb.HealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_pb.HealthResponse>;

  createGroup(
    request: rpc$groups_pb.CreateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_pb.CreateGroupResponse>;

  listGroups(
    request: rpc$groups_pb.ListGroupsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_pb.ListGroupsResponse>;

  listGroupMembers(
    request: rpc$groups_pb.ListGroupMembersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_pb.ListGroupMembersResponse>;

}

