# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-signin.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
import user_pb2 as user__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x10rpc-signin.proto\x12\x08trueauth\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\nuser.proto\"3\n\rSigninRequest\x12\x10\n\x08username\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\t\"\xea\x01\n\x0eSigninResponse\x12\x1c\n\x04user\x18\x01 \x01(\x0b\x32\x0e.trueauth.User\x12\x12\n\nsession_id\x18\x02 \x01(\t\x12\x14\n\x0c\x61\x63\x63\x65ss_token\x18\x03 \x01(\t\x12\x15\n\rrefresh_token\x18\x04 \x01(\t\x12;\n\x17\x61\x63\x63\x65ss_token_expires_at\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12<\n\x18refresh_token_expires_at\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.TimestampB#Z!github.com/sirjager/rpcs/trueauthb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rpc_signin_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z!github.com/sirjager/rpcs/trueauth'
  _SIGNINREQUEST._serialized_start=75
  _SIGNINREQUEST._serialized_end=126
  _SIGNINRESPONSE._serialized_start=129
  _SIGNINRESPONSE._serialized_end=363
# @@protoc_insertion_point(module_scope)
