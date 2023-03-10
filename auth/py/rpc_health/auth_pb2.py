# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-health.auth.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='rpc-health.auth.proto',
  package='auth',
  syntax='proto3',
  serialized_options=_b('Z\035github.com/sirjager/rpcs/auth'),
  serialized_pb=_b('\n\x15rpc-health.auth.proto\x12\x04\x61uth\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\"\x13\n\x11\x41uthHealthRequest\"\xbb\x01\n\x12\x41uthHealthResponse\x12\x0e\n\x06status\x18\x01 \x01(\t\x12\x0e\n\x06unsafe\x18\x02 \x01(\x08\x12)\n\x06uptime\x18\x03 \x01(\x0b\x32\x19.google.protobuf.Duration\x12+\n\x07started\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12-\n\ttimestamp\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x1fZ\x1dgithub.com/sirjager/rpcs/authb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,google_dot_protobuf_dot_duration__pb2.DESCRIPTOR,])




_AUTHHEALTHREQUEST = _descriptor.Descriptor(
  name='AuthHealthRequest',
  full_name='auth.AuthHealthRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=96,
  serialized_end=115,
)


_AUTHHEALTHRESPONSE = _descriptor.Descriptor(
  name='AuthHealthResponse',
  full_name='auth.AuthHealthResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='auth.AuthHealthResponse.status', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='unsafe', full_name='auth.AuthHealthResponse.unsafe', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='uptime', full_name='auth.AuthHealthResponse.uptime', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='started', full_name='auth.AuthHealthResponse.started', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='auth.AuthHealthResponse.timestamp', index=4,
      number=5, type=11, cpp_type=10, label=1,
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
  serialized_start=118,
  serialized_end=305,
)

_AUTHHEALTHRESPONSE.fields_by_name['uptime'].message_type = google_dot_protobuf_dot_duration__pb2._DURATION
_AUTHHEALTHRESPONSE.fields_by_name['started'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_AUTHHEALTHRESPONSE.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
DESCRIPTOR.message_types_by_name['AuthHealthRequest'] = _AUTHHEALTHREQUEST
DESCRIPTOR.message_types_by_name['AuthHealthResponse'] = _AUTHHEALTHRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AuthHealthRequest = _reflection.GeneratedProtocolMessageType('AuthHealthRequest', (_message.Message,), dict(
  DESCRIPTOR = _AUTHHEALTHREQUEST,
  __module__ = 'rpc_health.auth_pb2'
  # @@protoc_insertion_point(class_scope:auth.AuthHealthRequest)
  ))
_sym_db.RegisterMessage(AuthHealthRequest)

AuthHealthResponse = _reflection.GeneratedProtocolMessageType('AuthHealthResponse', (_message.Message,), dict(
  DESCRIPTOR = _AUTHHEALTHRESPONSE,
  __module__ = 'rpc_health.auth_pb2'
  # @@protoc_insertion_point(class_scope:auth.AuthHealthResponse)
  ))
_sym_db.RegisterMessage(AuthHealthResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)