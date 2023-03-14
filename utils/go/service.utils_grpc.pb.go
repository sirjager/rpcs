// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: service.utils.proto

package utils

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
	Utils_UtilsWelcome_FullMethodName             = "/utils.Utils/UtilsWelcome"
	Utils_UtilsHealth_FullMethodName              = "/utils.Utils/UtilsHealth"
	Utils_UtilsUserAgents_FullMethodName          = "/utils.Utils/UtilsUserAgents"
	Utils_UtilsUserAgentsPool_FullMethodName      = "/utils.Utils/UtilsUserAgentsPool"
	Utils_UtilsUserAgentsPoolNames_FullMethodName = "/utils.Utils/UtilsUserAgentsPoolNames"
)

// UtilsClient is the client API for Utils service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UtilsClient interface {
	// ------------------------------------------------------ System
	UtilsWelcome(ctx context.Context, in *UtilsWelcomeRequest, opts ...grpc.CallOption) (*UtilsWelcomeResponse, error)
	UtilsHealth(ctx context.Context, in *UtilsHealthRequest, opts ...grpc.CallOption) (*UtilsHealthResponse, error)
	// UserAgents
	UtilsUserAgents(ctx context.Context, in *UtilsUserAgentsRequest, opts ...grpc.CallOption) (*UtilsUserAgentsResponse, error)
	UtilsUserAgentsPool(ctx context.Context, in *UtilsUserAgentsPoolRequest, opts ...grpc.CallOption) (*UtilsUserAgentsPoolResponse, error)
	UtilsUserAgentsPoolNames(ctx context.Context, in *UtilsUserAgentsPoolNamesRequest, opts ...grpc.CallOption) (*UtilsUserAgentsPoolNamesResponse, error)
}

type utilsClient struct {
	cc grpc.ClientConnInterface
}

func NewUtilsClient(cc grpc.ClientConnInterface) UtilsClient {
	return &utilsClient{cc}
}

