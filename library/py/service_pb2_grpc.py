# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import rpc_health_pb2 as rpc__health__pb2
import rpc_search_pb2 as rpc__search__pb2
import rpc_welcome_pb2 as rpc__welcome__pb2


class LibraryStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Welcome = channel.unary_unary(
                '/library.Library/Welcome',
                request_serializer=rpc__welcome__pb2.WelcomeRequest.SerializeToString,
                response_deserializer=rpc__welcome__pb2.WelcomeResponse.FromString,
                )
        self.Health = channel.unary_unary(
                '/library.Library/Health',
                request_serializer=rpc__health__pb2.HealthRequest.SerializeToString,
                response_deserializer=rpc__health__pb2.HealthResponse.FromString,
                )
        self.Search = channel.unary_unary(
                '/library.Library/Search',
                request_serializer=rpc__search__pb2.SearchRequest.SerializeToString,
                response_deserializer=rpc__search__pb2.SearchResponse.FromString,
                )


class LibraryServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Welcome(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Health(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Search(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_LibraryServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Welcome': grpc.unary_unary_rpc_method_handler(
                    servicer.Welcome,
                    request_deserializer=rpc__welcome__pb2.WelcomeRequest.FromString,
                    response_serializer=rpc__welcome__pb2.WelcomeResponse.SerializeToString,
            ),
            'Health': grpc.unary_unary_rpc_method_handler(
                    servicer.Health,
                    request_deserializer=rpc__health__pb2.HealthRequest.FromString,
                    response_serializer=rpc__health__pb2.HealthResponse.SerializeToString,
            ),
            'Search': grpc.unary_unary_rpc_method_handler(
                    servicer.Search,
                    request_deserializer=rpc__search__pb2.SearchRequest.FromString,
                    response_serializer=rpc__search__pb2.SearchResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'library.Library', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Library(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Welcome(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/library.Library/Welcome',
            rpc__welcome__pb2.WelcomeRequest.SerializeToString,
            rpc__welcome__pb2.WelcomeResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Health(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/library.Library/Health',
            rpc__health__pb2.HealthRequest.SerializeToString,
            rpc__health__pb2.HealthResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Search(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/library.Library/Search',
            rpc__search__pb2.SearchRequest.SerializeToString,
            rpc__search__pb2.SearchResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
