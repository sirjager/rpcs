# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from rpc_groups import whisper_nation_pb2 as rpc__groups_dot_whisper__nation__pb2
from rpc_health import whisper_nation_pb2 as rpc__health_dot_whisper__nation__pb2
from rpc_members import whisper_nation_pb2 as rpc__members_dot_whisper__nation__pb2
from rpc_welcome import whisper_nation_pb2 as rpc__welcome_dot_whisper__nation__pb2


class WhisperNationStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.WhisperNationWelcome = channel.unary_unary(
                '/whisper_nation.WhisperNation/WhisperNationWelcome',
                request_serializer=rpc__welcome_dot_whisper__nation__pb2.WhisperNationWelcomeRequest.SerializeToString,
                response_deserializer=rpc__welcome_dot_whisper__nation__pb2.WhisperNationWelcomeResponse.FromString,
                )
        self.WhisperNationHealth = channel.unary_unary(
                '/whisper_nation.WhisperNation/WhisperNationHealth',
                request_serializer=rpc__health_dot_whisper__nation__pb2.WhisperNationHealthRequest.SerializeToString,
                response_deserializer=rpc__health_dot_whisper__nation__pb2.WhisperNationHealthResponse.FromString,
                )
        self.WhisperNationListGroups = channel.unary_unary(
                '/whisper_nation.WhisperNation/WhisperNationListGroups',
                request_serializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationListGroupsRequest.SerializeToString,
                response_deserializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationListGroupsResponse.FromString,
                )
        self.WhisperNationCreateGroup = channel.unary_unary(
                '/whisper_nation.WhisperNation/WhisperNationCreateGroup',
                request_serializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationCreateGroupRequest.SerializeToString,
                response_deserializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationCreateGroupResponse.FromString,
                )
        self.WhisperNationJoinGroup = channel.unary_unary(
                '/whisper_nation.WhisperNation/WhisperNationJoinGroup',
                request_serializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationJoinGroupRequest.SerializeToString,
                response_deserializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationJoinGroupResponse.FromString,
                )
        self.WhisperNationListGroupMembers = channel.unary_unary(
                '/whisper_nation.WhisperNation/WhisperNationListGroupMembers',
                request_serializer=rpc__members_dot_whisper__nation__pb2.WhisperNationListGroupMembersRequest.SerializeToString,
                response_deserializer=rpc__members_dot_whisper__nation__pb2.WhisperNationListGroupMembersResponse.FromString,
                )


class WhisperNationServicer(object):
    """Missing associated documentation comment in .proto file."""

    def WhisperNationWelcome(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def WhisperNationHealth(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def WhisperNationListGroups(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def WhisperNationCreateGroup(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def WhisperNationJoinGroup(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def WhisperNationListGroupMembers(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_WhisperNationServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'WhisperNationWelcome': grpc.unary_unary_rpc_method_handler(
                    servicer.WhisperNationWelcome,
                    request_deserializer=rpc__welcome_dot_whisper__nation__pb2.WhisperNationWelcomeRequest.FromString,
                    response_serializer=rpc__welcome_dot_whisper__nation__pb2.WhisperNationWelcomeResponse.SerializeToString,
            ),
            'WhisperNationHealth': grpc.unary_unary_rpc_method_handler(
                    servicer.WhisperNationHealth,
                    request_deserializer=rpc__health_dot_whisper__nation__pb2.WhisperNationHealthRequest.FromString,
                    response_serializer=rpc__health_dot_whisper__nation__pb2.WhisperNationHealthResponse.SerializeToString,
            ),
            'WhisperNationListGroups': grpc.unary_unary_rpc_method_handler(
                    servicer.WhisperNationListGroups,
                    request_deserializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationListGroupsRequest.FromString,
                    response_serializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationListGroupsResponse.SerializeToString,
            ),
            'WhisperNationCreateGroup': grpc.unary_unary_rpc_method_handler(
                    servicer.WhisperNationCreateGroup,
                    request_deserializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationCreateGroupRequest.FromString,
                    response_serializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationCreateGroupResponse.SerializeToString,
            ),
            'WhisperNationJoinGroup': grpc.unary_unary_rpc_method_handler(
                    servicer.WhisperNationJoinGroup,
                    request_deserializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationJoinGroupRequest.FromString,
                    response_serializer=rpc__groups_dot_whisper__nation__pb2.WhisperNationJoinGroupResponse.SerializeToString,
            ),
            'WhisperNationListGroupMembers': grpc.unary_unary_rpc_method_handler(
                    servicer.WhisperNationListGroupMembers,
                    request_deserializer=rpc__members_dot_whisper__nation__pb2.WhisperNationListGroupMembersRequest.FromString,
                    response_serializer=rpc__members_dot_whisper__nation__pb2.WhisperNationListGroupMembersResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'whisper_nation.WhisperNation', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class WhisperNation(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def WhisperNationWelcome(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/whisper_nation.WhisperNation/WhisperNationWelcome',
            rpc__welcome_dot_whisper__nation__pb2.WhisperNationWelcomeRequest.SerializeToString,
            rpc__welcome_dot_whisper__nation__pb2.WhisperNationWelcomeResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def WhisperNationHealth(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/whisper_nation.WhisperNation/WhisperNationHealth',
            rpc__health_dot_whisper__nation__pb2.WhisperNationHealthRequest.SerializeToString,
            rpc__health_dot_whisper__nation__pb2.WhisperNationHealthResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def WhisperNationListGroups(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/whisper_nation.WhisperNation/WhisperNationListGroups',
            rpc__groups_dot_whisper__nation__pb2.WhisperNationListGroupsRequest.SerializeToString,
            rpc__groups_dot_whisper__nation__pb2.WhisperNationListGroupsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def WhisperNationCreateGroup(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/whisper_nation.WhisperNation/WhisperNationCreateGroup',
            rpc__groups_dot_whisper__nation__pb2.WhisperNationCreateGroupRequest.SerializeToString,
            rpc__groups_dot_whisper__nation__pb2.WhisperNationCreateGroupResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def WhisperNationJoinGroup(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/whisper_nation.WhisperNation/WhisperNationJoinGroup',
            rpc__groups_dot_whisper__nation__pb2.WhisperNationJoinGroupRequest.SerializeToString,
            rpc__groups_dot_whisper__nation__pb2.WhisperNationJoinGroupResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def WhisperNationListGroupMembers(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/whisper_nation.WhisperNation/WhisperNationListGroupMembers',
            rpc__members_dot_whisper__nation__pb2.WhisperNationListGroupMembersRequest.SerializeToString,
            rpc__members_dot_whisper__nation__pb2.WhisperNationListGroupMembersResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)