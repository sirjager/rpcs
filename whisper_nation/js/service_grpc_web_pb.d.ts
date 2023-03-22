import * as grpcWeb from 'grpc-web';

import * as groups_pb from './groups_pb';
import * as health_pb from './health_pb';
import * as welcome_pb from './welcome_pb';


export class WhisperNationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  welcome(
    request: welcome_pb.WelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: welcome_pb.WelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<welcome_pb.WelcomeResponse>;

  health(
    request: health_pb.HealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: health_pb.HealthResponse) => void
  ): grpcWeb.ClientReadableStream<health_pb.HealthResponse>;

  createGroup(
    request: groups_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: groups_pb.CreateGroupResponse) => void
  ): grpcWeb.ClientReadableStream<groups_pb.CreateGroupResponse>;

  listGroups(
    request: groups_pb.ListGroupsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: groups_pb.ListGroupsResponse) => void
  ): grpcWeb.ClientReadableStream<groups_pb.ListGroupsResponse>;

  listGroupMembers(
    request: groups_pb.ListGroupMembersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: groups_pb.ListGroupMembersResponse) => void
  ): grpcWeb.ClientReadableStream<groups_pb.ListGroupMembersResponse>;

}

export class WhisperNationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  welcome(
    request: welcome_pb.WelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<welcome_pb.WelcomeResponse>;

  health(
    request: health_pb.HealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<health_pb.HealthResponse>;

  createGroup(
    request: groups_pb.CreateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<groups_pb.CreateGroupResponse>;

  listGroups(
    request: groups_pb.ListGroupsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<groups_pb.ListGroupsResponse>;

  listGroupMembers(
    request: groups_pb.ListGroupMembersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<groups_pb.ListGroupMembersResponse>;

}

