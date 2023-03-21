// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.29.0
// 	protoc        v3.21.12
// source: rpc-welcome.whisper_nation.proto

package whisper_nation

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type WhisperNationWelcomeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *WhisperNationWelcomeRequest) Reset() {
	*x = WhisperNationWelcomeRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_welcome_whisper_nation_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WhisperNationWelcomeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WhisperNationWelcomeRequest) ProtoMessage() {}

func (x *WhisperNationWelcomeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_welcome_whisper_nation_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WhisperNationWelcomeRequest.ProtoReflect.Descriptor instead.
func (*WhisperNationWelcomeRequest) Descriptor() ([]byte, []int) {
	return file_rpc_welcome_whisper_nation_proto_rawDescGZIP(), []int{0}
}

type WhisperNationWelcomeResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *WhisperNationWelcomeResponse) Reset() {
	*x = WhisperNationWelcomeResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_welcome_whisper_nation_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WhisperNationWelcomeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WhisperNationWelcomeResponse) ProtoMessage() {}

func (x *WhisperNationWelcomeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_welcome_whisper_nation_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WhisperNationWelcomeResponse.ProtoReflect.Descriptor instead.
func (*WhisperNationWelcomeResponse) Descriptor() ([]byte, []int) {
	return file_rpc_welcome_whisper_nation_proto_rawDescGZIP(), []int{1}
}

func (x *WhisperNationWelcomeResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File_rpc_welcome_whisper_nation_proto protoreflect.FileDescriptor

var file_rpc_welcome_whisper_nation_proto_rawDesc = []byte{
	0x0a, 0x20, 0x72, 0x70, 0x63, 0x2d, 0x77, 0x65, 0x6c, 0x63, 0x6f, 0x6d, 0x65, 0x2e, 0x77, 0x68,
	0x69, 0x73, 0x70, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0e, 0x77, 0x68, 0x69, 0x73, 0x70, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x22, 0x1d, 0x0a, 0x1b, 0x57, 0x68, 0x69, 0x73, 0x70, 0x65, 0x72, 0x4e, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x57, 0x65, 0x6c, 0x63, 0x6f, 0x6d, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x22, 0x38, 0x0a, 0x1c, 0x57, 0x68, 0x69, 0x73, 0x70, 0x65, 0x72, 0x4e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x57, 0x65, 0x6c, 0x63, 0x6f, 0x6d, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x42, 0x29, 0x5a, 0x27, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x69, 0x72, 0x6a, 0x61, 0x67,
	0x65, 0x72, 0x2f, 0x72, 0x70, 0x63, 0x73, 0x2f, 0x77, 0x68, 0x69, 0x73, 0x70, 0x65, 0x72, 0x5f,
	0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rpc_welcome_whisper_nation_proto_rawDescOnce sync.Once
	file_rpc_welcome_whisper_nation_proto_rawDescData = file_rpc_welcome_whisper_nation_proto_rawDesc
)

func file_rpc_welcome_whisper_nation_proto_rawDescGZIP() []byte {
	file_rpc_welcome_whisper_nation_proto_rawDescOnce.Do(func() {
		file_rpc_welcome_whisper_nation_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_welcome_whisper_nation_proto_rawDescData)
	})
	return file_rpc_welcome_whisper_nation_proto_rawDescData
}

var file_rpc_welcome_whisper_nation_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_rpc_welcome_whisper_nation_proto_goTypes = []interface{}{
	(*WhisperNationWelcomeRequest)(nil),  // 0: whisper_nation.WhisperNationWelcomeRequest
	(*WhisperNationWelcomeResponse)(nil), // 1: whisper_nation.WhisperNationWelcomeResponse
}
var file_rpc_welcome_whisper_nation_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_rpc_welcome_whisper_nation_proto_init() }
func file_rpc_welcome_whisper_nation_proto_init() {
	if File_rpc_welcome_whisper_nation_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_rpc_welcome_whisper_nation_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WhisperNationWelcomeRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_rpc_welcome_whisper_nation_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WhisperNationWelcomeResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_rpc_welcome_whisper_nation_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_rpc_welcome_whisper_nation_proto_goTypes,
		DependencyIndexes: file_rpc_welcome_whisper_nation_proto_depIdxs,
		MessageInfos:      file_rpc_welcome_whisper_nation_proto_msgTypes,
	}.Build()
	File_rpc_welcome_whisper_nation_proto = out.File
	file_rpc_welcome_whisper_nation_proto_rawDesc = nil
	file_rpc_welcome_whisper_nation_proto_goTypes = nil
	file_rpc_welcome_whisper_nation_proto_depIdxs = nil
}