func (c *utilsClient) UtilsWelcome(ctx context.Context, in *UtilsWelcomeRequest, opts ...grpc.CallOption) (*UtilsWelcomeResponse, error) {
	out := new(UtilsWelcomeResponse)
	err := c.cc.Invoke(ctx, Utils_UtilsWelcome_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *utilsClient) UtilsHealth(ctx context.Context, in *UtilsHealthRequest, opts ...grpc.CallOption) (*UtilsHealthResponse, error) {
	out := new(UtilsHealthResponse)
	err := c.cc.Invoke(ctx, Utils_UtilsHealth_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *utilsClient) UtilsUserAgents(ctx context.Context, in *UtilsUserAgentsRequest, opts ...grpc.CallOption) (*UtilsUserAgentsResponse, error) {
	out := new(UtilsUserAgentsResponse)
	err := c.cc.Invoke(ctx, Utils_UtilsUserAgents_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *utilsClient) UtilsUserAgentsPool(ctx context.Context, in *UtilsUserAgentsPoolRequest, opts ...grpc.CallOption) (*UtilsUserAgentsPoolResponse, error) {
	out := new(UtilsUserAgentsPoolResponse)
	err := c.cc.Invoke(ctx, Utils_UtilsUserAgentsPool_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *utilsClient) UtilsUserAgentsPoolNames(ctx context.Context, in *UtilsUserAgentsPoolNamesRequest, opts ...grpc.CallOption) (*UtilsUserAgentsPoolNamesResponse, error) {
	out := new(UtilsUserAgentsPoolNamesResponse)
	err := c.cc.Invoke(ctx, Utils_UtilsUserAgentsPoolNames_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UtilsServer is the server API for Utils service.
// All implementations must embed UnimplementedUtilsServer
// for forward compatibility
type UtilsServer interface {
	// ------------------------------------------------------ System
	UtilsWelcome(context.Context, *UtilsWelcomeRequest) (*UtilsWelcomeResponse, error)
	UtilsHealth(context.Context, *UtilsHealthRequest) (*UtilsHealthResponse, error)
	// UserAgents
	UtilsUserAgents(context.Context, *UtilsUserAgentsRequest) (*UtilsUserAgentsResponse, error)
	UtilsUserAgentsPool(context.Context, *UtilsUserAgentsPoolRequest) (*UtilsUserAgentsPoolResponse, error)
	UtilsUserAgentsPoolNames(context.Context, *UtilsUserAgentsPoolNamesRequest) (*UtilsUserAgentsPoolNamesResponse, error)
	mustEmbedUnimplementedUtilsServer()
}

// UnimplementedUtilsServer must be embedded to have forward compatible implementations.
type UnimplementedUtilsServer struct {
}

func (UnimplementedUtilsServer) UtilsWelcome(context.Context, *UtilsWelcomeRequest) (*UtilsWelcomeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UtilsWelcome not implemented")
}
func (UnimplementedUtilsServer) UtilsHealth(context.Context, *UtilsHealthRequest) (*UtilsHealthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UtilsHealth not implemented")
}
func (UnimplementedUtilsServer) UtilsUserAgents(context.Context, *UtilsUserAgentsRequest) (*UtilsUserAgentsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UtilsUserAgents not implemented")
}
func (UnimplementedUtilsServer) UtilsUserAgentsPool(context.Context, *UtilsUserAgentsPoolRequest) (*UtilsUserAgentsPoolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UtilsUserAgentsPool not implemented")
}
func (UnimplementedUtilsServer) UtilsUserAgentsPoolNames(context.Context, *UtilsUserAgentsPoolNamesRequest) (*UtilsUserAgentsPoolNamesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UtilsUserAgentsPoolNames not implemented")
}
func (UnimplementedUtilsServer) mustEmbedUnimplementedUtilsServer() {}

// UnsafeUtilsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UtilsServer will
// result in compilation errors.
type UnsafeUtilsServer interface {
	mustEmbedUnimplementedUtilsServer()
}

func RegisterUtilsServer(s grpc.ServiceRegistrar, srv UtilsServer) {
	s.RegisterService(&Utils_ServiceDesc, srv)
}

func _Utils_UtilsWelcome_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UtilsWelcomeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UtilsServer).UtilsWelcome(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Utils_UtilsWelcome_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UtilsServer).UtilsWelcome(ctx, req.(*UtilsWelcomeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Utils_UtilsHealth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UtilsHealthRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UtilsServer).UtilsHealth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Utils_UtilsHealth_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UtilsServer).UtilsHealth(ctx, req.(*UtilsHealthRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Utils_UtilsUserAgents_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UtilsUserAgentsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UtilsServer).UtilsUserAgents(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Utils_UtilsUserAgents_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UtilsServer).UtilsUserAgents(ctx, req.(*UtilsUserAgentsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Utils_UtilsUserAgentsPool_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UtilsUserAgentsPoolRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UtilsServer).UtilsUserAgentsPool(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Utils_UtilsUserAgentsPool_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UtilsServer).UtilsUserAgentsPool(ctx, req.(*UtilsUserAgentsPoolRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Utils_UtilsUserAgentsPoolNames_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UtilsUserAgentsPoolNamesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UtilsServer).UtilsUserAgentsPoolNames(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Utils_UtilsUserAgentsPoolNames_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UtilsServer).UtilsUserAgentsPoolNames(ctx, req.(*UtilsUserAgentsPoolNamesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Utils_ServiceDesc is the grpc.ServiceDesc for Utils service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Utils_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "utils.Utils",
	HandlerType: (*UtilsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UtilsWelcome",
			Handler:    _Utils_UtilsWelcome_Handler,
		},
		{
			MethodName: "UtilsHealth",
			Handler:    _Utils_UtilsHealth_Handler,
		},
		{
			MethodName: "UtilsUserAgents",
			Handler:    _Utils_UtilsUserAgents_Handler,
		},
		{
			MethodName: "UtilsUserAgentsPool",
			Handler:    _Utils_UtilsUserAgentsPool_Handler,
		},
		{
			MethodName: "UtilsUserAgentsPoolNames",
			Handler:    _Utils_UtilsUserAgentsPoolNames_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service.utils.proto",
}
