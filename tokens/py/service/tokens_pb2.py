# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: service.tokens.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from protoc_gen_openapiv2.options import annotations_pb2 as protoc__gen__openapiv2_dot_options_dot_annotations__pb2
from rpc_health import tokens_pb2 as rpc__health_dot_tokens__pb2
from rpc_welcome import tokens_pb2 as rpc__welcome_dot_tokens__pb2
from rpc_create import tokens_pb2 as rpc__create_dot_tokens__pb2
from rpc_verify import tokens_pb2 as rpc__verify_dot_tokens__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14service.tokens.proto\x12\x06tokens\x1a\x1cgoogle/api/annotations.proto\x1a.protoc-gen-openapiv2/options/annotations.proto\x1a\x17rpc-health.tokens.proto\x1a\x18rpc-welcome.tokens.proto\x1a\x17rpc-create.tokens.proto\x1a\x17rpc-verify.tokens.proto2\xf7\x04\n\x06Tokens\x12\x8d\x01\n\rTokensWelcome\x12\x1c.tokens.TokensWelcomeRequest\x1a\x1d.tokens.TokensWelcomeResponse\"?\x82\xd3\xe4\x93\x02\x03\x12\x01/\x92\x41\x33\n\x06System\x12\x0fWelcome Message\x1a\x18returs a welcome message\x12\xa3\x01\n\x0cTokensHealth\x12\x1b.tokens.TokensHealthRequest\x1a\x1c.tokens.TokensHealthResponse\"X\x82\xd3\xe4\x93\x02\t\x12\x07/health\x92\x41\x46\n\x06System\x12\nApi Health\x1a\x30use this route to check if api is working or not\x12\x99\x01\n\x0cTokensCreate\x12\x1b.tokens.TokensCreateRequest\x1a\x1c.tokens.TokensCreateResponse\"N\x82\xd3\xe4\x93\x02\x0f\"\n/v1/create:\x01*\x92\x41\x36\n\x06Tokens\x12\x0c\x43reate Token\x1a\x1euse this route to create token\x12\x9a\x01\n\x0cTokensVerify\x12\x1b.tokens.TokensVerifyRequest\x1a\x1c.tokens.TokensVerifyResponse\"O\x82\xd3\xe4\x93\x02\x0f\"\n/v1/verify:\x01*\x92\x41\x37\n\x06Tokens\x12\x0cVerify Token\x1a\x1fuse this router to verify tokenBcZ\x1fgithub.com/sirjager/rpcs/tokens\x92\x41?\x12=\n\nTokens Api\"*\n\x0b\x41nkur Kumar\x12\x1bhttps://github.com/sirjager2\x03\x30.2b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'service.tokens_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z\037github.com/sirjager/rpcs/tokens\222A?\022=\n\nTokens Api\"*\n\013Ankur Kumar\022\033https://github.com/sirjager2\0030.2'
  _TOKENS.methods_by_name['TokensWelcome']._options = None
  _TOKENS.methods_by_name['TokensWelcome']._serialized_options = b'\202\323\344\223\002\003\022\001/\222A3\n\006System\022\017Welcome Message\032\030returs a welcome message'
  _TOKENS.methods_by_name['TokensHealth']._options = None
  _TOKENS.methods_by_name['TokensHealth']._serialized_options = b'\202\323\344\223\002\t\022\007/health\222AF\n\006System\022\nApi Health\0320use this route to check if api is working or not'
  _TOKENS.methods_by_name['TokensCreate']._options = None
  _TOKENS.methods_by_name['TokensCreate']._serialized_options = b'\202\323\344\223\002\017\"\n/v1/create:\001*\222A6\n\006Tokens\022\014Create Token\032\036use this route to create token'
  _TOKENS.methods_by_name['TokensVerify']._options = None
  _TOKENS.methods_by_name['TokensVerify']._serialized_options = b'\202\323\344\223\002\017\"\n/v1/verify:\001*\222A7\n\006Tokens\022\014Verify Token\032\037use this router to verify token'
  _TOKENS._serialized_start=212
  _TOKENS._serialized_end=843
# @@protoc_insertion_point(module_scope)
