// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: service.proto

package trueauth

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	TrueAuth_Welcome_FullMethodName  = "/trueauth.TrueAuth/Welcome"
	TrueAuth_Health_FullMethodName   = "/trueauth.TrueAuth/Health"
	TrueAuth_Register_FullMethodName = "/trueauth.TrueAuth/Register"
	TrueAuth_Login_FullMethodName    = "/trueauth.TrueAuth/Login"
	TrueAuth_Verify_FullMethodName   = "/trueauth.TrueAuth/Verify"
	TrueAuth_Logout_FullMethodName   = "/trueauth.TrueAuth/Logout"
	TrueAuth_Refresh_FullMethodName  = "/trueauth.TrueAuth/Refresh"
	TrueAuth_Recovery_FullMethodName = "/trueauth.TrueAuth/Recovery"
	TrueAuth_Delete_FullMethodName   = "/trueauth.TrueAuth/Delete"
	TrueAuth_Update_FullMethodName   = "/trueauth.TrueAuth/Update"
	TrueAuth_AllowIP_FullMethodName  = "/trueauth.TrueAuth/AllowIP"
	TrueAuth_User_FullMethodName     = "/trueauth.TrueAuth/User"
)

// TrueAuthClient is the client API for TrueAuth service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TrueAuthClient interface {
	Welcome(ctx context.Context, in *WelcomeRequest, opts ...grpc.CallOption) (*WelcomeResponse, error)
	Health(ctx context.Context, in *HealthRequest, opts ...grpc.CallOption) (*HealthResponse, error)
	Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error)
	Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error)
	Verify(ctx context.Context, in *VerifyRequest, opts ...grpc.CallOption) (*VerifyResponse, error)
	Logout(ctx context.Context, in *LogoutRequest, opts ...grpc.CallOption) (*LogoutResponse, error)
	Refresh(ctx context.Context, in *RefreshRequest, opts ...grpc.CallOption) (*RefreshResponse, error)
	Recovery(ctx context.Context, in *RecoveryRequest, opts ...grpc.CallOption) (*RecoveryResponse, error)
	Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error)
	Update(ctx context.Context, in *UpdateRequest, opts ...grpc.CallOption) (*UpdateResponse, error)
	AllowIP(ctx context.Context, in *AllowIPRequest, opts ...grpc.CallOption) (*AllowIPResponse, error)
	User(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
}

type trueAuthClient struct {
	cc grpc.ClientConnInterface
}

func NewTrueAuthClient(cc grpc.ClientConnInterface) TrueAuthClient {
	return &trueAuthClient{cc}
}

