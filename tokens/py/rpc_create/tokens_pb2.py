# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-create.tokens.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from payload import tokens_pb2 as payload_dot_tokens__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='rpc-create.tokens.proto',
  package='tokens',
  syntax='proto3',
  serialized_options=_b('Z\037github.com/sirjager/rpcs/tokens'),
  serialized_pb=_b('\n\x17rpc-create.tokens.proto\x12\x06tokens\x1a\x14payload.tokens.proto\"B\n\x13TokensCreateRequest\x12\x0c\n\x04\x64\x61ta\x18\x01 \x01(\t\x12\x0f\n\x07\x62uilder\x18\x02 \x01(\t\x12\x0c\n\x04secs\x18\x03 \x01(\x01\"M\n\x14TokensCreateResponse\x12\r\n\x05token\x18\x01 \x01(\t\x12&\n\x07payload\x18\x02 \x01(\x0b\x32\x15.tokens.TokensPayloadB!Z\x1fgithub.com/sirjager/rpcs/tokensb\x06proto3')
  ,
  dependencies=[payload_dot_tokens__pb2.DESCRIPTOR,])




_TOKENSCREATEREQUEST = _descriptor.Descriptor(
  name='TokensCreateRequest',
  full_name='tokens.TokensCreateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='tokens.TokensCreateRequest.data', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='builder', full_name='tokens.TokensCreateRequest.builder', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='secs', full_name='tokens.TokensCreateRequest.secs', index=2,
      number=3, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=57,
  serialized_end=123,
)


_TOKENSCREATERESPONSE = _descriptor.Descriptor(
  name='TokensCreateResponse',
  full_name='tokens.TokensCreateResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='token', full_name='tokens.TokensCreateResponse.token', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payload', full_name='tokens.TokensCreateResponse.payload', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=125,
  serialized_end=202,
)

_TOKENSCREATERESPONSE.fields_by_name['payload'].message_type = payload_dot_tokens__pb2._TOKENSPAYLOAD
DESCRIPTOR.message_types_by_name['TokensCreateRequest'] = _TOKENSCREATEREQUEST
DESCRIPTOR.message_types_by_name['TokensCreateResponse'] = _TOKENSCREATERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TokensCreateRequest = _reflection.GeneratedProtocolMessageType('TokensCreateRequest', (_message.Message,), dict(
  DESCRIPTOR = _TOKENSCREATEREQUEST,
  __module__ = 'rpc_create.tokens_pb2'
  # @@protoc_insertion_point(class_scope:tokens.TokensCreateRequest)
  ))
_sym_db.RegisterMessage(TokensCreateRequest)

TokensCreateResponse = _reflection.GeneratedProtocolMessageType('TokensCreateResponse', (_message.Message,), dict(
  DESCRIPTOR = _TOKENSCREATERESPONSE,
  __module__ = 'rpc_create.tokens_pb2'
  # @@protoc_insertion_point(class_scope:tokens.TokensCreateResponse)
  ))
_sym_db.RegisterMessage(TokensCreateResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
