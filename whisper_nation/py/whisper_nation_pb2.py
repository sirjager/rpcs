# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: whisper_nation.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14whisper_nation.proto\x12\x0ewhisper_nation\x1a\x1fgoogle/protobuf/timestamp.proto\"/\n\x13WhisperNationMember\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x83\x01\n\x14WhisperNationMessage\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x02 \x01(\t\x12\x10\n\x08group_id\x18\x03 \x01(\t\x12\x0f\n\x07user_id\x18\x04 \x01(\t\x12+\n\x07sent_at\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"^\n\x12WhisperNationGroup\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12.\n\ncreated_at\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampB)Z\'github.com/sirjager/rpcs/whisper_nationb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'whisper_nation_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z\'github.com/sirjager/rpcs/whisper_nation'
  _WHISPERNATIONMEMBER._serialized_start=73
  _WHISPERNATIONMEMBER._serialized_end=120
  _WHISPERNATIONMESSAGE._serialized_start=123
  _WHISPERNATIONMESSAGE._serialized_end=254
  _WHISPERNATIONGROUP._serialized_start=256
  _WHISPERNATIONGROUP._serialized_end=350
# @@protoc_insertion_point(module_scope)
