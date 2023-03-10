# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-verify.tokens.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from payload import tokens_pb2 as payload_dot_tokens__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='rpc-verify.tokens.proto',
  package='tokens',
  syntax='proto3',
  serialized_options=_b('Z\037github.com/sirjager/rpcs/tokens'),
  serialized_pb=_b('\n\x17rpc-verify.tokens.proto\x12\x06tokens\x1a\x14payload.tokens.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"5\n\x13TokensVerifyRequest\x12\r\n\x05token\x18\x01 \x01(\t\x12\x0f\n\x07\x62uilder\x18\x02 \x01(\t\"\xa4\x01\n\x14TokensVerifyResponse\x12\n\n\x02id\x18\x01 \x01(\t\x12\'\n\x03iat\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12+\n\x07\x65xpires\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12*\n\x07payload\x18\x04 \x01(\x0b\x32\x19.tokens.TokensPayloadDataB!Z\x1fgithub.com/sirjager/rpcs/tokensb\x06proto3')
  ,
  dependencies=[payload_dot_tokens__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_TOKENSVERIFYREQUEST = _descriptor.Descriptor(
  name='TokensVerifyRequest',
  full_name='tokens.TokensVerifyRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='token', full_name='tokens.TokensVerifyRequest.token', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='builder', full_name='tokens.TokensVerifyRequest.builder', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=90,
  serialized_end=143,
)


_TOKENSVERIFYRESPONSE = _descriptor.Descriptor(
  name='TokensVerifyResponse',
  full_name='tokens.TokensVerifyResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='tokens.TokensVerifyResponse.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='iat', full_name='tokens.TokensVerifyResponse.iat', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expires', full_name='tokens.TokensVerifyResponse.expires', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payload', full_name='tokens.TokensVerifyResponse.payload', index=3,
      number=4, type=11, cpp_type=10, label=1,
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
  serialized_start=146,
  serialized_end=310,
)

_TOKENSVERIFYRESPONSE.fields_by_name['iat'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TOKENSVERIFYRESPONSE.fields_by_name['expires'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TOKENSVERIFYRESPONSE.fields_by_name['payload'].message_type = payload_dot_tokens__pb2._TOKENSPAYLOADDATA
DESCRIPTOR.message_types_by_name['TokensVerifyRequest'] = _TOKENSVERIFYREQUEST
DESCRIPTOR.message_types_by_name['TokensVerifyResponse'] = _TOKENSVERIFYRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TokensVerifyRequest = _reflection.GeneratedProtocolMessageType('TokensVerifyRequest', (_message.Message,), dict(
  DESCRIPTOR = _TOKENSVERIFYREQUEST,
  __module__ = 'rpc_verify.tokens_pb2'
  # @@protoc_insertion_point(class_scope:tokens.TokensVerifyRequest)
  ))
_sym_db.RegisterMessage(TokensVerifyRequest)

TokensVerifyResponse = _reflection.GeneratedProtocolMessageType('TokensVerifyResponse', (_message.Message,), dict(
  DESCRIPTOR = _TOKENSVERIFYRESPONSE,
  __module__ = 'rpc_verify.tokens_pb2'
  # @@protoc_insertion_point(class_scope:tokens.TokensVerifyResponse)
  ))
_sym_db.RegisterMessage(TokensVerifyResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)