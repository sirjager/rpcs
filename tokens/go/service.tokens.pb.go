// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: service.tokens.proto

package tokens

import (
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/options"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_service_tokens_proto protoreflect.FileDescriptor

var file_service_tokens_proto_rawDesc = []byte{
	0x0a, 0x14, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x1a, 0x1c,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x63, 0x2d, 0x67, 0x65, 0x6e, 0x2d, 0x6f, 0x70, 0x65, 0x6e, 0x61, 0x70, 0x69,
	0x76, 0x32, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x72, 0x70,
	0x63, 0x2d, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x72, 0x70, 0x63, 0x2d, 0x77, 0x65, 0x6c, 0x63, 0x6f,
	0x6d, 0x65, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x17, 0x72, 0x70, 0x63, 0x2d, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x2e, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x72, 0x70, 0x63, 0x2d, 0x76, 0x65,
	0x72, 0x69, 0x66, 0x79, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x32, 0xfa, 0x04, 0x0a, 0x06, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x12, 0x8d, 0x01, 0x0a,
	0x0d, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x57, 0x65, 0x6c, 0x63, 0x6f, 0x6d, 0x65, 0x12, 0x1c,
	0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x57, 0x65,
	0x6c, 0x63, 0x6f, 0x6d, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x57, 0x65, 0x6c, 0x63,
	0x6f, 0x6d, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x3f, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x03, 0x12, 0x01, 0x2f, 0x92, 0x41, 0x33, 0x0a, 0x06, 0x53, 0x79, 0x73, 0x74, 0x65,
	0x6d, 0x12, 0x0f, 0x57, 0x65, 0x6c, 0x63, 0x6f, 0x6d, 0x65, 0x20, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x1a, 0x18, 0x72, 0x65, 0x74, 0x75, 0x72, 0x73, 0x20, 0x61, 0x20, 0x77, 0x65, 0x6c,
	0x63, 0x6f, 0x6d, 0x65, 0x20, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0xa6, 0x01, 0x0a,
	0x0c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x12, 0x1b, 0x2e,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x48, 0x65, 0x61,
	0x6c, 0x74, 0x68, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x5b, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0c,
	0x12, 0x0a, 0x2f, 0x76, 0x31, 0x2f, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x92, 0x41, 0x46, 0x0a,
	0x06, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x12, 0x0a, 0x41, 0x70, 0x69, 0x20, 0x48, 0x65, 0x61,
	0x6c, 0x74, 0x68, 0x1a, 0x30, 0x75, 0x73, 0x65, 0x20, 0x74, 0x68, 0x69, 0x73, 0x20, 0x72, 0x6f,
	0x75, 0x74, 0x65, 0x20, 0x74, 0x6f, 0x20, 0x63, 0x68, 0x65, 0x63, 0x6b, 0x20, 0x69, 0x66, 0x20,
	0x61, 0x70, 0x69, 0x20, 0x69, 0x73, 0x20, 0x77, 0x6f, 0x72, 0x6b, 0x69, 0x6e, 0x67, 0x20, 0x6f,
	0x72, 0x20, 0x6e, 0x6f, 0x74, 0x12, 0x99, 0x01, 0x0a, 0x0c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x1b, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x73, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x4e, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0f, 0x22, 0x0a, 0x2f, 0x76, 0x31, 0x2f, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x3a, 0x01, 0x2a, 0x92, 0x41, 0x36, 0x0a, 0x06, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x73, 0x12, 0x0c, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x20, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x1a, 0x1e, 0x75, 0x73, 0x65, 0x20, 0x74, 0x68, 0x69, 0x73, 0x20, 0x72, 0x6f, 0x75, 0x74,
	0x65, 0x20, 0x74, 0x6f, 0x20, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x20, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x12, 0x9a, 0x01, 0x0a, 0x0c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x56, 0x65, 0x72, 0x69,
	0x66, 0x79, 0x12, 0x1b, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x73, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1c, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x56,
	0x65, 0x72, 0x69, 0x66, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x4f, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x0f, 0x22, 0x0a, 0x2f, 0x76, 0x31, 0x2f, 0x76, 0x65, 0x72, 0x69, 0x66,
	0x79, 0x3a, 0x01, 0x2a, 0x92, 0x41, 0x37, 0x0a, 0x06, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x12,
	0x0c, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x20, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x1a, 0x1f, 0x75,
	0x73, 0x65, 0x20, 0x74, 0x68, 0x69, 0x73, 0x20, 0x72, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x20, 0x74,
	0x6f, 0x20, 0x76, 0x65, 0x72, 0x69, 0x66, 0x79, 0x20, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x42, 0x63,
	0x5a, 0x1f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x69, 0x72,
	0x6a, 0x61, 0x67, 0x65, 0x72, 0x2f, 0x72, 0x70, 0x63, 0x73, 0x2f, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x73, 0x92, 0x41, 0x3f, 0x12, 0x3d, 0x0a, 0x0a, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x20, 0x41,
	0x70, 0x69, 0x22, 0x2a, 0x0a, 0x0b, 0x41, 0x6e, 0x6b, 0x75, 0x72, 0x20, 0x4b, 0x75, 0x6d, 0x61,
	0x72, 0x12, 0x1b, 0x68, 0x74, 0x74, 0x70, 0x73, 0x3a, 0x2f, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x69, 0x72, 0x6a, 0x61, 0x67, 0x65, 0x72, 0x32, 0x03,
	0x30, 0x2e, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_service_tokens_proto_goTypes = []interface{}{
	(*TokensWelcomeRequest)(nil),  // 0: tokens.TokensWelcomeRequest
	(*TokensHealthRequest)(nil),   // 1: tokens.TokensHealthRequest
	(*TokensCreateRequest)(nil),   // 2: tokens.TokensCreateRequest
	(*TokensVerifyRequest)(nil),   // 3: tokens.TokensVerifyRequest
	(*TokensWelcomeResponse)(nil), // 4: tokens.TokensWelcomeResponse
	(*TokensHealthResponse)(nil),  // 5: tokens.TokensHealthResponse
	(*TokensCreateResponse)(nil),  // 6: tokens.TokensCreateResponse
	(*TokensVerifyResponse)(nil),  // 7: tokens.TokensVerifyResponse
}
var file_service_tokens_proto_depIdxs = []int32{
	0, // 0: tokens.Tokens.TokensWelcome:input_type -> tokens.TokensWelcomeRequest
	1, // 1: tokens.Tokens.TokensHealth:input_type -> tokens.TokensHealthRequest
	2, // 2: tokens.Tokens.TokensCreate:input_type -> tokens.TokensCreateRequest
	3, // 3: tokens.Tokens.TokensVerify:input_type -> tokens.TokensVerifyRequest
	4, // 4: tokens.Tokens.TokensWelcome:output_type -> tokens.TokensWelcomeResponse
	5, // 5: tokens.Tokens.TokensHealth:output_type -> tokens.TokensHealthResponse
	6, // 6: tokens.Tokens.TokensCreate:output_type -> tokens.TokensCreateResponse
	7, // 7: tokens.Tokens.TokensVerify:output_type -> tokens.TokensVerifyResponse
	4, // [4:8] is the sub-list for method output_type
	0, // [0:4] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_service_tokens_proto_init() }
func file_service_tokens_proto_init() {
	if File_service_tokens_proto != nil {
		return
	}
	file_rpc_health_tokens_proto_init()
	file_rpc_welcome_tokens_proto_init()
	file_rpc_create_tokens_proto_init()
	file_rpc_verify_tokens_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_service_tokens_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_service_tokens_proto_goTypes,
		DependencyIndexes: file_service_tokens_proto_depIdxs,
	}.Build()
	File_service_tokens_proto = out.File
	file_service_tokens_proto_rawDesc = nil
	file_service_tokens_proto_goTypes = nil
	file_service_tokens_proto_depIdxs = nil
}
