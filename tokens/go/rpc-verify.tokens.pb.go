// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: rpc-verify.tokens.proto

package tokens

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
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

type TokensVerifyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token   string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Builder string `protobuf:"bytes,2,opt,name=builder,proto3" json:"builder,omitempty"`
}

func (x *TokensVerifyRequest) Reset() {
	*x = TokensVerifyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_verify_tokens_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TokensVerifyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokensVerifyRequest) ProtoMessage() {}

func (x *TokensVerifyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_verify_tokens_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TokensVerifyRequest.ProtoReflect.Descriptor instead.
func (*TokensVerifyRequest) Descriptor() ([]byte, []int) {
	return file_rpc_verify_tokens_proto_rawDescGZIP(), []int{0}
}

func (x *TokensVerifyRequest) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

func (x *TokensVerifyRequest) GetBuilder() string {
	if x != nil {
		return x.Builder
	}
	return ""
}

type TokensVerifyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id      string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Iat     *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=iat,proto3" json:"iat,omitempty"`
	Expires *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=expires,proto3" json:"expires,omitempty"`
	Payload *TokensPayloadData     `protobuf:"bytes,4,opt,name=payload,proto3" json:"payload,omitempty"`
}

func (x *TokensVerifyResponse) Reset() {
	*x = TokensVerifyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_verify_tokens_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TokensVerifyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TokensVerifyResponse) ProtoMessage() {}

func (x *TokensVerifyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_verify_tokens_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TokensVerifyResponse.ProtoReflect.Descriptor instead.
func (*TokensVerifyResponse) Descriptor() ([]byte, []int) {
	return file_rpc_verify_tokens_proto_rawDescGZIP(), []int{1}
}

func (x *TokensVerifyResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *TokensVerifyResponse) GetIat() *timestamppb.Timestamp {
	if x != nil {
		return x.Iat
	}
	return nil
}

func (x *TokensVerifyResponse) GetExpires() *timestamppb.Timestamp {
	if x != nil {
		return x.Expires
	}
	return nil
}

func (x *TokensVerifyResponse) GetPayload() *TokensPayloadData {
	if x != nil {
		return x.Payload
	}
	return nil
}

var File_rpc_verify_tokens_proto protoreflect.FileDescriptor

var file_rpc_verify_tokens_proto_rawDesc = []byte{
	0x0a, 0x17, 0x72, 0x70, 0x63, 0x2d, 0x76, 0x65, 0x72, 0x69, 0x66, 0x79, 0x2e, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x73, 0x1a, 0x14, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x45, 0x0a, 0x13, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x73, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x18, 0x0a, 0x07, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x65, 0x72,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x65, 0x72, 0x22,
	0xbf, 0x01, 0x0a, 0x14, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x2c, 0x0a, 0x03, 0x69, 0x61, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x52, 0x03, 0x69, 0x61, 0x74, 0x12, 0x34, 0x0a, 0x07, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65,
	0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x07, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x12, 0x33, 0x0a, 0x07,
	0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x50, 0x61, 0x79,
	0x6c, 0x6f, 0x61, 0x64, 0x44, 0x61, 0x74, 0x61, 0x52, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61,
	0x64, 0x42, 0x21, 0x5a, 0x1f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x73, 0x69, 0x72, 0x6a, 0x61, 0x67, 0x65, 0x72, 0x2f, 0x72, 0x70, 0x63, 0x73, 0x2f, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rpc_verify_tokens_proto_rawDescOnce sync.Once
	file_rpc_verify_tokens_proto_rawDescData = file_rpc_verify_tokens_proto_rawDesc
)

func file_rpc_verify_tokens_proto_rawDescGZIP() []byte {
	file_rpc_verify_tokens_proto_rawDescOnce.Do(func() {
		file_rpc_verify_tokens_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_verify_tokens_proto_rawDescData)
	})
	return file_rpc_verify_tokens_proto_rawDescData
}

var file_rpc_verify_tokens_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_rpc_verify_tokens_proto_goTypes = []interface{}{
	(*TokensVerifyRequest)(nil),   // 0: tokens.TokensVerifyRequest
	(*TokensVerifyResponse)(nil),  // 1: tokens.TokensVerifyResponse
	(*timestamppb.Timestamp)(nil), // 2: google.protobuf.Timestamp
	(*TokensPayloadData)(nil),     // 3: tokens.TokensPayloadData
}
var file_rpc_verify_tokens_proto_depIdxs = []int32{
	2, // 0: tokens.TokensVerifyResponse.iat:type_name -> google.protobuf.Timestamp
	2, // 1: tokens.TokensVerifyResponse.expires:type_name -> google.protobuf.Timestamp
	3, // 2: tokens.TokensVerifyResponse.payload:type_name -> tokens.TokensPayloadData
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_rpc_verify_tokens_proto_init() }
func file_rpc_verify_tokens_proto_init() {
	if File_rpc_verify_tokens_proto != nil {
		return
	}
	file_payload_tokens_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_rpc_verify_tokens_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TokensVerifyRequest); i {
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
		file_rpc_verify_tokens_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TokensVerifyResponse); i {
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
			RawDescriptor: file_rpc_verify_tokens_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_rpc_verify_tokens_proto_goTypes,
		DependencyIndexes: file_rpc_verify_tokens_proto_depIdxs,
		MessageInfos:      file_rpc_verify_tokens_proto_msgTypes,
	}.Build()
	File_rpc_verify_tokens_proto = out.File
	file_rpc_verify_tokens_proto_rawDesc = nil
	file_rpc_verify_tokens_proto_goTypes = nil
	file_rpc_verify_tokens_proto_depIdxs = nil
}