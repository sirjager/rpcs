// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.29.0
// 	protoc        v3.21.12
// source: rpc-allowip.proto

package trueauth

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

type AllowIPRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
}

func (x *AllowIPRequest) Reset() {
	*x = AllowIPRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_allowip_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AllowIPRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AllowIPRequest) ProtoMessage() {}

func (x *AllowIPRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_allowip_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AllowIPRequest.ProtoReflect.Descriptor instead.
func (*AllowIPRequest) Descriptor() ([]byte, []int) {
	return file_rpc_allowip_proto_rawDescGZIP(), []int{0}
}

func (x *AllowIPRequest) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

type AllowIPResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *AllowIPResponse) Reset() {
	*x = AllowIPResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_allowip_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AllowIPResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AllowIPResponse) ProtoMessage() {}

func (x *AllowIPResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_allowip_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AllowIPResponse.ProtoReflect.Descriptor instead.
func (*AllowIPResponse) Descriptor() ([]byte, []int) {
	return file_rpc_allowip_proto_rawDescGZIP(), []int{1}
}

func (x *AllowIPResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File_rpc_allowip_proto protoreflect.FileDescriptor

var file_rpc_allowip_proto_rawDesc = []byte{
	0x0a, 0x11, 0x72, 0x70, 0x63, 0x2d, 0x61, 0x6c, 0x6c, 0x6f, 0x77, 0x69, 0x70, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x08, 0x74, 0x72, 0x75, 0x65, 0x61, 0x75, 0x74, 0x68, 0x22, 0x24, 0x0a,
	0x0e, 0x41, 0x6c, 0x6c, 0x6f, 0x77, 0x49, 0x50, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63,
	0x6f, 0x64, 0x65, 0x22, 0x2b, 0x0a, 0x0f, 0x41, 0x6c, 0x6c, 0x6f, 0x77, 0x49, 0x50, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x42, 0x23, 0x5a, 0x21, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73,
	0x69, 0x72, 0x6a, 0x61, 0x67, 0x65, 0x72, 0x2f, 0x72, 0x70, 0x63, 0x73, 0x2f, 0x74, 0x72, 0x75,
	0x65, 0x61, 0x75, 0x74, 0x68, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rpc_allowip_proto_rawDescOnce sync.Once
	file_rpc_allowip_proto_rawDescData = file_rpc_allowip_proto_rawDesc
)

func file_rpc_allowip_proto_rawDescGZIP() []byte {
	file_rpc_allowip_proto_rawDescOnce.Do(func() {
		file_rpc_allowip_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_allowip_proto_rawDescData)
	})
	return file_rpc_allowip_proto_rawDescData
}

var file_rpc_allowip_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_rpc_allowip_proto_goTypes = []interface{}{
	(*AllowIPRequest)(nil),  // 0: trueauth.AllowIPRequest
	(*AllowIPResponse)(nil), // 1: trueauth.AllowIPResponse
}
var file_rpc_allowip_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_rpc_allowip_proto_init() }
func file_rpc_allowip_proto_init() {
	if File_rpc_allowip_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_rpc_allowip_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AllowIPRequest); i {
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
		file_rpc_allowip_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AllowIPResponse); i {
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
			RawDescriptor: file_rpc_allowip_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_rpc_allowip_proto_goTypes,
		DependencyIndexes: file_rpc_allowip_proto_depIdxs,
		MessageInfos:      file_rpc_allowip_proto_msgTypes,
	}.Build()
	File_rpc_allowip_proto = out.File
	file_rpc_allowip_proto_rawDesc = nil
	file_rpc_allowip_proto_goTypes = nil
	file_rpc_allowip_proto_depIdxs = nil
}
