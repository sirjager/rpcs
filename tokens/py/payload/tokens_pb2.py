# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.tokens.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='payload.tokens.proto',
  package='tokens',
  syntax='proto3',
  serialized_options=_b('Z\037github.com/sirjager/rpcs/tokens'),
  serialized_pb=_b('\n\x14payload.tokens.proto\x12\x06tokens\x1a\x1fgoogle/protobuf/timestamp.proto\"!\n\x11TokensPayloadData\x12\x0c\n\x04\x64\x61ta\x18\x01 \x01(\t\"\x9d\x01\n\rTokensPayload\x12\n\n\x02id\x18\x01 \x01(\t\x12\'\n\x03iat\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12+\n\x07\x65xpires\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12*\n\x07payload\x18\x04 \x01(\x0b\x32\x19.tokens.TokensPayloadDataB!Z\x1fgithub.com/sirjager/rpcs/tokensb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_TOKENSPAYLOADDATA = _descriptor.Descriptor(
  name='TokensPayloadData',
  full_name='tokens.TokensPayloadData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='tokens.TokensPayloadData.data', index=0,
      number=1, type=9, cpp_type=9, label=1,
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
  serialized_start=65,
  serialized_end=98,
)


_TOKENSPAYLOAD = _descriptor.Descriptor(
  name='TokensPayload',
  full_name='tokens.TokensPayload',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='tokens.TokensPayload.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='iat', full_name='tokens.TokensPayload.iat', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expires', full_name='tokens.TokensPayload.expires', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payload', full_name='tokens.TokensPayload.payload', index=3,
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
  serialized_start=101,
  serialized_end=258,
)

_TOKENSPAYLOAD.fields_by_name['iat'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TOKENSPAYLOAD.fields_by_name['expires'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TOKENSPAYLOAD.fields_by_name['payload'].message_type = _TOKENSPAYLOADDATA
DESCRIPTOR.message_types_by_name['TokensPayloadData'] = _TOKENSPAYLOADDATA
DESCRIPTOR.message_types_by_name['TokensPayload'] = _TOKENSPAYLOAD
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TokensPayloadData = _reflection.GeneratedProtocolMessageType('TokensPayloadData', (_message.Message,), dict(
  DESCRIPTOR = _TOKENSPAYLOADDATA,
  __module__ = 'payload.tokens_pb2'
  # @@protoc_insertion_point(class_scope:tokens.TokensPayloadData)
  ))
_sym_db.RegisterMessage(TokensPayloadData)

TokensPayload = _reflection.GeneratedProtocolMessageType('TokensPayload', (_message.Message,), dict(
  DESCRIPTOR = _TOKENSPAYLOAD,
  __module__ = 'payload.tokens_pb2'
  # @@protoc_insertion_point(class_scope:tokens.TokensPayload)
  ))
_sym_db.RegisterMessage(TokensPayload)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)