# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc-send.emails.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15rpc-send.emails.proto\x12\x06\x65mails\"X\n\x15\x45mailsSendMailRequest\x12\x0e\n\x06sender\x18\x01 \x01(\t\x12\x10\n\x08receiver\x18\x02 \x01(\t\x12\x0f\n\x07subject\x18\x03 \x01(\t\x12\x0c\n\x04\x62ody\x18\x04 \x01(\t\")\n\x16\x45mailsSendMailResponse\x12\x0f\n\x07message\x18\x01 \x01(\tB!Z\x1fgithub.com/sirjager/rpcs/emailsb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rpc_send.emails_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z\037github.com/sirjager/rpcs/emails'
  _EMAILSSENDMAILREQUEST._serialized_start=33
  _EMAILSSENDMAILREQUEST._serialized_end=121
  _EMAILSSENDMAILRESPONSE._serialized_start=123
  _EMAILSSENDMAILRESPONSE._serialized_end=164
# @@protoc_insertion_point(module_scope)
