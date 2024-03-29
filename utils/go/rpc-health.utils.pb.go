// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.29.0
// 	protoc        v3.21.12
// source: rpc-health.utils.proto

package utils

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type UtilsHealthRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *UtilsHealthRequest) Reset() {
	*x = UtilsHealthRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_health_utils_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UtilsHealthRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UtilsHealthRequest) ProtoMessage() {}

func (x *UtilsHealthRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_health_utils_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UtilsHealthRequest.ProtoReflect.Descriptor instead.
func (*UtilsHealthRequest) Descriptor() ([]byte, []int) {
	return file_rpc_health_utils_proto_rawDescGZIP(), []int{0}
}

type UtilsHealthResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status    string                 `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Uptime    *durationpb.Duration   `protobuf:"bytes,4,opt,name=uptime,proto3" json:"uptime,omitempty"`
	Started   *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=started,proto3" json:"started,omitempty"`
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *UtilsHealthResponse) Reset() {
	*x = UtilsHealthResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_health_utils_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UtilsHealthResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UtilsHealthResponse) ProtoMessage() {}

func (x *UtilsHealthResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_health_utils_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UtilsHealthResponse.ProtoReflect.Descriptor instead.
func (*UtilsHealthResponse) Descriptor() ([]byte, []int) {
	return file_rpc_health_utils_proto_rawDescGZIP(), []int{1}
}

func (x *UtilsHealthResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *UtilsHealthResponse) GetUptime() *durationpb.Duration {
	if x != nil {
		return x.Uptime
	}
	return nil
}

func (x *UtilsHealthResponse) GetStarted() *timestamppb.Timestamp {
	if x != nil {
		return x.Started
	}
	return nil
}

func (x *UtilsHealthResponse) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

var File_rpc_health_utils_proto protoreflect.FileDescriptor

var file_rpc_health_utils_proto_rawDesc = []byte{
	0x0a, 0x16, 0x72, 0x70, 0x63, 0x2d, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x2e, 0x75, 0x74, 0x69,
	0x6c, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x1a,
	0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x14, 0x0a, 0x12, 0x55, 0x74, 0x69, 0x6c, 0x73, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0xd0, 0x01, 0x0a, 0x13, 0x55, 0x74, 0x69, 0x6c, 0x73,
	0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x31, 0x0a, 0x06, 0x75, 0x70, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x06, 0x75, 0x70, 0x74, 0x69, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x07, 0x73, 0x74, 0x61,
	0x72, 0x74, 0x65, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x07, 0x73, 0x74, 0x61, 0x72, 0x74, 0x65, 0x64, 0x12,
	0x38, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x20, 0x5a, 0x1e, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x69, 0x72, 0x6a, 0x61, 0x67, 0x65, 0x72,
	0x2f, 0x72, 0x70, 0x63, 0x73, 0x2f, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_rpc_health_utils_proto_rawDescOnce sync.Once
	file_rpc_health_utils_proto_rawDescData = file_rpc_health_utils_proto_rawDesc
)

func file_rpc_health_utils_proto_rawDescGZIP() []byte {
	file_rpc_health_utils_proto_rawDescOnce.Do(func() {
		file_rpc_health_utils_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_health_utils_proto_rawDescData)
	})
	return file_rpc_health_utils_proto_rawDescData
}

var file_rpc_health_utils_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_rpc_health_utils_proto_goTypes = []interface{}{
	(*UtilsHealthRequest)(nil),    // 0: utils.UtilsHealthRequest
	(*UtilsHealthResponse)(nil),   // 1: utils.UtilsHealthResponse
	(*durationpb.Duration)(nil),   // 2: google.protobuf.Duration
	(*timestamppb.Timestamp)(nil), // 3: google.protobuf.Timestamp
}
var file_rpc_health_utils_proto_depIdxs = []int32{
	2, // 0: utils.UtilsHealthResponse.uptime:type_name -> google.protobuf.Duration
	3, // 1: utils.UtilsHealthResponse.started:type_name -> google.protobuf.Timestamp
	3, // 2: utils.UtilsHealthResponse.timestamp:type_name -> google.protobuf.Timestamp
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_rpc_health_utils_proto_init() }
func file_rpc_health_utils_proto_init() {
	if File_rpc_health_utils_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_rpc_health_utils_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UtilsHealthRequest); i {
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
		file_rpc_health_utils_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UtilsHealthResponse); i {
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
			RawDescriptor: file_rpc_health_utils_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_rpc_health_utils_proto_goTypes,
		DependencyIndexes: file_rpc_health_utils_proto_depIdxs,
		MessageInfos:      file_rpc_health_utils_proto_msgTypes,
	}.Build()
	File_rpc_health_utils_proto = out.File
	file_rpc_health_utils_proto_rawDesc = nil
	file_rpc_health_utils_proto_goTypes = nil
	file_rpc_health_utils_proto_depIdxs = nil
}
