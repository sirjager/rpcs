# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-signup.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import user_pb2 as user__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x10rpc-signup.proto\x12\x08trueauth\x1a\nuser.proto\"g\n\rSignupRequest\x12\r\n\x05\x65mail\x18\x01 \x01(\t\x12\x10\n\x08username\x18\x02 \x01(\t\x12\x10\n\x08password\x18\x03 \x01(\t\x12\x11\n\tfirstname\x18\x04 \x01(\t\x12\x10\n\x08lastname\x18\x05 \x01(\t\".\n\x0eSignupResponse\x12\x1c\n\x04user\x18\x01 \x01(\x0b\x32\x0e.trueauth.UserB#Z!github.com/sirjager/rpcs/trueauthb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rpc_signup_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z!github.com/sirjager/rpcs/trueauth'
  _SIGNUPREQUEST._serialized_start=42
  _SIGNUPREQUEST._serialized_end=145
  _SIGNUPRESPONSE._serialized_start=147
  _SIGNUPRESPONSE._serialized_end=193
# @@protoc_insertion_point(module_scope)
