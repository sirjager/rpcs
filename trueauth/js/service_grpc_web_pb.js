/**
 * @fileoverview gRPC-Web generated client stub for trueauth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.21.12
// source: service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var protoc$gen$openapiv2_options_annotations_pb = require('./protoc-gen-openapiv2/options/annotations_pb.js')

var rpc$welcome_pb = require('./rpc-welcome_pb.js')

var rpc$health_pb = require('./rpc-health_pb.js')

var rpc$signup_pb = require('./rpc-signup_pb.js')

var rpc$signin_pb = require('./rpc-signin_pb.js')

var rpc$signout_pb = require('./rpc-signout_pb.js')

var rpc$verify_pb = require('./rpc-verify_pb.js')

var rpc$reset_pb = require('./rpc-reset_pb.js')

var rpc$users_pb = require('./rpc-users_pb.js')
const proto = {};
proto.trueauth = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.trueauth.TrueAuthClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.trueauth.TrueAuthPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.WelcomeRequest,
 *   !proto.trueauth.WelcomeResponse>}
 */
const methodDescriptor_TrueAuth_Welcome = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Welcome',
  grpc.web.MethodType.UNARY,
  rpc$welcome_pb.WelcomeRequest,
  rpc$welcome_pb.WelcomeResponse,
  /**
   * @param {!proto.trueauth.WelcomeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$welcome_pb.WelcomeResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.WelcomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.WelcomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.WelcomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.welcome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Welcome',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Welcome,
      callback);
};


/**
 * @param {!proto.trueauth.WelcomeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.WelcomeResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.welcome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Welcome',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Welcome);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.HealthRequest,
 *   !proto.trueauth.HealthResponse>}
 */
const methodDescriptor_TrueAuth_Health = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Health',
  grpc.web.MethodType.UNARY,
  rpc$health_pb.HealthRequest,
  rpc$health_pb.HealthResponse,
  /**
   * @param {!proto.trueauth.HealthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$health_pb.HealthResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.HealthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.HealthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.health =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Health',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Health,
      callback);
};


/**
 * @param {!proto.trueauth.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.HealthResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.health =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Health',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Health);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.SignupRequest,
 *   !proto.trueauth.SignupResponse>}
 */
const methodDescriptor_TrueAuth_Signup = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Signup',
  grpc.web.MethodType.UNARY,
  rpc$signup_pb.SignupRequest,
  rpc$signup_pb.SignupResponse,
  /**
   * @param {!proto.trueauth.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$signup_pb.SignupResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.SignupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.SignupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.signup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Signup',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Signup,
      callback);
};


/**
 * @param {!proto.trueauth.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.SignupResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.signup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Signup',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Signup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.SigninRequest,
 *   !proto.trueauth.SigninResponse>}
 */
const methodDescriptor_TrueAuth_Signin = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Signin',
  grpc.web.MethodType.UNARY,
  rpc$signin_pb.SigninRequest,
  rpc$signin_pb.SigninResponse,
  /**
   * @param {!proto.trueauth.SigninRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$signin_pb.SigninResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.SigninRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.SigninResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.SigninResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.signin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Signin',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Signin,
      callback);
};


/**
 * @param {!proto.trueauth.SigninRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.SigninResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.signin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Signin',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Signin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.SignoutRequest,
 *   !proto.trueauth.SignoutResponse>}
 */
const methodDescriptor_TrueAuth_Signout = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Signout',
  grpc.web.MethodType.UNARY,
  rpc$signout_pb.SignoutRequest,
  rpc$signout_pb.SignoutResponse,
  /**
   * @param {!proto.trueauth.SignoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$signout_pb.SignoutResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.SignoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.SignoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.SignoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.signout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Signout',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Signout,
      callback);
};


/**
 * @param {!proto.trueauth.SignoutRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.SignoutResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.signout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Signout',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Signout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.VerifyRequest,
 *   !proto.trueauth.VerifyResponse>}
 */
const methodDescriptor_TrueAuth_Verify = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Verify',
  grpc.web.MethodType.UNARY,
  rpc$verify_pb.VerifyRequest,
  rpc$verify_pb.VerifyResponse,
  /**
   * @param {!proto.trueauth.VerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$verify_pb.VerifyResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.VerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.VerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.VerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Verify',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Verify,
      callback);
};


/**
 * @param {!proto.trueauth.VerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.VerifyResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Verify',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Verify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.ResetRequest,
 *   !proto.trueauth.ResetResponse>}
 */
const methodDescriptor_TrueAuth_Reset = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/Reset',
  grpc.web.MethodType.UNARY,
  rpc$reset_pb.ResetRequest,
  rpc$reset_pb.ResetResponse,
  /**
   * @param {!proto.trueauth.ResetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$reset_pb.ResetResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.ResetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.ResetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.ResetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.reset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/Reset',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Reset,
      callback);
};


/**
 * @param {!proto.trueauth.ResetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.ResetResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.reset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/Reset',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_Reset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.ListUsersRequest,
 *   !proto.trueauth.ListUsersResponse>}
 */
const methodDescriptor_TrueAuth_ListUsers = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/ListUsers',
  grpc.web.MethodType.UNARY,
  rpc$users_pb.ListUsersRequest,
  rpc$users_pb.ListUsersResponse,
  /**
   * @param {!proto.trueauth.ListUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$users_pb.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.listUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/ListUsers',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_ListUsers,
      callback);
};


/**
 * @param {!proto.trueauth.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.ListUsersResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.listUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/ListUsers',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_ListUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trueauth.GetUserRequest,
 *   !proto.trueauth.GetUserResponse>}
 */
const methodDescriptor_TrueAuth_GetUser = new grpc.web.MethodDescriptor(
  '/trueauth.TrueAuth/GetUser',
  grpc.web.MethodType.UNARY,
  rpc$users_pb.GetUserRequest,
  rpc$users_pb.GetUserResponse,
  /**
   * @param {!proto.trueauth.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc$users_pb.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.trueauth.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.trueauth.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trueauth.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trueauth.TrueAuthClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trueauth.TrueAuth/GetUser',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_GetUser,
      callback);
};


/**
 * @param {!proto.trueauth.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trueauth.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.trueauth.TrueAuthPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trueauth.TrueAuth/GetUser',
      request,
      metadata || {},
      methodDescriptor_TrueAuth_GetUser);
};


module.exports = proto.trueauth;

