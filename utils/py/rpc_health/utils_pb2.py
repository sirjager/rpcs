# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-health.utils.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x16rpc-health.utils.proto\x12\x05utils\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\"\x14\n\x12UtilsHealthRequest\"\xac\x01\n\x13UtilsHealthResponse\x12\x0e\n\x06status\x18\x01 \x01(\t\x12)\n\x06uptime\x18\x04 \x01(\x0b\x32\x19.google.protobuf.Duration\x12+\n\x07started\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12-\n\ttimestamp\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.TimestampB Z\x1egithub.com/sirjager/rpcs/utilsb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rpc_health.utils_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z\036github.com/sirjager/rpcs/utils'
  _UTILSHEALTHREQUEST._serialized_start=98
  _UTILSHEALTHREQUEST._serialized_end=118
  _UTILSHEALTHRESPONSE._serialized_start=121
  _UTILSHEALTHRESPONSE._serialized_end=293
# @@protoc_insertion_point(module_scope)
