# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-health.authentication.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1frpc-health.authentication.proto\x12\x0e\x61uthentication\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\"\x1d\n\x1b\x41uthenticationHealthRequest\"\xc5\x01\n\x1c\x41uthenticationHealthResponse\x12\x0e\n\x06status\x18\x01 \x01(\t\x12\x0e\n\x06unsafe\x18\x02 \x01(\x08\x12)\n\x06uptime\x18\x03 \x01(\x0b\x32\x19.google.protobuf.Duration\x12+\n\x07started\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12-\n\ttimestamp\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampB)Z\'github.com/sirjager/rpcs/authenticationb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rpc_health.authentication_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z\'github.com/sirjager/rpcs/authentication'
  _AUTHENTICATIONHEALTHREQUEST._serialized_start=116
  _AUTHENTICATIONHEALTHREQUEST._serialized_end=145
  _AUTHENTICATIONHEALTHRESPONSE._serialized_start=148
  _AUTHENTICATIONHEALTHRESPONSE._serialized_end=345
# @@protoc_insertion_point(module_scope)
