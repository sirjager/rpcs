# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: service.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from protoc_gen_openapiv2.options import annotations_pb2 as protoc__gen__openapiv2_dot_options_dot_annotations__pb2
import rpc_welcome_pb2 as rpc__welcome__pb2
import rpc_health_pb2 as rpc__health__pb2
import rpc_search_pb2 as rpc__search__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\rservice.proto\x12\x07library\x1a\x1cgoogle/api/annotations.proto\x1a.protoc-gen-openapiv2/options/annotations.proto\x1a\x11rpc-welcome.proto\x1a\x10rpc-health.proto\x1a\x10rpc-search.proto2\x8a\x04\n\x07Library\x12|\n\x07Welcome\x12\x17.library.WelcomeRequest\x1a\x18.library.WelcomeResponse\">\x82\xd3\xe4\x93\x02\x03\x12\x01/\x92\x41\x32\n\x06System\x12\x0fWelcome Message\x1a\x17Returns welcome message\x12x\n\x06Health\x12\x16.library.HealthRequest\x1a\x17.library.HealthResponse\"=\x82\xd3\xe4\x93\x02\x0c\x12\n/v1/health\x92\x41(\n\x06System\x12\nApi Health\x1a\x12Returns api health\x12\x7f\n\x06Search\x12\x16.library.SearchRequest\x1a\x17.library.SearchResponse\"D\x82\xd3\xe4\x93\x02\x0f\"\n/v1/search:\x01*\x92\x41,\n\x05\x42ooks\x12\x0cSearch books\x1a\x15Returns list of books\x1a\x85\x01\x92\x41\x81\x01\x12:True Auth is a standalone authentication gRPC and rest api\x1a\x43\n\x1c\x46ind out more about TrueAuth\x12#https://github.com/sirjager/libraryBlZ github.com/sirjager/rpcs/library\x92\x41G\x12\x45\n\x0bLibrary Api\"/\n\x08sirjager\x12#https://github.com/sirjager/library2\x05\x30.1.0b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'service_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z github.com/sirjager/rpcs/library\222AG\022E\n\013Library Api\"/\n\010sirjager\022#https://github.com/sirjager/library2\0050.1.0'
  _LIBRARY._options = None
  _LIBRARY._serialized_options = b'\222A\201\001\022:True Auth is a standalone authentication gRPC and rest api\032C\n\034Find out more about TrueAuth\022#https://github.com/sirjager/library'
  _LIBRARY.methods_by_name['Welcome']._options = None
  _LIBRARY.methods_by_name['Welcome']._serialized_options = b'\202\323\344\223\002\003\022\001/\222A2\n\006System\022\017Welcome Message\032\027Returns welcome message'
  _LIBRARY.methods_by_name['Health']._options = None
  _LIBRARY.methods_by_name['Health']._serialized_options = b'\202\323\344\223\002\014\022\n/v1/health\222A(\n\006System\022\nApi Health\032\022Returns api health'
  _LIBRARY.methods_by_name['Search']._options = None
  _LIBRARY.methods_by_name['Search']._serialized_options = b'\202\323\344\223\002\017\"\n/v1/search:\001*\222A,\n\005Books\022\014Search books\032\025Returns list of books'
  _LIBRARY._serialized_start=160
  _LIBRARY._serialized_end=682
# @@protoc_insertion_point(module_scope)
