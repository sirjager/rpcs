# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-forgot.auth.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='rpc-forgot.auth.proto',
  package='auth',
  syntax='proto3',
  serialized_options=_b('Z\035github.com/sirjager/rpcs/auth'),
  serialized_pb=_b('\n\x15rpc-forgot.auth.proto\x12\x04\x61uth\"*\n\x19\x41uthForgotPasswordRequest\x12\r\n\x05\x65mail\x18\x01 \x01(\t\"-\n\x1a\x41uthForgotPasswordResponse\x12\x0f\n\x07message\x18\x01 \x01(\t\"h\n\x18\x41uthResetPasswordRequest\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\x12\x14\n\x0cnew_password\x18\x03 \x01(\t\x12\x19\n\x11logout_everywhere\x18\x04 \x01(\x08\",\n\x19\x41uthResetPasswordResponse\x12\x0f\n\x07message\x18\x01 \x01(\tB\x1fZ\x1dgithub.com/sirjager/rpcs/authb\x06proto3')
)




_AUTHFORGOTPASSWORDREQUEST = _descriptor.Descriptor(
  name='AuthForgotPasswordRequest',
  full_name='auth.AuthForgotPasswordRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='email', full_name='auth.AuthForgotPasswordRequest.email', index=0,
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
  serialized_start=31,
  serialized_end=73,
)


_AUTHFORGOTPASSWORDRESPONSE = _descriptor.Descriptor(
  name='AuthForgotPasswordResponse',
  full_name='auth.AuthForgotPasswordResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message', full_name='auth.AuthForgotPasswordResponse.message', index=0,
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
  serialized_start=75,
  serialized_end=120,
)


_AUTHRESETPASSWORDREQUEST = _descriptor.Descriptor(
  name='AuthResetPasswordRequest',
  full_name='auth.AuthResetPasswordRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='code', full_name='auth.AuthResetPasswordRequest.code', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='email', full_name='auth.AuthResetPasswordRequest.email', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='new_password', full_name='auth.AuthResetPasswordRequest.new_password', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='logout_everywhere', full_name='auth.AuthResetPasswordRequest.logout_everywhere', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
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
  serialized_start=122,
  serialized_end=226,
)


_AUTHRESETPASSWORDRESPONSE = _descriptor.Descriptor(
  name='AuthResetPasswordResponse',
  full_name='auth.AuthResetPasswordResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message', full_name='auth.AuthResetPasswordResponse.message', index=0,
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
  serialized_start=228,
  serialized_end=272,
)

DESCRIPTOR.message_types_by_name['AuthForgotPasswordRequest'] = _AUTHFORGOTPASSWORDREQUEST
DESCRIPTOR.message_types_by_name['AuthForgotPasswordResponse'] = _AUTHFORGOTPASSWORDRESPONSE
DESCRIPTOR.message_types_by_name['AuthResetPasswordRequest'] = _AUTHRESETPASSWORDREQUEST
DESCRIPTOR.message_types_by_name['AuthResetPasswordResponse'] = _AUTHRESETPASSWORDRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AuthForgotPasswordRequest = _reflection.GeneratedProtocolMessageType('AuthForgotPasswordRequest', (_message.Message,), dict(
  DESCRIPTOR = _AUTHFORGOTPASSWORDREQUEST,
  __module__ = 'rpc_forgot.auth_pb2'
  # @@protoc_insertion_point(class_scope:auth.AuthForgotPasswordRequest)
  ))
_sym_db.RegisterMessage(AuthForgotPasswordRequest)

AuthForgotPasswordResponse = _reflection.GeneratedProtocolMessageType('AuthForgotPasswordResponse', (_message.Message,), dict(
  DESCRIPTOR = _AUTHFORGOTPASSWORDRESPONSE,
  __module__ = 'rpc_forgot.auth_pb2'
  # @@protoc_insertion_point(class_scope:auth.AuthForgotPasswordResponse)
  ))
_sym_db.RegisterMessage(AuthForgotPasswordResponse)

AuthResetPasswordRequest = _reflection.GeneratedProtocolMessageType('AuthResetPasswordRequest', (_message.Message,), dict(
  DESCRIPTOR = _AUTHRESETPASSWORDREQUEST,
  __module__ = 'rpc_forgot.auth_pb2'
  # @@protoc_insertion_point(class_scope:auth.AuthResetPasswordRequest)
  ))
_sym_db.RegisterMessage(AuthResetPasswordRequest)

AuthResetPasswordResponse = _reflection.GeneratedProtocolMessageType('AuthResetPasswordResponse', (_message.Message,), dict(
  DESCRIPTOR = _AUTHRESETPASSWORDRESPONSE,
  __module__ = 'rpc_forgot.auth_pb2'
  # @@protoc_insertion_point(class_scope:auth.AuthResetPasswordResponse)
  ))
_sym_db.RegisterMessage(AuthResetPasswordResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
