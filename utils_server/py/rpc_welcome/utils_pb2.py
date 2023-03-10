# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-welcome.utils.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='rpc-welcome.utils.proto',
  package='utils_server',
  syntax='proto3',
  serialized_options=_b('Z%github.com/sirjager/rpcs/utils_server'),
  serialized_pb=_b('\n\x17rpc-welcome.utils.proto\x12\x0cutils_server\"\x15\n\x13UtilsWelcomeRequest\"\'\n\x14UtilsWelcomeResponse\x12\x0f\n\x07message\x18\x01 \x01(\tB\'Z%github.com/sirjager/rpcs/utils_serverb\x06proto3')
)




_UTILSWELCOMEREQUEST = _descriptor.Descriptor(
  name='UtilsWelcomeRequest',
  full_name='utils_server.UtilsWelcomeRequest',
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
  serialized_start=41,
  serialized_end=62,
)


_UTILSWELCOMERESPONSE = _descriptor.Descriptor(
  name='UtilsWelcomeResponse',
  full_name='utils_server.UtilsWelcomeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message', full_name='utils_server.UtilsWelcomeResponse.message', index=0,
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
  serialized_start=64,
  serialized_end=103,
)

DESCRIPTOR.message_types_by_name['UtilsWelcomeRequest'] = _UTILSWELCOMEREQUEST
DESCRIPTOR.message_types_by_name['UtilsWelcomeResponse'] = _UTILSWELCOMERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

UtilsWelcomeRequest = _reflection.GeneratedProtocolMessageType('UtilsWelcomeRequest', (_message.Message,), dict(
  DESCRIPTOR = _UTILSWELCOMEREQUEST,
  __module__ = 'rpc_welcome.utils_pb2'
  # @@protoc_insertion_point(class_scope:utils_server.UtilsWelcomeRequest)
  ))
_sym_db.RegisterMessage(UtilsWelcomeRequest)

UtilsWelcomeResponse = _reflection.GeneratedProtocolMessageType('UtilsWelcomeResponse', (_message.Message,), dict(
  DESCRIPTOR = _UTILSWELCOMERESPONSE,
  __module__ = 'rpc_welcome.utils_pb2'
  # @@protoc_insertion_point(class_scope:utils_server.UtilsWelcomeResponse)
  ))
_sym_db.RegisterMessage(UtilsWelcomeResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
