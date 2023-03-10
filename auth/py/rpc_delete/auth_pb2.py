# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-delete.auth.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='rpc-delete.auth.proto',
  package='auth',
  syntax='proto3',
  serialized_options=_b('Z\035github.com/sirjager/rpcs/auth'),
  serialized_pb=_b('\n\x15rpc-delete.auth.proto\x12\x04\x61uth\"\x1a\n\x18\x41uthDeleteAccountRequest\",\n\x19\x41uthDeleteAccountResponse\x12\x0f\n\x07message\x18\x01 \x01(\tB\x1fZ\x1dgithub.com/sirjager/rpcs/authb\x06proto3')
)




_AUTHDELETEACCOUNTREQUEST = _descriptor.Descriptor(
  name='AuthDeleteAccountRequest',
  full_name='auth.AuthDeleteAccountRequest',
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
  serialized_start=31,
  serialized_end=57,
)


_AUTHDELETEACCOUNTRESPONSE = _descriptor.Descriptor(
  name='AuthDeleteAccountResponse',
  full_name='auth.AuthDeleteAccountResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message', full_name='auth.AuthDeleteAccountResponse.message', index=0,
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
  serialized_start=59,
  serialized_end=103,
)

DESCRIPTOR.message_types_by_name['AuthDeleteAccountRequest'] = _AUTHDELETEACCOUNTREQUEST
DESCRIPTOR.message_types_by_name['AuthDeleteAccountResponse'] = _AUTHDELETEACCOUNTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AuthDeleteAccountRequest = _reflection.GeneratedProtocolMessageType('AuthDeleteAccountRequest', (_message.Message,), dict(
  DESCRIPTOR = _AUTHDELETEACCOUNTREQUEST,
  __module__ = 'rpc_delete.auth_pb2'
  # @@protoc_insertion_point(class_scope:auth.AuthDeleteAccountRequest)
  ))
_sym_db.RegisterMessage(AuthDeleteAccountRequest)

AuthDeleteAccountResponse = _reflection.GeneratedProtocolMessageType('AuthDeleteAccountResponse', (_message.Message,), dict(
  DESCRIPTOR = _AUTHDELETEACCOUNTRESPONSE,
  __module__ = 'rpc_delete.auth_pb2'
  # @@protoc_insertion_point(class_scope:auth.AuthDeleteAccountResponse)
  ))
_sym_db.RegisterMessage(AuthDeleteAccountResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
