import * as grpcWeb from 'grpc-web';

import * as rpc$groups_whisper_nation_pb from './rpc-groups.whisper_nation_pb';
import * as rpc$health_whisper_nation_pb from './rpc-health.whisper_nation_pb';
import * as rpc$members_whisper_nation_pb from './rpc-members.whisper_nation_pb';
import * as rpc$welcome_whisper_nation_pb from './rpc-welcome.whisper_nation_pb';


export class WhisperNationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  whisperNationWelcome(
    request: rpc$welcome_whisper_nation_pb.WhisperNationWelcomeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$welcome_whisper_nation_pb.WhisperNationWelcomeResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$welcome_whisper_nation_pb.WhisperNationWelcomeResponse>;

  whisperNationHealth(
    request: rpc$health_whisper_nation_pb.WhisperNationHealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$health_whisper_nation_pb.WhisperNationHealthResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$health_whisper_nation_pb.WhisperNationHealthResponse>;

  whisperNationListGroups(
    request: rpc$groups_whisper_nation_pb.WhisperNationListGroupsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_whisper_nation_pb.WhisperNationListGroupsResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_whisper_nation_pb.WhisperNationListGroupsResponse>;

  whisperNationCreateGroup(
    request: rpc$groups_whisper_nation_pb.WhisperNationCreateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_whisper_nation_pb.WhisperNationCreateGroupResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_whisper_nation_pb.WhisperNationCreateGroupResponse>;

  whisperNationJoinGroup(
    request: rpc$groups_whisper_nation_pb.WhisperNationJoinGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$groups_whisper_nation_pb.WhisperNationJoinGroupResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$groups_whisper_nation_pb.WhisperNationJoinGroupResponse>;

  whisperNationListGroupMembers(
    request: rpc$members_whisper_nation_pb.WhisperNationListGroupMembersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: rpc$members_whisper_nation_pb.WhisperNationListGroupMembersResponse) => void
  ): grpcWeb.ClientReadableStream<rpc$members_whisper_nation_pb.WhisperNationListGroupMembersResponse>;

}

export class WhisperNationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  whisperNationWelcome(
    request: rpc$welcome_whisper_nation_pb.WhisperNationWelcomeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$welcome_whisper_nation_pb.WhisperNationWelcomeResponse>;

  whisperNationHealth(
    request: rpc$health_whisper_nation_pb.WhisperNationHealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$health_whisper_nation_pb.WhisperNationHealthResponse>;

  whisperNationListGroups(
    request: rpc$groups_whisper_nation_pb.WhisperNationListGroupsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_whisper_nation_pb.WhisperNationListGroupsResponse>;

  whisperNationCreateGroup(
    request: rpc$groups_whisper_nation_pb.WhisperNationCreateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_whisper_nation_pb.WhisperNationCreateGroupResponse>;

  whisperNationJoinGroup(
    request: rpc$groups_whisper_nation_pb.WhisperNationJoinGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$groups_whisper_nation_pb.WhisperNationJoinGroupResponse>;

  whisperNationListGroupMembers(
    request: rpc$members_whisper_nation_pb.WhisperNationListGroupMembersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<rpc$members_whisper_nation_pb.WhisperNationListGroupMembersResponse>;

}

