// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: service.tokens.proto

package tokens

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
	Tokens_TokensWelcome_FullMethodName = "/tokens.Tokens/TokensWelcome"
	Tokens_TokensHealth_FullMethodName  = "/tokens.Tokens/TokensHealth"
	Tokens_TokensCreate_FullMethodName  = "/tokens.Tokens/TokensCreate"
	Tokens_TokensVerify_FullMethodName  = "/tokens.Tokens/TokensVerify"
)

// TokensClient is the client API for Tokens service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TokensClient interface {
	// ------------------------------------------------------ System
	TokensWelcome(ctx context.Context, in *TokensWelcomeRequest, opts ...grpc.CallOption) (*TokensWelcomeResponse, error)
	TokensHealth(ctx context.Context, in *TokensHealthRequest, opts ...grpc.CallOption) (*TokensHealthResponse, error)
	// ------------------------------------------------------------ Create
	TokensCreate(ctx context.Context, in *TokensCreateRequest, opts ...grpc.CallOption) (*TokensCreateResponse, error)
	// ------------------------------------------------------------ Verify
	TokensVerify(ctx context.Context, in *TokensVerifyRequest, opts ...grpc.CallOption) (*TokensVerifyResponse, error)
}

type tokensClient struct {
	cc grpc.ClientConnInterface
}

func NewTokensClient(cc grpc.ClientConnInterface) TokensClient {
	return &tokensClient{cc}
}

func (c *tokensClient) TokensWelcome(ctx context.Context, in *TokensWelcomeRequest, opts ...grpc.CallOption) (*TokensWelcomeResponse, error) {
	out := new(TokensWelcomeResponse)
	err := c.cc.Invoke(ctx, Tokens_TokensWelcome_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tokensClient) TokensHealth(ctx context.Context, in *TokensHealthRequest, opts ...grpc.CallOption) (*TokensHealthResponse, error) {
	out := new(TokensHealthResponse)
	err := c.cc.Invoke(ctx, Tokens_TokensHealth_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tokensClient) TokensCreate(ctx context.Context, in *TokensCreateRequest, opts ...grpc.CallOption) (*TokensCreateResponse, error) {
	out := new(TokensCreateResponse)
	err := c.cc.Invoke(ctx, Tokens_TokensCreate_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tokensClient) TokensVerify(ctx context.Context, in *TokensVerifyRequest, opts ...grpc.CallOption) (*TokensVerifyResponse, error) {
	out := new(TokensVerifyResponse)
	err := c.cc.Invoke(ctx, Tokens_TokensVerify_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TokensServer is the server API for Tokens service.
// All implementations must embed UnimplementedTokensServer
// for forward compatibility
type TokensServer interface {
	// ------------------------------------------------------ System
	TokensWelcome(context.Context, *TokensWelcomeRequest) (*TokensWelcomeResponse, error)
	TokensHealth(context.Context, *TokensHealthRequest) (*TokensHealthResponse, error)
	// ------------------------------------------------------------ Create
	TokensCreate(context.Context, *TokensCreateRequest) (*TokensCreateResponse, error)
	// ------------------------------------------------------------ Verify
	TokensVerify(context.Context, *TokensVerifyRequest) (*TokensVerifyResponse, error)
	mustEmbedUnimplementedTokensServer()
}

// UnimplementedTokensServer must be embedded to have forward compatible implementations.
type UnimplementedTokensServer struct {
}

func (UnimplementedTokensServer) TokensWelcome(context.Context, *TokensWelcomeRequest) (*TokensWelcomeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TokensWelcome not implemented")
}
func (UnimplementedTokensServer) TokensHealth(context.Context, *TokensHealthRequest) (*TokensHealthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TokensHealth not implemented")
}
func (UnimplementedTokensServer) TokensCreate(context.Context, *TokensCreateRequest) (*TokensCreateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TokensCreate not implemented")
}
func (UnimplementedTokensServer) TokensVerify(context.Context, *TokensVerifyRequest) (*TokensVerifyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TokensVerify not implemented")
}
func (UnimplementedTokensServer) mustEmbedUnimplementedTokensServer() {}

// UnsafeTokensServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TokensServer will
// result in compilation errors.
type UnsafeTokensServer interface {
	mustEmbedUnimplementedTokensServer()
}

func RegisterTokensServer(s grpc.ServiceRegistrar, srv TokensServer) {
	s.RegisterService(&Tokens_ServiceDesc, srv)
}

func _Tokens_TokensWelcome_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TokensWelcomeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokensServer).TokensWelcome(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Tokens_TokensWelcome_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokensServer).TokensWelcome(ctx, req.(*TokensWelcomeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tokens_TokensHealth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TokensHealthRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokensServer).TokensHealth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Tokens_TokensHealth_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokensServer).TokensHealth(ctx, req.(*TokensHealthRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tokens_TokensCreate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TokensCreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokensServer).TokensCreate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Tokens_TokensCreate_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokensServer).TokensCreate(ctx, req.(*TokensCreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Tokens_TokensVerify_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TokensVerifyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokensServer).TokensVerify(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Tokens_TokensVerify_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokensServer).TokensVerify(ctx, req.(*TokensVerifyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Tokens_ServiceDesc is the grpc.ServiceDesc for Tokens service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Tokens_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "tokens.Tokens",
	HandlerType: (*TokensServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TokensWelcome",
			Handler:    _Tokens_TokensWelcome_Handler,
		},
		{
			MethodName: "TokensHealth",
			Handler:    _Tokens_TokensHealth_Handler,
		},
		{
			MethodName: "TokensCreate",
			Handler:    _Tokens_TokensCreate_Handler,
		},
		{
			MethodName: "TokensVerify",
			Handler:    _Tokens_TokensVerify_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service.tokens.proto",
}