func (c *trueAuthClient) Welcome(ctx context.Context, in *WelcomeRequest, opts ...grpc.CallOption) (*WelcomeResponse, error) {
	out := new(WelcomeResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Welcome_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Health(ctx context.Context, in *HealthRequest, opts ...grpc.CallOption) (*HealthResponse, error) {
	out := new(HealthResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Health_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error) {
	out := new(RegisterResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Register_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error) {
	out := new(LoginResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Login_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Verify(ctx context.Context, in *VerifyRequest, opts ...grpc.CallOption) (*VerifyResponse, error) {
	out := new(VerifyResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Verify_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Logout(ctx context.Context, in *LogoutRequest, opts ...grpc.CallOption) (*LogoutResponse, error) {
	out := new(LogoutResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Logout_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Refresh(ctx context.Context, in *RefreshRequest, opts ...grpc.CallOption) (*RefreshResponse, error) {
	out := new(RefreshResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Refresh_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Recovery(ctx context.Context, in *RecoveryRequest, opts ...grpc.CallOption) (*RecoveryResponse, error) {
	out := new(RecoveryResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Recovery_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error) {
	out := new(DeleteResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Delete_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) Update(ctx context.Context, in *UpdateRequest, opts ...grpc.CallOption) (*UpdateResponse, error) {
	out := new(UpdateResponse)
	err := c.cc.Invoke(ctx, TrueAuth_Update_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) AllowIP(ctx context.Context, in *AllowIPRequest, opts ...grpc.CallOption) (*AllowIPResponse, error) {
	out := new(AllowIPResponse)
	err := c.cc.Invoke(ctx, TrueAuth_AllowIP_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *trueAuthClient) User(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, TrueAuth_User_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TrueAuthServer is the server API for TrueAuth service.
// All implementations must embed UnimplementedTrueAuthServer
// for forward compatibility
type TrueAuthServer interface {
	Welcome(context.Context, *WelcomeRequest) (*WelcomeResponse, error)
	Health(context.Context, *HealthRequest) (*HealthResponse, error)
	Register(context.Context, *RegisterRequest) (*RegisterResponse, error)
	Login(context.Context, *LoginRequest) (*LoginResponse, error)
	Verify(context.Context, *VerifyRequest) (*VerifyResponse, error)
	Logout(context.Context, *LogoutRequest) (*LogoutResponse, error)
	Refresh(context.Context, *RefreshRequest) (*RefreshResponse, error)
	Recovery(context.Context, *RecoveryRequest) (*RecoveryResponse, error)
	Delete(context.Context, *DeleteRequest) (*DeleteResponse, error)
	Update(context.Context, *UpdateRequest) (*UpdateResponse, error)
	AllowIP(context.Context, *AllowIPRequest) (*AllowIPResponse, error)
	User(context.Context, *UserRequest) (*UserResponse, error)
	mustEmbedUnimplementedTrueAuthServer()
}

// UnimplementedTrueAuthServer must be embedded to have forward compatible implementations.
type UnimplementedTrueAuthServer struct {
}

func (UnimplementedTrueAuthServer) Welcome(context.Context, *WelcomeRequest) (*WelcomeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Welcome not implemented")
}
func (UnimplementedTrueAuthServer) Health(context.Context, *HealthRequest) (*HealthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Health not implemented")
}
func (UnimplementedTrueAuthServer) Register(context.Context, *RegisterRequest) (*RegisterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Register not implemented")
}
func (UnimplementedTrueAuthServer) Login(context.Context, *LoginRequest) (*LoginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Login not implemented")
}
func (UnimplementedTrueAuthServer) Verify(context.Context, *VerifyRequest) (*VerifyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Verify not implemented")
}
func (UnimplementedTrueAuthServer) Logout(context.Context, *LogoutRequest) (*LogoutResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Logout not implemented")
}
func (UnimplementedTrueAuthServer) Refresh(context.Context, *RefreshRequest) (*RefreshResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Refresh not implemented")
}
func (UnimplementedTrueAuthServer) Recovery(context.Context, *RecoveryRequest) (*RecoveryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Recovery not implemented")
}
func (UnimplementedTrueAuthServer) Delete(context.Context, *DeleteRequest) (*DeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedTrueAuthServer) Update(context.Context, *UpdateRequest) (*UpdateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedTrueAuthServer) AllowIP(context.Context, *AllowIPRequest) (*AllowIPResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AllowIP not implemented")
}
func (UnimplementedTrueAuthServer) User(context.Context, *UserRequest) (*UserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method User not implemented")
}
func (UnimplementedTrueAuthServer) mustEmbedUnimplementedTrueAuthServer() {}

// UnsafeTrueAuthServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TrueAuthServer will
// result in compilation errors.
type UnsafeTrueAuthServer interface {
	mustEmbedUnimplementedTrueAuthServer()
}

func RegisterTrueAuthServer(s grpc.ServiceRegistrar, srv TrueAuthServer) {
	s.RegisterService(&TrueAuth_ServiceDesc, srv)
}

func _TrueAuth_Welcome_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WelcomeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Welcome(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Welcome_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Welcome(ctx, req.(*WelcomeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Health_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HealthRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Health(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Health_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Health(ctx, req.(*HealthRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Register_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Register(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Register_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Register(ctx, req.(*RegisterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Login_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Login(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Login_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Login(ctx, req.(*LoginRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Verify_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VerifyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Verify(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Verify_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Verify(ctx, req.(*VerifyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Logout_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LogoutRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Logout(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Logout_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Logout(ctx, req.(*LogoutRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Refresh_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefreshRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Refresh(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Refresh_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Refresh(ctx, req.(*RefreshRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Recovery_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecoveryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Recovery(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Recovery_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Recovery(ctx, req.(*RecoveryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Delete_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Delete(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_Update_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).Update(ctx, req.(*UpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_AllowIP_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AllowIPRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).AllowIP(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_AllowIP_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).AllowIP(ctx, req.(*AllowIPRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TrueAuth_User_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TrueAuthServer).User(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: TrueAuth_User_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TrueAuthServer).User(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// TrueAuth_ServiceDesc is the grpc.ServiceDesc for TrueAuth service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TrueAuth_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "trueauth.TrueAuth",
	HandlerType: (*TrueAuthServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Welcome",
			Handler:    _TrueAuth_Welcome_Handler,
		},
		{
			MethodName: "Health",
			Handler:    _TrueAuth_Health_Handler,
		},
		{
			MethodName: "Register",
			Handler:    _TrueAuth_Register_Handler,
		},
		{
			MethodName: "Login",
			Handler:    _TrueAuth_Login_Handler,
		},
		{
			MethodName: "Verify",
			Handler:    _TrueAuth_Verify_Handler,
		},
		{
			MethodName: "Logout",
			Handler:    _TrueAuth_Logout_Handler,
		},
		{
			MethodName: "Refresh",
			Handler:    _TrueAuth_Refresh_Handler,
		},
		{
			MethodName: "Recovery",
			Handler:    _TrueAuth_Recovery_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _TrueAuth_Delete_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _TrueAuth_Update_Handler,
		},
		{
			MethodName: "AllowIP",
			Handler:    _TrueAuth_AllowIP_Handler,
		},
		{
			MethodName: "User",
			Handler:    _TrueAuth_User_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service.proto",
}
