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
import rpc_verify_pb2 as rpc__verify__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\rservice.proto\x12\x08trueauth\x1a\x1cgoogle/api/annotations.proto\x1a.protoc-gen-openapiv2/options/annotations.proto\x1a\x11rpc-welcome.proto\x1a\x10rpc-health.proto\x1a\x12rpc-register.proto\x1a\x0frpc-login.proto\x1a\x10rpc-verify.proto2\xba\x07\n\x08TrueAuth\x12~\n\x07Welcome\x12\x18.trueauth.WelcomeRequest\x1a\x19.trueauth.WelcomeResponse\">\x82\xd3\xe4\x93\x02\x03\x12\x01/\x92\x41\x32\n\x06System\x12\x0fWelcome Message\x1a\x17Returns welcome message\x12z\n\x06Health\x12\x17.trueauth.HealthRequest\x1a\x18.trueauth.HealthResponse\"=\x82\xd3\xe4\x93\x02\x0c\x12\n/v1/health\x92\x41(\n\x06System\x12\nApi Health\x1a\x12Returns api health\x12~\n\x08Register\x12\x19.trueauth.RegisterRequest\x1a\x1a.trueauth.RegisterResponse\";\x82\xd3\xe4\x93\x02\x0e\x12\x0c/v1/register\x92\x41$\n\x04\x41uth\x12\rRegister User\x1a\rRegister User\x12l\n\x05Login\x12\x16.trueauth.LoginRequest\x1a\x17.trueauth.LoginResponse\"2\x82\xd3\xe4\x93\x02\x0b\x12\t/v1/login\x92\x41\x1e\n\x04\x41uth\x12\nLogin User\x1a\nLogin User\x12\xa1\x01\n\x0bVerifyEmail\x12\x1c.trueauth.VerifyEmailRequest\x1a\x1d.trueauth.VerifyEmailResponse\"U\x82\xd3\xe4\x93\x02\x12\"\x10/v1/verify-email\x92\x41:\n\x04\x41uth\x12\x18Request and verify email\x1a\x18Request and verify email\x12\x96\x01\n\x0e\x41llowIPAddress\x12\x1f.trueauth.AllowIPAddressRequest\x1a .trueauth.AllowIPAddressResponse\"A\x82\xd3\xe4\x93\x02\x0e\"\x0c/v1/allow-ip\x92\x41*\n\x04\x41uth\x12\x10\x41llow ip address\x1a\x10\x41llow ip address\x1a\x86\x01\x92\x41\x82\x01\x12:True Auth is a standalone authentication gRPC and rest api\x1a\x44\n\x1c\x46ind out more about TrueAuth\x12$https://github.com/sirjager/trueauthBoZ!github.com/sirjager/rpcs/trueauth\x92\x41I\x12G\n\x0cTrueAuth Api\"0\n\x08SirJager\x12$https://github.com/sirjager/trueauth2\x05\x30.1.0b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'service_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z!github.com/sirjager/rpcs/trueauth\222AI\022G\n\014TrueAuth Api\"0\n\010SirJager\022$https://github.com/sirjager/trueauth2\0050.1.0'
  _TRUEAUTH._options = None
  _TRUEAUTH._serialized_options = b'\222A\202\001\022:True Auth is a standalone authentication gRPC and rest api\032D\n\034Find out more about TrueAuth\022$https://github.com/sirjager/trueauth'
  _TRUEAUTH.methods_by_name['Welcome']._options = None
  _TRUEAUTH.methods_by_name['Welcome']._serialized_options = b'\202\323\344\223\002\003\022\001/\222A2\n\006System\022\017Welcome Message\032\027Returns welcome message'
  _TRUEAUTH.methods_by_name['Health']._options = None
  _TRUEAUTH.methods_by_name['Health']._serialized_options = b'\202\323\344\223\002\014\022\n/v1/health\222A(\n\006System\022\nApi Health\032\022Returns api health'
  _TRUEAUTH.methods_by_name['Register']._options = None
  _TRUEAUTH.methods_by_name['Register']._serialized_options = b'\202\323\344\223\002\016\022\014/v1/register\222A$\n\004Auth\022\rRegister User\032\rRegister User'
  _TRUEAUTH.methods_by_name['Login']._options = None
  _TRUEAUTH.methods_by_name['Login']._serialized_options = b'\202\323\344\223\002\013\022\t/v1/login\222A\036\n\004Auth\022\nLogin User\032\nLogin User'
  _TRUEAUTH.methods_by_name['VerifyEmail']._options = None
  _TRUEAUTH.methods_by_name['VerifyEmail']._serialized_options = b'\202\323\344\223\002\022\"\020/v1/verify-email\222A:\n\004Auth\022\030Request and verify email\032\030Request and verify email'
  _TRUEAUTH.methods_by_name['AllowIPAddress']._options = None
  _TRUEAUTH.methods_by_name['AllowIPAddress']._serialized_options = b'\202\323\344\223\002\016\"\014/v1/allow-ip\222A*\n\004Auth\022\020Allow ip address\032\020Allow ip address'
  _TRUEAUTH._serialized_start=198
  _TRUEAUTH._serialized_end=1152
# @@protoc_insertion_point(module_scope)
