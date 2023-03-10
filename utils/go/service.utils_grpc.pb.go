// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
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

// UtilsClient is the client API for Utils service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UtilsClient interface {
	// ------------------------------------------------------ System
	UtilsWelcome(ctx context.Context, in *UtilsWelcomeRequest, opts ...grpc.CallOption) (*UtilsWelcomeResponse, error)
	UtilsHealth(ctx context.Context, in *UtilsHealthRequest, opts ...grpc.CallOption) (*UtilsHealthResponse, error)
	// UserAgents
	UtilsUserAgents(ctx context.Context, in *UtilsUserAgentsRequest, opts ...grpc.CallOption) (*UtilsUserAgentsResponse, error)
	UtilsUserAgentsGroups(ctx context.Context, in *UtilsUserAgentsGroupsRequest, opts ...grpc.CallOption) (*UtilsUserAgentsGroupsResponse, error)
	UtilsUserAgentsGroupNames(ctx context.Context, in *UtilsUserAgentsGroupNamesRequest, opts ...grpc.CallOption) (*UtilsUserAgentsGroupNamesResponse, error)
}

type utilsClient struct {
	cc grpc.ClientConnInterface
}

func NewUtilsClient(cc grpc.ClientConnInterface) UtilsClient {
	return &utilsClient{cc}
}

func (c *utilsClient) UtilsWelcome(ctx context.Context, in *UtilsWelcomeRequest, opts ...grpc.CallOption) (*UtilsWelcomeResponse, error) {
	out := new(UtilsWelcomeResponse)
	err := c.cc.Invoke(ctx, "/utils.Utils/UtilsWelcome", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *utilsClient) UtilsHealth(ctx context.Context, in *UtilsHealthRequest, opts ...grpc.CallOption) (*UtilsHealthResponse, error) {
	out := new(UtilsHealthResponse)
	err := c.cc.Invoke(ctx, "/utils.Utils/UtilsHealth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *utilsClient) UtilsUserAgents(ctx context.Context, in *UtilsUserAgentsRequest, opts ...grpc.CallOption) (*UtilsUserAgentsResponse, error) {
	out := new(UtilsUserAgentsResponse)
	err := c.cc.Invoke(ctx, "/utils.Utils/UtilsUserAgents", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *utilsClient) UtilsUserAgentsGroups(ctx context.Context, in *UtilsUserAgentsGroupsRequest, opts ...grpc.CallOption) (*UtilsUserAgentsGroupsResponse, error) {
	out := new(UtilsUserAgentsGroupsResponse)
	err := c.cc.Invoke(ctx, "/utils.Utils/UtilsUserAgentsGroups", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *utilsClient) UtilsUserAgentsGroupNames(ctx context.Context, in *UtilsUserAgentsGroupNamesRequest, opts ...grpc.CallOption) (*UtilsUserAgentsGroupNamesResponse, error) {
	out := new(UtilsUserAgentsGroupNamesResponse)
	err := c.cc.Invoke(ctx, "/utils.Utils/UtilsUserAgentsGroupNames", in, out, opts...)
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
	UtilsUserAgentsGroups(context.Context, *UtilsUserAgentsGroupsRequest) (*UtilsUserAgentsGroupsResponse, error)
	UtilsUserAgentsGroupNames(context.Context, *UtilsUserAgentsGroupNamesRequest) (*UtilsUserAgentsGroupNamesResponse, error)
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
func (UnimplementedUtilsServer) UtilsUserAgentsGroups(context.Context, *UtilsUserAgentsGroupsRequest) (*UtilsUserAgentsGroupsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UtilsUserAgentsGroups not implemented")
}
func (UnimplementedUtilsServer) UtilsUserAgentsGroupNames(context.Context, *UtilsUserAgentsGroupNamesRequest) (*UtilsUserAgentsGroupNamesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UtilsUserAgentsGroupNames not implemented")
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
		FullMethod: "/utils.Utils/UtilsWelcome",
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
		FullMethod: "/utils.Utils/UtilsHealth",
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
		FullMethod: "/utils.Utils/UtilsUserAgents",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UtilsServer).UtilsUserAgents(ctx, req.(*UtilsUserAgentsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Utils_UtilsUserAgentsGroups_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UtilsUserAgentsGroupsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UtilsServer).UtilsUserAgentsGroups(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/utils.Utils/UtilsUserAgentsGroups",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UtilsServer).UtilsUserAgentsGroups(ctx, req.(*UtilsUserAgentsGroupsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Utils_UtilsUserAgentsGroupNames_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UtilsUserAgentsGroupNamesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UtilsServer).UtilsUserAgentsGroupNames(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/utils.Utils/UtilsUserAgentsGroupNames",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UtilsServer).UtilsUserAgentsGroupNames(ctx, req.(*UtilsUserAgentsGroupNamesRequest))
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
			MethodName: "UtilsUserAgentsGroups",
			Handler:    _Utils_UtilsUserAgentsGroups_Handler,
		},
		{
			MethodName: "UtilsUserAgentsGroupNames",
			Handler:    _Utils_UtilsUserAgentsGroupNames_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service.utils.proto",
}