# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from rpc_health import utils_pb2 as rpc__health_dot_utils__pb2
from rpc_useragent import utils_pb2 as rpc__useragent_dot_utils__pb2
from rpc_welcome import utils_pb2 as rpc__welcome_dot_utils__pb2


class UtilsStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.UtilsWelcome = channel.unary_unary(
                '/utils.Utils/UtilsWelcome',
                request_serializer=rpc__welcome_dot_utils__pb2.UtilsWelcomeRequest.SerializeToString,
                response_deserializer=rpc__welcome_dot_utils__pb2.UtilsWelcomeResponse.FromString,
                )
        self.UtilsHealth = channel.unary_unary(
                '/utils.Utils/UtilsHealth',
                request_serializer=rpc__health_dot_utils__pb2.UtilsHealthRequest.SerializeToString,
                response_deserializer=rpc__health_dot_utils__pb2.UtilsHealthResponse.FromString,
                )
        self.UtilsUserAgents = channel.unary_unary(
                '/utils.Utils/UtilsUserAgents',
                request_serializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsRequest.SerializeToString,
                response_deserializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsResponse.FromString,
                )
        self.UtilsUserAgentsPool = channel.unary_unary(
                '/utils.Utils/UtilsUserAgentsPool',
                request_serializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolRequest.SerializeToString,
                response_deserializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolResponse.FromString,
                )
        self.UtilsUserAgentsPoolNames = channel.unary_unary(
                '/utils.Utils/UtilsUserAgentsPoolNames',
                request_serializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolNamesRequest.SerializeToString,
                response_deserializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolNamesResponse.FromString,
                )


class UtilsServicer(object):
    """Missing associated documentation comment in .proto file."""

    def UtilsWelcome(self, request, context):
        """------------------------------------------------------ System
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UtilsHealth(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UtilsUserAgents(self, request, context):
        """UserAgents
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UtilsUserAgentsPool(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UtilsUserAgentsPoolNames(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_UtilsServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'UtilsWelcome': grpc.unary_unary_rpc_method_handler(
                    servicer.UtilsWelcome,
                    request_deserializer=rpc__welcome_dot_utils__pb2.UtilsWelcomeRequest.FromString,
                    response_serializer=rpc__welcome_dot_utils__pb2.UtilsWelcomeResponse.SerializeToString,
            ),
            'UtilsHealth': grpc.unary_unary_rpc_method_handler(
                    servicer.UtilsHealth,
                    request_deserializer=rpc__health_dot_utils__pb2.UtilsHealthRequest.FromString,
                    response_serializer=rpc__health_dot_utils__pb2.UtilsHealthResponse.SerializeToString,
            ),
            'UtilsUserAgents': grpc.unary_unary_rpc_method_handler(
                    servicer.UtilsUserAgents,
                    request_deserializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsRequest.FromString,
                    response_serializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsResponse.SerializeToString,
            ),
            'UtilsUserAgentsPool': grpc.unary_unary_rpc_method_handler(
                    servicer.UtilsUserAgentsPool,
                    request_deserializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolRequest.FromString,
                    response_serializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolResponse.SerializeToString,
            ),
            'UtilsUserAgentsPoolNames': grpc.unary_unary_rpc_method_handler(
                    servicer.UtilsUserAgentsPoolNames,
                    request_deserializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolNamesRequest.FromString,
                    response_serializer=rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolNamesResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'utils.Utils', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Utils(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def UtilsWelcome(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/utils.Utils/UtilsWelcome',
            rpc__welcome_dot_utils__pb2.UtilsWelcomeRequest.SerializeToString,
            rpc__welcome_dot_utils__pb2.UtilsWelcomeResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UtilsHealth(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/utils.Utils/UtilsHealth',
            rpc__health_dot_utils__pb2.UtilsHealthRequest.SerializeToString,
            rpc__health_dot_utils__pb2.UtilsHealthResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UtilsUserAgents(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/utils.Utils/UtilsUserAgents',
            rpc__useragent_dot_utils__pb2.UtilsUserAgentsRequest.SerializeToString,
            rpc__useragent_dot_utils__pb2.UtilsUserAgentsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UtilsUserAgentsPool(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/utils.Utils/UtilsUserAgentsPool',
            rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolRequest.SerializeToString,
            rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UtilsUserAgentsPoolNames(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/utils.Utils/UtilsUserAgentsPoolNames',
            rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolNamesRequest.SerializeToString,
            rpc__useragent_dot_utils__pb2.UtilsUserAgentsPoolNamesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
