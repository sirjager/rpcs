// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.29.0
// 	protoc        v3.21.12
// source: rpc-forgot.authentication.proto

package authentication

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

type AuthenticationForgotPasswordRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Email string `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
}

func (x *AuthenticationForgotPasswordRequest) Reset() {
	*x = AuthenticationForgotPasswordRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_forgot_authentication_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthenticationForgotPasswordRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthenticationForgotPasswordRequest) ProtoMessage() {}

func (x *AuthenticationForgotPasswordRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_forgot_authentication_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthenticationForgotPasswordRequest.ProtoReflect.Descriptor instead.
func (*AuthenticationForgotPasswordRequest) Descriptor() ([]byte, []int) {
	return file_rpc_forgot_authentication_proto_rawDescGZIP(), []int{0}
}

func (x *AuthenticationForgotPasswordRequest) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

type AuthenticationForgotPasswordResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *AuthenticationForgotPasswordResponse) Reset() {
	*x = AuthenticationForgotPasswordResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_forgot_authentication_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthenticationForgotPasswordResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthenticationForgotPasswordResponse) ProtoMessage() {}

func (x *AuthenticationForgotPasswordResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_forgot_authentication_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthenticationForgotPasswordResponse.ProtoReflect.Descriptor instead.
func (*AuthenticationForgotPasswordResponse) Descriptor() ([]byte, []int) {
	return file_rpc_forgot_authentication_proto_rawDescGZIP(), []int{1}
}

func (x *AuthenticationForgotPasswordResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type AuthenticationResetPasswordRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code             string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Email            string `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	NewPassword      string `protobuf:"bytes,3,opt,name=new_password,json=newPassword,proto3" json:"new_password,omitempty"`
	LogoutEverywhere bool   `protobuf:"varint,4,opt,name=logout_everywhere,json=logoutEverywhere,proto3" json:"logout_everywhere,omitempty"`
}

func (x *AuthenticationResetPasswordRequest) Reset() {
	*x = AuthenticationResetPasswordRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_forgot_authentication_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthenticationResetPasswordRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthenticationResetPasswordRequest) ProtoMessage() {}

func (x *AuthenticationResetPasswordRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_forgot_authentication_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthenticationResetPasswordRequest.ProtoReflect.Descriptor instead.
func (*AuthenticationResetPasswordRequest) Descriptor() ([]byte, []int) {
	return file_rpc_forgot_authentication_proto_rawDescGZIP(), []int{2}
}

func (x *AuthenticationResetPasswordRequest) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *AuthenticationResetPasswordRequest) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *AuthenticationResetPasswordRequest) GetNewPassword() string {
	if x != nil {
		return x.NewPassword
	}
	return ""
}

func (x *AuthenticationResetPasswordRequest) GetLogoutEverywhere() bool {
	if x != nil {
		return x.LogoutEverywhere
	}
	return false
}

type AuthenticationResetPasswordResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *AuthenticationResetPasswordResponse) Reset() {
	*x = AuthenticationResetPasswordResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_forgot_authentication_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AuthenticationResetPasswordResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AuthenticationResetPasswordResponse) ProtoMessage() {}

func (x *AuthenticationResetPasswordResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_forgot_authentication_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AuthenticationResetPasswordResponse.ProtoReflect.Descriptor instead.
func (*AuthenticationResetPasswordResponse) Descriptor() ([]byte, []int) {
	return file_rpc_forgot_authentication_proto_rawDescGZIP(), []int{3}
}

func (x *AuthenticationResetPasswordResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File_rpc_forgot_authentication_proto protoreflect.FileDescriptor

var file_rpc_forgot_authentication_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x72, 0x70, 0x63, 0x2d, 0x66, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x2e, 0x61, 0x75, 0x74,
	0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0e, 0x61, 0x75, 0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x22, 0x3b, 0x0a, 0x23, 0x41, 0x75, 0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69,
	0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x22, 0x40,
	0x0a, 0x24, 0x41, 0x75, 0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x22, 0x9e, 0x01, 0x0a, 0x22, 0x41, 0x75, 0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65,
	0x6d, 0x61, 0x69, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69,
	0x6c, 0x12, 0x21, 0x0a, 0x0c, 0x6e, 0x65, 0x77, 0x5f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6e, 0x65, 0x77, 0x50, 0x61, 0x73, 0x73,
	0x77, 0x6f, 0x72, 0x64, 0x12, 0x2b, 0x0a, 0x11, 0x6c, 0x6f, 0x67, 0x6f, 0x75, 0x74, 0x5f, 0x65,
	0x76, 0x65, 0x72, 0x79, 0x77, 0x68, 0x65, 0x72, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x10, 0x6c, 0x6f, 0x67, 0x6f, 0x75, 0x74, 0x45, 0x76, 0x65, 0x72, 0x79, 0x77, 0x68, 0x65, 0x72,
	0x65, 0x22, 0x3f, 0x0a, 0x23, 0x41, 0x75, 0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x42, 0x29, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x73, 0x69, 0x72, 0x6a, 0x61, 0x67, 0x65, 0x72, 0x2f, 0x72, 0x70, 0x63, 0x73, 0x2f, 0x61,
	0x75, 0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rpc_forgot_authentication_proto_rawDescOnce sync.Once
	file_rpc_forgot_authentication_proto_rawDescData = file_rpc_forgot_authentication_proto_rawDesc
)

func file_rpc_forgot_authentication_proto_rawDescGZIP() []byte {
	file_rpc_forgot_authentication_proto_rawDescOnce.Do(func() {
		file_rpc_forgot_authentication_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_forgot_authentication_proto_rawDescData)
	})
	return file_rpc_forgot_authentication_proto_rawDescData
}

var file_rpc_forgot_authentication_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_rpc_forgot_authentication_proto_goTypes = []interface{}{
	(*AuthenticationForgotPasswordRequest)(nil),  // 0: authentication.AuthenticationForgotPasswordRequest
	(*AuthenticationForgotPasswordResponse)(nil), // 1: authentication.AuthenticationForgotPasswordResponse
	(*AuthenticationResetPasswordRequest)(nil),   // 2: authentication.AuthenticationResetPasswordRequest
	(*AuthenticationResetPasswordResponse)(nil),  // 3: authentication.AuthenticationResetPasswordResponse
}
var file_rpc_forgot_authentication_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_rpc_forgot_authentication_proto_init() }
func file_rpc_forgot_authentication_proto_init() {
	if File_rpc_forgot_authentication_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_rpc_forgot_authentication_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthenticationForgotPasswordRequest); i {
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
		file_rpc_forgot_authentication_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthenticationForgotPasswordResponse); i {
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
		file_rpc_forgot_authentication_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthenticationResetPasswordRequest); i {
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
		file_rpc_forgot_authentication_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AuthenticationResetPasswordResponse); i {
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
			RawDescriptor: file_rpc_forgot_authentication_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_rpc_forgot_authentication_proto_goTypes,
		DependencyIndexes: file_rpc_forgot_authentication_proto_depIdxs,
		MessageInfos:      file_rpc_forgot_authentication_proto_msgTypes,
	}.Build()
	File_rpc_forgot_authentication_proto = out.File
	file_rpc_forgot_authentication_proto_rawDesc = nil
	file_rpc_forgot_authentication_proto_goTypes = nil
	file_rpc_forgot_authentication_proto_depIdxs = nil
}
