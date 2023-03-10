# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-health.emails.proto

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
  name='rpc-health.emails.proto',
  package='emails',
  syntax='proto3',
  serialized_options=_b('Z\037github.com/sirjager/rpcs/emails'),
  serialized_pb=_b('\n\x17rpc-health.emails.proto\x12\x06\x65mails\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\"\x15\n\x13\x45mailsHealthRequest\"\xd0\x01\n\x14\x45mailsHealthResponse\x12\x0e\n\x06status\x18\x01 \x01(\t\x12\x0e\n\x06unsafe\x18\x02 \x01(\x08\x12\x11\n\tprotected\x18\x03 \x01(\x08\x12)\n\x06uptime\x18\x04 \x01(\x0b\x32\x19.google.protobuf.Duration\x12+\n\x07started\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12-\n\ttimestamp\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.TimestampB!Z\x1fgithub.com/sirjager/rpcs/emailsb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,google_dot_protobuf_dot_duration__pb2.DESCRIPTOR,])




_EMAILSHEALTHREQUEST = _descriptor.Descriptor(
  name='EmailsHealthRequest',
  full_name='emails.EmailsHealthRequest',
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
  serialized_start=100,
  serialized_end=121,
)


_EMAILSHEALTHRESPONSE = _descriptor.Descriptor(
  name='EmailsHealthResponse',
  full_name='emails.EmailsHealthResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='emails.EmailsHealthResponse.status', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='unsafe', full_name='emails.EmailsHealthResponse.unsafe', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='protected', full_name='emails.EmailsHealthResponse.protected', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='uptime', full_name='emails.EmailsHealthResponse.uptime', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='started', full_name='emails.EmailsHealthResponse.started', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='emails.EmailsHealthResponse.timestamp', index=5,
      number=6, type=11, cpp_type=10, label=1,
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
  serialized_start=124,
  serialized_end=332,
)

_EMAILSHEALTHRESPONSE.fields_by_name['uptime'].message_type = google_dot_protobuf_dot_duration__pb2._DURATION
_EMAILSHEALTHRESPONSE.fields_by_name['started'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_EMAILSHEALTHRESPONSE.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
DESCRIPTOR.message_types_by_name['EmailsHealthRequest'] = _EMAILSHEALTHREQUEST
DESCRIPTOR.message_types_by_name['EmailsHealthResponse'] = _EMAILSHEALTHRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

EmailsHealthRequest = _reflection.GeneratedProtocolMessageType('EmailsHealthRequest', (_message.Message,), dict(
  DESCRIPTOR = _EMAILSHEALTHREQUEST,
  __module__ = 'rpc_health.emails_pb2'
  # @@protoc_insertion_point(class_scope:emails.EmailsHealthRequest)
  ))
_sym_db.RegisterMessage(EmailsHealthRequest)

EmailsHealthResponse = _reflection.GeneratedProtocolMessageType('EmailsHealthResponse', (_message.Message,), dict(
  DESCRIPTOR = _EMAILSHEALTHRESPONSE,
  __module__ = 'rpc_health.emails_pb2'
  # @@protoc_insertion_point(class_scope:emails.EmailsHealthResponse)
  ))
_sym_db.RegisterMessage(EmailsHealthResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)