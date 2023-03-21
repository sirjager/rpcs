// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: service.whisper_nation.proto

package whisper_nation

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
	WhisperNation_WhisperNationWelcome_FullMethodName          = "/whisper_nation.WhisperNation/WhisperNationWelcome"
	WhisperNation_WhisperNationHealth_FullMethodName           = "/whisper_nation.WhisperNation/WhisperNationHealth"
	WhisperNation_WhisperNationListGroups_FullMethodName       = "/whisper_nation.WhisperNation/WhisperNationListGroups"
	WhisperNation_WhisperNationCreateGroup_FullMethodName      = "/whisper_nation.WhisperNation/WhisperNationCreateGroup"
	WhisperNation_WhisperNationJoinGroup_FullMethodName        = "/whisper_nation.WhisperNation/WhisperNationJoinGroup"
	WhisperNation_WhisperNationListGroupMembers_FullMethodName = "/whisper_nation.WhisperNation/WhisperNationListGroupMembers"
)

// WhisperNationClient is the client API for WhisperNation service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type WhisperNationClient interface {
	WhisperNationWelcome(ctx context.Context, in *WhisperNationWelcomeRequest, opts ...grpc.CallOption) (*WhisperNationWelcomeResponse, error)
	WhisperNationHealth(ctx context.Context, in *WhisperNationHealthRequest, opts ...grpc.CallOption) (*WhisperNationHealthResponse, error)
	WhisperNationListGroups(ctx context.Context, in *WhisperNationListGroupsRequest, opts ...grpc.CallOption) (*WhisperNationListGroupsResponse, error)
	WhisperNationCreateGroup(ctx context.Context, in *WhisperNationCreateGroupRequest, opts ...grpc.CallOption) (*WhisperNationCreateGroupResponse, error)
	WhisperNationJoinGroup(ctx context.Context, in *WhisperNationJoinGroupRequest, opts ...grpc.CallOption) (*WhisperNationJoinGroupResponse, error)
	WhisperNationListGroupMembers(ctx context.Context, in *WhisperNationListGroupMembersRequest, opts ...grpc.CallOption) (*WhisperNationListGroupMembersResponse, error)
}

type whisperNationClient struct {
	cc grpc.ClientConnInterface
}

func NewWhisperNationClient(cc grpc.ClientConnInterface) WhisperNationClient {
	return &whisperNationClient{cc}
}

