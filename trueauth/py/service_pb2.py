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
import rpc_register_pb2 as rpc__register__pb2
import rpc_login_pb2 as rpc__login__pb2
import rpc_logout_pb2 as rpc__logout__pb2
import rpc_verify_pb2 as rpc__verify__pb2
import rpc_reset_pb2 as rpc__reset__pb2
import rpc_users_pb2 as rpc__users__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\rservice.proto\x12\x08trueauth\x1a\x1cgoogle/api/annotations.proto\x1a.protoc-gen-openapiv2/options/annotations.proto\x1a\x11rpc-welcome.proto\x1a\x10rpc-health.proto\x1a\x12rpc-register.proto\x1a\x0frpc-login.proto\x1a\x10rpc-logout.proto\x1a\x10rpc-verify.proto\x1a\x0frpc-reset.proto\x1a\x0frpc-users.proto2\xfe\t\n\x08TrueAuth\x12~\n\x07Welcome\x12\x18.trueauth.WelcomeRequest\x1a\x19.trueauth.WelcomeResponse\">\x82\xd3\xe4\x93\x02\x03\x12\x01/\x92\x41\x32\n\x06System\x12\x0fWelcome Message\x1a\x17Returns welcome message\x12z\n\x06Health\x12\x17.trueauth.HealthRequest\x1a\x18.trueauth.HealthResponse\"=\x82\xd3\xe4\x93\x02\x0c\x12\n/v1/health\x92\x41(\n\x06System\x12\nApi Health\x1a\x12Returns api health\x12\x81\x01\n\x08Register\x12\x19.trueauth.RegisterRequest\x1a\x1a.trueauth.RegisterResponse\">\x82\xd3\xe4\x93\x02\x11\"\x0c/v1/register:\x01*\x92\x41$\n\x04\x41uth\x12\rRegister user\x1a\rRegister user\x12o\n\x05Login\x12\x16.trueauth.LoginRequest\x1a\x17.trueauth.LoginResponse\"5\x82\xd3\xe4\x93\x02\x0e\"\t/v1/login:\x01*\x92\x41\x1e\n\x04\x41uth\x12\nLogin user\x1a\nLogin user\x12{\n\x06Logout\x12\x17.trueauth.LogoutRequest\x1a\x18.trueauth.LogoutResponse\">\x82\xd3\xe4\x93\x02\x0f\"\n/v1/logout:\x01*\x92\x41&\n\x04\x41uth\x12\x0eLog\'s out user\x1a\x0eLog\'s out user\x12\x83\x01\n\x06Verify\x12\x17.trueauth.VerifyRequest\x1a\x18.trueauth.VerifyResponse\"F\x82\xd3\xe4\x93\x02\x0f\"\n/v1/verify:\x01*\x92\x41.\n\x04\x41uth\x12\x12\x45mail verification\x1a\x12\x45mail verification\x12w\n\x05Reset\x12\x16.trueauth.ResetRequest\x1a\x17.trueauth.ResetResponse\"=\x82\xd3\xe4\x93\x02\x0e\"\t/v1/reset:\x01*\x92\x41&\n\x04\x41uth\x12\x0ePassword reset\x1a\x0ePassword reset\x12\x80\x01\n\tListUsers\x12\x1a.trueauth.ListUsersRequest\x1a\x1b.trueauth.ListUsersResponse\":\x82\xd3\xe4\x93\x02\x0b\x12\t/v1/users\x92\x41&\n\x04User\x12\x0eList all users\x1a\x0eList all users\x12y\n\x07GetUser\x12\x18.trueauth.GetUserRequest\x1a\x19.trueauth.GetUserResponse\"9\x82\xd3\xe4\x93\x02\x16\x12\x14/v1/users/{identity}\x92\x41\x1a\n\x04User\x12\x08Get user\x1a\x08Get user\x1a\x86\x01\x92\x41\x82\x01\x12:True Auth is a standalone authentication gRPC and rest api\x1a\x44\n\x1c\x46ind out more about TrueAuth\x12$https://github.com/sirjager/trueauthBpZ!github.com/sirjager/rpcs/trueauth\x92\x41J\x12H\n\rTrue Auth Api\"0\n\x08SirJager\x12$https://github.com/sirjager/trueauth2\x05\x30.1.0b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'service_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z!github.com/sirjager/rpcs/trueauth\222AJ\022H\n\rTrue Auth Api\"0\n\010SirJager\022$https://github.com/sirjager/trueauth2\0050.1.0'
  _TRUEAUTH._options = None
  _TRUEAUTH._serialized_options = b'\222A\202\001\022:True Auth is a standalone authentication gRPC and rest api\032D\n\034Find out more about TrueAuth\022$https://github.com/sirjager/trueauth'
  _TRUEAUTH.methods_by_name['Welcome']._options = None
  _TRUEAUTH.methods_by_name['Welcome']._serialized_options = b'\202\323\344\223\002\003\022\001/\222A2\n\006System\022\017Welcome Message\032\027Returns welcome message'
  _TRUEAUTH.methods_by_name['Health']._options = None
  _TRUEAUTH.methods_by_name['Health']._serialized_options = b'\202\323\344\223\002\014\022\n/v1/health\222A(\n\006System\022\nApi Health\032\022Returns api health'
  _TRUEAUTH.methods_by_name['Register']._options = None
  _TRUEAUTH.methods_by_name['Register']._serialized_options = b'\202\323\344\223\002\021\"\014/v1/register:\001*\222A$\n\004Auth\022\rRegister user\032\rRegister user'
  _TRUEAUTH.methods_by_name['Login']._options = None
  _TRUEAUTH.methods_by_name['Login']._serialized_options = b'\202\323\344\223\002\016\"\t/v1/login:\001*\222A\036\n\004Auth\022\nLogin user\032\nLogin user'
  _TRUEAUTH.methods_by_name['Logout']._options = None
  _TRUEAUTH.methods_by_name['Logout']._serialized_options = b'\202\323\344\223\002\017\"\n/v1/logout:\001*\222A&\n\004Auth\022\016Log\'s out user\032\016Log\'s out user'
  _TRUEAUTH.methods_by_name['Verify']._options = None
  _TRUEAUTH.methods_by_name['Verify']._serialized_options = b'\202\323\344\223\002\017\"\n/v1/verify:\001*\222A.\n\004Auth\022\022Email verification\032\022Email verification'
  _TRUEAUTH.methods_by_name['Reset']._options = None
  _TRUEAUTH.methods_by_name['Reset']._serialized_options = b'\202\323\344\223\002\016\"\t/v1/reset:\001*\222A&\n\004Auth\022\016Password reset\032\016Password reset'
  _TRUEAUTH.methods_by_name['ListUsers']._options = None
  _TRUEAUTH.methods_by_name['ListUsers']._serialized_options = b'\202\323\344\223\002\013\022\t/v1/users\222A&\n\004User\022\016List all users\032\016List all users'
  _TRUEAUTH.methods_by_name['GetUser']._options = None
  _TRUEAUTH.methods_by_name['GetUser']._serialized_options = b'\202\323\344\223\002\026\022\024/v1/users/{identity}\222A\032\n\004User\022\010Get user\032\010Get user'
  _TRUEAUTH._serialized_start=250
  _TRUEAUTH._serialized_end=1528
# @@protoc_insertion_point(module_scope)