func (c *whisperNationClient) WhisperNationWelcome(ctx context.Context, in *WhisperNationWelcomeRequest, opts ...grpc.CallOption) (*WhisperNationWelcomeResponse, error) {
	out := new(WhisperNationWelcomeResponse)
	err := c.cc.Invoke(ctx, WhisperNation_WhisperNationWelcome_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *whisperNationClient) WhisperNationHealth(ctx context.Context, in *WhisperNationHealthRequest, opts ...grpc.CallOption) (*WhisperNationHealthResponse, error) {
	out := new(WhisperNationHealthResponse)
	err := c.cc.Invoke(ctx, WhisperNation_WhisperNationHealth_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *whisperNationClient) WhisperNationListGroups(ctx context.Context, in *WhisperNationListGroupsRequest, opts ...grpc.CallOption) (*WhisperNationListGroupsResponse, error) {
	out := new(WhisperNationListGroupsResponse)
	err := c.cc.Invoke(ctx, WhisperNation_WhisperNationListGroups_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *whisperNationClient) WhisperNationCreateGroup(ctx context.Context, in *WhisperNationCreateGroupRequest, opts ...grpc.CallOption) (*WhisperNationCreateGroupResponse, error) {
	out := new(WhisperNationCreateGroupResponse)
	err := c.cc.Invoke(ctx, WhisperNation_WhisperNationCreateGroup_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *whisperNationClient) WhisperNationJoinGroup(ctx context.Context, in *WhisperNationJoinGroupRequest, opts ...grpc.CallOption) (*WhisperNationJoinGroupResponse, error) {
	out := new(WhisperNationJoinGroupResponse)
	err := c.cc.Invoke(ctx, WhisperNation_WhisperNationJoinGroup_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *whisperNationClient) WhisperNationListGroupMembers(ctx context.Context, in *WhisperNationListGroupMembersRequest, opts ...grpc.CallOption) (*WhisperNationListGroupMembersResponse, error) {
	out := new(WhisperNationListGroupMembersResponse)
	err := c.cc.Invoke(ctx, WhisperNation_WhisperNationListGroupMembers_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// WhisperNationServer is the server API for WhisperNation service.
// All implementations must embed UnimplementedWhisperNationServer
// for forward compatibility
type WhisperNationServer interface {
	WhisperNationWelcome(context.Context, *WhisperNationWelcomeRequest) (*WhisperNationWelcomeResponse, error)
	WhisperNationHealth(context.Context, *WhisperNationHealthRequest) (*WhisperNationHealthResponse, error)
	WhisperNationListGroups(context.Context, *WhisperNationListGroupsRequest) (*WhisperNationListGroupsResponse, error)
	WhisperNationCreateGroup(context.Context, *WhisperNationCreateGroupRequest) (*WhisperNationCreateGroupResponse, error)
	WhisperNationJoinGroup(context.Context, *WhisperNationJoinGroupRequest) (*WhisperNationJoinGroupResponse, error)
	WhisperNationListGroupMembers(context.Context, *WhisperNationListGroupMembersRequest) (*WhisperNationListGroupMembersResponse, error)
	mustEmbedUnimplementedWhisperNationServer()
}

// UnimplementedWhisperNationServer must be embedded to have forward compatible implementations.
type UnimplementedWhisperNationServer struct {
}

func (UnimplementedWhisperNationServer) WhisperNationWelcome(context.Context, *WhisperNationWelcomeRequest) (*WhisperNationWelcomeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WhisperNationWelcome not implemented")
}
func (UnimplementedWhisperNationServer) WhisperNationHealth(context.Context, *WhisperNationHealthRequest) (*WhisperNationHealthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WhisperNationHealth not implemented")
}
func (UnimplementedWhisperNationServer) WhisperNationListGroups(context.Context, *WhisperNationListGroupsRequest) (*WhisperNationListGroupsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WhisperNationListGroups not implemented")
}
func (UnimplementedWhisperNationServer) WhisperNationCreateGroup(context.Context, *WhisperNationCreateGroupRequest) (*WhisperNationCreateGroupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WhisperNationCreateGroup not implemented")
}
func (UnimplementedWhisperNationServer) WhisperNationJoinGroup(context.Context, *WhisperNationJoinGroupRequest) (*WhisperNationJoinGroupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WhisperNationJoinGroup not implemented")
}
func (UnimplementedWhisperNationServer) WhisperNationListGroupMembers(context.Context, *WhisperNationListGroupMembersRequest) (*WhisperNationListGroupMembersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WhisperNationListGroupMembers not implemented")
}
func (UnimplementedWhisperNationServer) mustEmbedUnimplementedWhisperNationServer() {}

// UnsafeWhisperNationServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to WhisperNationServer will
// result in compilation errors.
type UnsafeWhisperNationServer interface {
	mustEmbedUnimplementedWhisperNationServer()
}

func RegisterWhisperNationServer(s grpc.ServiceRegistrar, srv WhisperNationServer) {
	s.RegisterService(&WhisperNation_ServiceDesc, srv)
}

func _WhisperNation_WhisperNationWelcome_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WhisperNationWelcomeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WhisperNationServer).WhisperNationWelcome(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: WhisperNation_WhisperNationWelcome_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WhisperNationServer).WhisperNationWelcome(ctx, req.(*WhisperNationWelcomeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WhisperNation_WhisperNationHealth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WhisperNationHealthRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WhisperNationServer).WhisperNationHealth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: WhisperNation_WhisperNationHealth_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WhisperNationServer).WhisperNationHealth(ctx, req.(*WhisperNationHealthRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WhisperNation_WhisperNationListGroups_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WhisperNationListGroupsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WhisperNationServer).WhisperNationListGroups(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: WhisperNation_WhisperNationListGroups_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WhisperNationServer).WhisperNationListGroups(ctx, req.(*WhisperNationListGroupsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WhisperNation_WhisperNationCreateGroup_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WhisperNationCreateGroupRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WhisperNationServer).WhisperNationCreateGroup(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: WhisperNation_WhisperNationCreateGroup_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WhisperNationServer).WhisperNationCreateGroup(ctx, req.(*WhisperNationCreateGroupRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WhisperNation_WhisperNationJoinGroup_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WhisperNationJoinGroupRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WhisperNationServer).WhisperNationJoinGroup(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: WhisperNation_WhisperNationJoinGroup_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WhisperNationServer).WhisperNationJoinGroup(ctx, req.(*WhisperNationJoinGroupRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WhisperNation_WhisperNationListGroupMembers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WhisperNationListGroupMembersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WhisperNationServer).WhisperNationListGroupMembers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: WhisperNation_WhisperNationListGroupMembers_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WhisperNationServer).WhisperNationListGroupMembers(ctx, req.(*WhisperNationListGroupMembersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// WhisperNation_ServiceDesc is the grpc.ServiceDesc for WhisperNation service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var WhisperNation_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "whisper_nation.WhisperNation",
	HandlerType: (*WhisperNationServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "WhisperNationWelcome",
			Handler:    _WhisperNation_WhisperNationWelcome_Handler,
		},
		{
			MethodName: "WhisperNationHealth",
			Handler:    _WhisperNation_WhisperNationHealth_Handler,
		},
		{
			MethodName: "WhisperNationListGroups",
			Handler:    _WhisperNation_WhisperNationListGroups_Handler,
		},
		{
			MethodName: "WhisperNationCreateGroup",
			Handler:    _WhisperNation_WhisperNationCreateGroup_Handler,
		},
		{
			MethodName: "WhisperNationJoinGroup",
			Handler:    _WhisperNation_WhisperNationJoinGroup_Handler,
		},
		{
			MethodName: "WhisperNationListGroupMembers",
			Handler:    _WhisperNation_WhisperNationListGroupMembers_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service.whisper_nation.proto",
}
